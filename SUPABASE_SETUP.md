# Supabase Environment Setup

## Required Environment Variables

To use the Supabase integration, you need to create a `.env.local` file in the root directory with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://yncbsqzxvqdxgizvxetv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluY2JzcXp4dnFkeGdpenZ4ZXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMDYxODUsImV4cCI6MjA3Mzc4MjE4NX0.wR5l2YSo-5sxTuXcMa-zfp8Tgx3XMVVRE6gKOzSF384

# Required: Service Role Key (for server-side operations and bypassing RLS)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluY2JzcXp4dnFkeGdpenZ4ZXR2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODIwNjE4NSwiZXhwIjoyMDczNzgyMTg1fQ.blX4vVART_vp01hvv-9_0jYja7P4iNQ5qZl8RTFddTg
```

**⚠️ Important:** The `SUPABASE_SERVICE_ROLE_KEY` is **optional** for the contact form. The form now uses proper Row Level Security policies for security.

## Setup Instructions

1. **Create the environment file:**
   ```bash
   touch .env.local
   ```

2. **Add the variables above to your `.env.local` file**

3. **Restart your development server:**
   ```bash
   npm run dev
   ```

## Security Notes

- ✅ **Never commit** `.env.local` to version control
- ✅ **Use environment variables** for all sensitive credentials
- ✅ **The anon key** is safe to use in client-side code
- ⚠️ **The service role key** should only be used server-side and kept secure

## Database Schema

The contact form integrates with the `inquiries` table in Supabase with the following structure:

```sql
CREATE TABLE public.inquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email public.citext NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'::text,
  source text NULL DEFAULT 'web'::text,
  ip inet NULL,
  user_agent text NULL,
  category text NULL,
  CONSTRAINT inquiries_pkey PRIMARY KEY (id),
  CONSTRAINT inquiries_category_check CHECK (
    (category = ANY (
      ARRAY[
        'Casegoods'::text,
        'Bedroom Furniture'::text,
        'Outdoor Furniture'::text,
        'FF&E'::text,
        'Restaurant Furniture'::text,
        'Custom Solutions'::text,
        'Reception Items'::text,
        'Lobby Items'::text
      ]
    ))
  ),
  CONSTRAINT inquiries_status_check CHECK (
    (status = ANY (
      ARRAY[
        'new'::text,
        'contacted'::text,
        'qualified'::text,
        'archived'::text
      ]
    ))
  )
);
```

## Security Implementation

### Row Level Security (RLS) Policies

The `inquiries` table is secured with the following RLS policies:

```sql
-- Enable RLS
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert inquiries (for contact form)
CREATE POLICY "Allow anonymous inserts" ON public.inquiries
FOR INSERT
TO anon
WITH CHECK (
  full_name IS NOT NULL 
  AND email IS NOT NULL 
  AND phone IS NOT NULL 
  AND location IS NOT NULL 
  AND message IS NOT NULL
  AND status = 'new'
  AND source = 'web'
);

-- Allow authenticated users to read inquiries
CREATE POLICY "Users can read inquiries" ON public.inquiries
FOR SELECT
TO authenticated
USING (true);

-- Allow service role full access (for admin operations)
CREATE POLICY "Service role full access" ON public.inquiries
FOR ALL
TO service_role
USING (true);
```

### Additional Security Measures

- ✅ **Rate Limiting:** 5 requests per 15 minutes per IP address
- ✅ **Input Validation:** Length limits and format validation
- ✅ **Duplicate Prevention:** Blocks same email submissions within 1 hour
- ✅ **IP Tracking:** Records client IP for security monitoring
- ✅ **User Agent Logging:** Tracks browser information

## Testing the Integration

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the home page** and scroll to the contact form

3. **Fill out and submit the form** to test the database integration

4. **Check your Supabase dashboard** to verify the data is being stored correctly

5. **Test security features:**
   - Try submitting multiple times quickly (rate limiting)
   - Try submitting with the same email within an hour (duplicate prevention)
   - Check that invalid data is rejected

## Troubleshooting

### Error: "Missing Supabase environment variables"
- Ensure your `.env.local` file exists in the project root
- Verify the environment variables are correctly named
- Restart your development server after adding the variables

### Error: "Failed to submit inquiry"
- Check your Supabase project is active
- Verify the table schema matches the expected structure
- Check the browser console for detailed error messages
