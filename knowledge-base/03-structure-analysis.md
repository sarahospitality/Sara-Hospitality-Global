# Structure Analysis - Sara Global Hospitality

## Website Architecture Overview

### Global Framework
- **Domain**: saraglobalhospitality.com
- **Country Subdirectories**: `/ca/`, `/us/`, `/uk/`, `/ae/`, `/au/`
- **Location Detection**: IP-based redirection with manual country selection
- **Navigation Flow**: Common homepage → Country selection → Country-specific content

## Core Pages & Features

### 1. Common Homepage (Root Domain)
**Purpose**: Global brand showcase and country selection gateway

**Key Sections:**
1. **Global Brand Showcase**
   - Company overview and global presence
   - Brand messaging without specific product focus
   - Professional hospitality industry positioning

2. **Country Selection Interface**
   - Clear country selection options
   - Visual representation of global presence
   - Easy navigation to country-specific sites

3. **Global Navigation**
   - Links to all country-specific sites
   - Consistent branding across regions
   - Professional B2B presentation

### 2. Country-Specific Homepage (`/ca/`, `/us/`, etc.)
**Purpose**: Localized brand introduction and lead capture

**Sections:**
1. **Hero Banner / Top Banner**
   - Country-specific messaging
   - Auto-detected location confirmation
   - High-quality hospitality design imagery
   - CTAs: "Explore Products" + "Request a Quote"

2. **About Sara Global Hospitality**
   - Localized company introduction
   - Mission and expertise overview
   - Global reach demonstration

3. **Product Categories**
   - Casegoods, Seating, Outdoor, Lighting
   - Clickable category cards
   - Visual category representation

4. **Why Choose Us**
   - Key differentiators and value propositions
   - Global expertise highlights
   - Custom designs and durability focus
   - Sustainability initiatives

5. **Portfolio Showcase**
   - Featured projects (Hotel, Resort, Senior Living)
   - Case study thumbnails with links
   - Project diversity demonstration

6. **Testimonials / Client Logos**
   - Client feedback carousel
   - Recognized hotel chain logos
   - Trust and credibility building

7. **Inquiry / Contact Form**
   - B2B lead capture form
   - Fields: Name, Company, Email, Country, Inquiry Type
   - Strategic placement for conversion

8. **Footer**
   - Global navigation links
   - Legal information
   - Social media links
   - Location switcher

### 3. Products Section
**Purpose**: Comprehensive product catalog with basic filtering

**Structure:**
- **Categories (Top-level)**:
  - Casegoods
  - Seating
  - Outdoor
  - Lighting

**Product Detail Pages:**
- **Image Gallery**: High-quality product images
- **Specifications**: Dimensions, finishes, sustainability info
- **Downloadable Brochure**: PDF format
- **Related Products**: Cross-selling opportunities
- **CTA**: "Add to Quote" functionality

**Filtering System:**
- **Basic Category Filtering**: By product category only
- **Search Functionality**: Text-based product search
- **Simple Navigation**: Breadcrumb navigation

### 4. Portfolio Section
**Purpose**: Demonstrate expertise and build credibility

**Features:**
- **Filtering**: By Project Name/Brand Name only
- **Portfolio Card Layout**:
  - Before/after project visuals
  - Project location and scope
  - Products used (linked to product pages)
- **Case Study Detail Pages**:
  - Project narrative and requirements
  - Photos and videos
  - CTA: "Request Similar Solution"

### 5. About Us
**Purpose**: Build trust and establish brand authority

**Content Sections:**
- Company history and mission
- Leadership team and global presence
- Sustainability initiatives and certifications
- Manufacturing and supply chain capabilities
- Awards and industry memberships

### 6. Contact Page
**Purpose**: Capture inquiries from different countries

**Features:**
- **Dynamic Contact Form**:
  - Auto-fills user's country (IP-based detection)
  - Multi-field: Name, Company, Country, Email, Phone, Message
  - Department selection (Sales, Partnerships, Support)
- **Additional Information**:
  - Regional office addresses
  - Map integration
  - Contact details and business hours

### 7. Blog Section
**Purpose**: SEO strategy and thought leadership

**Categories:**
- Hospitality Design Trends
- Sustainability in Furniture
- Case Studies
- Global Expansion News

**Features:**
- SEO-friendly templates
- Internal linking to products/portfolio
- Author profiles (optional)
- Social sharing capabilities

## Key Features Implementation

### 1. IP-based Redirection
- **Functionality**: Detects user location automatically
- **Implementation**: Soft redirect with country confirmation
- **User Experience**: Non-intrusive banner/popup for country selection
- **SEO Considerations**: Avoids redirect issues

### 2. Locations Menu Dropdown
- **Placement**: Always visible in header
- **Functionality**: Manual country switching
- **Design**: Dropdown of supported regions
- **Navigation**: Direct links to country-specific homepages

### 3. Search & Filter System
- **Scope**: Products and Portfolio sections
- **Product Filtering**: Basic category-based filtering only
- **Portfolio Filtering**: By project name/brand name
- **Search**: Text-based search functionality

### 4. SEO & Performance Setup
- **Structure**: Subdirectory-based with hreflang tags
- **Schema Markup**: Product, Organization, Portfolio schemas
- **Design**: Mobile-first responsive approach
- **Performance**: Core Web Vitals optimization (LCP, CLS, FID)

## Homepage Wireframe Flow

### Common Homepage (Root Domain)
1. **Global Navigation Header**
2. **Hero Section**: Global brand showcase
3. **Country Selection Interface**
4. **Global Presence Overview**
5. **Footer**: Links to all country sites

### Country-Specific Homepage (`/ca/`, `/us/`, etc.)
1. **Top Nav / Locations Dropdown**
2. **Hero Banner** (IP-based auto-detected)
3. **About Us** (short summary)
4. **Product Categories Preview**
5. **Why Choose Us** (icons & benefits)
6. **Portfolio Teaser** (filterable cards)
7. **Testimonials / Client Logos**
8. **Inquiry Form** (lead capture)
9. **Footer** (links, global navigation, legal, socials)

## Development Timeline

### Phase Breakdown
- **Strategy & Planning**: 2 weeks
  - Competitor study, sitemap, wireframes
- **Design (UI/UX)**: 2–3 weeks
  - Homepage, product, portfolio, blog templates
- **Development (Front + Back End)**: 4–6 weeks
  - All country pages, CMS, filters, quote system
- **SEO Setup**: 1–2 weeks
  - Hreflang, schema, speed optimization
- **Testing & QA**: 1 week
  - Mobile, SEO, IP detection, quote flow
- **Launch: Canada**: Week 10
  - Go live with `/ca/`
- **Expansion**: Ongoing
  - Add `/us/`, `/uk/`, `/ae/`, `/au/`

## Updated Understanding Notes

### Excluded Features
1. **Bilingual Support**: English + French for Canada not required
2. **Advanced Filtering**: Basic category filtering only, not by type/material/industry
3. **3D Product Visualizations**: Standard images instead of 3D renders
4. **Complex B2B Workflows**: Simplified lead generation process

### Additional Requirements
1. **Common Homepage**: Separate global landing page distinct from country-specific pages
2. **Country Selection Flow**: Users must actively choose country from common homepage
3. **Simplified Architecture**: Reduced complexity in filtering and visualization features

## Technical Implementation Considerations

### Simplified Filtering System
- **Product Filtering**: Category-based only (Casegoods, Seating, Outdoor, Lighting)
- **Portfolio Filtering**: Project name/brand name only
- **Search Functionality**: Basic text search
- **No Advanced Filters**: Material, industry, price range filters excluded

### Media Requirements
- **Standard Images**: High-quality product photography
- **No 3D Assets**: Traditional image galleries only
- **Video Content**: Standard video formats for case studies
- **Document Downloads**: PDF brochures and specifications

### User Experience Flow
1. **Landing**: Users arrive at common homepage
2. **Selection**: Choose country from interface
3. **Navigation**: Redirected to country-specific homepage
4. **Exploration**: Browse products, portfolio, and content
5. **Conversion**: Submit inquiries and quote requests

### SEO Structure
- **Common Homepage**: Global SEO optimization
- **Country Pages**: Localized SEO with hreflang tags
- **Content Strategy**: Thought leadership and case studies
- **Technical SEO**: Schema markup, sitemaps, performance optimization

## Content Strategy

### Global Content
- **Brand Messaging**: Consistent across all markets
- **Company Information**: Global presence and capabilities
- **Industry Expertise**: Thought leadership content

### Localized Content
- **Country-Specific Messaging**: Tailored to local markets
- **Contact Information**: Regional office details
- **Legal Compliance**: Local regulations and requirements
- **Cultural Adaptation**: Market-specific content adjustments

### Content Types
- **Product Information**: Detailed specifications and features
- **Case Studies**: Project showcases and success stories
- **Blog Content**: Industry insights and thought leadership
- **Company Information**: About us, team, capabilities
