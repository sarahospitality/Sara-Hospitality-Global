import { pgTable, text, timestamp, uuid, varchar, boolean, integer } from 'drizzle-orm/pg-core';

// Products table
export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  category: varchar('category', { length: 100 }).notNull(), // Casegoods, Seating, Outdoor, Lighting
  imageUrl: text('image_url'),
  specifications: text('specifications'),
  brochureUrl: text('brochure_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Portfolio/Projects table
export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  brandName: varchar('brand_name', { length: 255 }),
  location: varchar('location', { length: 255 }),
  scope: text('scope'),
  beforeImageUrl: text('before_image_url'),
  afterImageUrl: text('after_image_url'),
  videoUrl: text('video_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Blog posts table
export const blogPosts = pgTable('blog_posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  category: varchar('category', { length: 100 }).notNull(), // Hospitality Design Trends, Sustainability, Case Studies
  author: varchar('author', { length: 255 }),
  imageUrl: text('image_url'),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  published: boolean('published').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Contact/Inquiry table
export const inquiries = pgTable('inquiries', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  country: varchar('country', { length: 100 }).notNull(),
  message: text('message'),
  department: varchar('department', { length: 100 }), // Sales, Partnerships, Support
  ipAddress: varchar('ip_address', { length: 45 }),
  createdAt: timestamp('created_at').defaultNow(),
});

// Quote requests table
export const quoteRequests = pgTable('quote_requests', {
  id: uuid('id').primaryKey().defaultRandom(),
  inquiryId: uuid('inquiry_id').references(() => inquiries.id),
  productIds: text('product_ids'), // JSON array of product IDs
  status: varchar('status', { length: 50 }).default('pending'), // pending, processing, completed
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
