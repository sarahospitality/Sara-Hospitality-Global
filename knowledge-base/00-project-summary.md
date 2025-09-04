# Sara Global Hospitality - Project Knowledge Base Summary

## Project Overview

**Sara Global Hospitality** is a B2B hospitality furniture company developing a comprehensive digital platform for global market expansion, starting with Canada. The website serves as a **lead generation engine** rather than a traditional e-commerce platform, designed to capture qualified sales inquiries and facilitate B2B sales processes.

## Updated Project Understanding

### Core Business Model
- **Target Audience**: Hotels, resorts, senior living facilities, hospitality operators
- **Sales Process**: Lead generation through quote requests, brochure downloads, contact forms
- **Primary Goal**: Establish credibility and capture qualified B2B leads
- **Key Differentiator**: Custom furniture solutions with proven hospitality project track record

### Excluded Features (Per User Clarification)
1. **Complex B2B Negotiations**: Not included in website functionality
2. **Bilingual Support**: English + French for Canada not required
3. **Advanced Filtering**: Basic category filtering only, not by type/material/industry
4. **3D Product Visualizations**: High-fidelity renders and animations not included

### Additional Requirements
1. **Common Homepage**: Separate global landing page distinct from country-specific pages
2. **Country Selection Flow**: Users must actively choose country from common homepage
3. **Simplified Architecture**: Reduced complexity in filtering and visualization features

## Technical Architecture

### Technology Stack
- **Frontend**: Next.js 15.5 with TypeScript
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Styling**: Tailwind CSS
- **ORM**: Drizzle ORM
- **Deployment**: Vercel with CI/CD pipelines

### Website Structure
- **Main Domain**: saraglobalhospitality.com
- **Common Homepage**: Root domain (global brand showcase + country selection)
- **Country Subdirectories**: `/ca/`, `/us/`, `/uk/`, `/ae/`, `/au/`
- **Navigation Flow**: Common homepage → Country selection → Country-specific content

## Core Pages & Features

### Common Homepage (Root Domain)
**Purpose**: Global brand showcase and country selection gateway
- Global presence demonstration
- Country selector interface
- Brand overview without specific product focus
- Navigation to country-specific sites

### Country-Specific Homepage (`/ca/`, `/us/`, etc.)
**Purpose**: Localized brand introduction and lead capture
- Hero banner with country-specific messaging
- About section with localized company introduction
- Product categories (Casegoods, Seating, Outdoor, Lighting)
- Why Choose Us section with key differentiators
- Portfolio showcase with featured projects
- Testimonials and client logos
- Inquiry/contact form for lead capture
- Blog section for thought leadership

### Products Section
- **Categories**: Casegoods, Seating, Outdoor, Lighting
- **Product Detail Pages**: Image galleries, specifications, downloadable brochures
- **Filtering**: Basic category-based filtering only
- **CTA**: "Add to Quote" functionality

### Portfolio Section
- **Purpose**: Demonstrate expertise and build credibility
- **Filtering**: By project name/brand name only
- **Case Study Pages**: Detailed project narratives with photos/videos
- **CTA**: "Request Similar Solution" buttons

### About Us
- Company history and mission
- Leadership team and global presence
- Sustainability initiatives and certifications
- Manufacturing capabilities

### Contact Page
- Dynamic forms with IP-based country detection
- Multi-field forms (Name, Company, Country, Email, Phone, Message)
- Department selection (Sales, Partnerships, Support)

### Blog Section
- **Categories**: Hospitality Design Trends, Sustainability, Case Studies
- **Purpose**: SEO strategy and thought leadership
- **Features**: SEO-friendly templates with internal linking

## Key Features

### Location Detection & Navigation
- **IP-based Detection**: Automatic country detection with soft redirects
- **Manual Selection**: "Locations" dropdown in header
- **User Experience**: Non-intrusive country confirmation banners

### Lead Generation System
- **Quote Management**: "Add to Quote" functionality for B2B clients
- **Contact Forms**: Multiple strategic placement points
- **Inquiry Tracking**: Comprehensive lead capture and management

### SEO & Performance
- **Technical Foundation**: Subdirectory structure with hreflang tags
- **Schema Markup**: Product, Organization, Breadcrumb, FAQ schemas
- **Performance**: Mobile-first responsive design, Core Web Vitals optimization
- **Security**: SSL certificates, CSP headers, rate limiting

## Development Phases (9-12 weeks)

### Phase 0 — Discovery & Alignment (Week 1)
- Finalized sitemap and information architecture
- Defined KPIs and success metrics
- Competitor analysis and keyword mapping

### Phase 1 — Platform Foundation (Weeks 2–3)
- Tech stack setup (Next.js, Supabase, Tailwind CSS)
- Global layout and database schema
- CI/CD pipelines and security foundation

### Phase 2 — Core Domain & CMS (Weeks 4–5)
- Product catalog and portfolio system
- Blog platform and contact/quote forms
- Lightweight CMS for content publishing

### Phase 3 — Canada Launch Package (Weeks 6–7)
- Common homepage and country routing (`/ca/` structure)
- Localization and SEO optimization
- Country selection user flow

### Phase 4 — Performance, Accessibility & Security (Week 8)
- Core Web Vitals optimization
- WCAG 2.1 AA accessibility testing
- Security hardening and performance optimization

### Phase 5 — QA, Content Freeze & Launch (Week 9)
- Cross-device/browser QA
- Final editorial review and content freeze
- Production launch with monitoring

### Phase 6 — Post-Launch Iteration & Expansion Prep (Weeks 10–12)
- KPI analysis and conversion optimization
- Backlog preparation for next market launches
- Performance optimization and feature exploration

## Quality Standards

### Performance Requirements
- **JavaScript Budget**: ≤180KB initial load
- **Lighthouse Score**: ≥90 across all metrics
- **Core Web Vitals**: LCP < 2.5s, CLS < 0.1, INP < 200ms
- **Mobile Performance**: Optimized mobile-first experience

### Accessibility Standards
- **Compliance**: WCAG 2.1 AA level
- **Testing**: Keyboard navigation, ARIA roles, contrast ratios
- **Tools**: Automated and manual accessibility testing

### Security Standards
- **Framework**: OWASP ASVS Level 1
- **Database**: Strict Row Level Security (RLS) policies
- **Headers**: Content Security Policy (CSP) implementation
- **Protection**: Bot detection and rate limiting

## Success Metrics

### Primary KPIs
- **Lead Generation**: Quote request submissions, brochure downloads
- **Contact Form Completions**: B2B inquiry capture rates
- **Portfolio Engagement**: Case study views and interactions

### Secondary KPIs
- **SEO Performance**: Organic traffic growth, keyword rankings
- **User Experience**: Core Web Vitals scores, mobile performance
- **Content Engagement**: Blog readership, content downloads

## Team Structure

### Tech Lead
- Architecture, CI/CD, security, code review

### Full-Stack Developer
- Backend, data models, API integration, performance

### Frontend Developer
- UI components, pages, localization, animations

### Designer
- Brand tokens, components, responsive QA, UX

### Content/SEO Specialist
- Copywriting, metadata, structured data, localization

### QA Engineer
- Test plans, regression testing, accessibility & performance audits

## Risk Mitigation

### Technical Risks
- Performance issues: Early optimization and monitoring
- SEO problems: Comprehensive technical SEO implementation
- Security vulnerabilities: OWASP compliance and regular audits

### Business Risks
- Timeline delays: Agile methodology with regular checkpoints
- Scope creep: Clear phase deliverables and change management
- Quality issues: Comprehensive testing and review processes

## Implementation Considerations

### Simplified Features
- **Basic Filtering**: Category-based filtering only
- **Standard Media**: Traditional image galleries instead of 3D assets
- **Single Language**: English-only implementation
- **Streamlined UX**: Simplified user journey from common to country-specific pages

### Development Priorities
1. **Common Homepage**: Global brand showcase and country selection
2. **Country-Specific Pages**: Localized content and lead generation
3. **Basic Functionality**: Essential features without advanced complexity
4. **Performance Focus**: Core Web Vitals and SEO optimization

## Next Steps

The project is ready for development setup following the phased approach outlined in the roadmap. The knowledge base has been established with comprehensive understanding of all requirements, exclusions, and technical specifications. Development can proceed with confidence in the project scope and objectives.
