# Hydration Error Notes

## Browser Extension Hydration Warnings

### Issue
The console may show React hydration warnings with attributes like:
- `bis_skin_checked="1"` (ad blockers/privacy tools)
- `data-sharkid` and `data-sharklabel` (autofill/password manager extensions)
- `shark-icon-container` elements (password manager extensions)

This is **not a code issue** but rather caused by browser extensions that modify the DOM before React hydrates.

### Solution
We've implemented multiple fixes:

1. **Disabled SSR for ContactSection** - Since it's below the fold, we set `ssr: false` in the dynamic import to prevent hydration mismatches from form-related extensions.

2. **Added `suppressHydrationWarning`** to key elements:
   - Root `<html>` and `<body>` elements
   - `ClientLayout` wrapper div
   - Footer component
   - Form inputs (name, email, phone) that are commonly modified by autofill/password managers
   - Form element itself

### Impact
- **Development**: Warnings may appear in console when browser extensions are active
- **Production**: Minimal impact - React handles hydration gracefully
- **User Experience**: No visible impact on end users

### Browser Extensions That Can Cause This
- Ad blockers (uBlock Origin, AdBlock Plus, etc.) - adds `bis_skin_checked`
- Privacy extensions - modifies DOM attributes
- Autofill/password managers (Shark, LastPass, 1Password, etc.) - adds `data-sharkid`, `data-sharklabel`
- Security extensions that modify DOM attributes

### How to Verify It's Not Our Code
- Open site in Incognito mode (extensions disabled) - warnings should disappear
- Check that all date/time rendering uses consistent formatting
- Verify no `Math.random()` or `Date.now()` in render functions
- Confirm no conditional rendering based on `typeof window !== 'undefined'`

### Code Verification Completed
✅ No `Date.now()` or `Math.random()` in client components
✅ Date formatting is consistent (only in API routes/server-side)
✅ No problematic `typeof window` checks in render paths
✅ All time-sensitive data is fetched client-side via `useEffect`

### Recommendation
This is a known Next.js limitation when browser extensions modify the DOM. The warnings are harmless and don't affect functionality. 

**Current Fix:** 
- ContactSection now renders client-side only (`ssr: false`), which completely eliminates hydration warnings for this component
- Form inputs have `suppressHydrationWarning` to gracefully handle extension-injected attributes
- This provides the best user experience while maintaining performance (since ContactSection is below the fold anyway)

The warnings can be safely ignored in production, and our fixes ensure they don't affect functionality or performance.

