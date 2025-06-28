# Sections Folder Organization

## Overview
The `components/sections` folder has been reorganized based on the routes in the `@(app)` folder to improve maintainability and code organization.

## New Folder Structure

```
components/sections/
├── home/                    # Sections used on the main landing page (/)
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── smart-investing.tsx
│   ├── investment-approach-section.tsx
│   ├── portfolio-section-copy.tsx
│   ├── platform-businesses.tsx
│   └── investments-section.tsx
│
├── products/                # Sections used on products pages (/products)
│   ├── products-hero-section.tsx
│   ├── products-main-section.tsx
│   └── product-detail-section.tsx
│
├── news/                    # Sections used on news pages (/news)
│   ├── news-hero-section.tsx
│   ├── news-main-section.tsx
│   ├── news-detail-section.tsx
│   └── news-grid-section.tsx
│
├── insights/                # Sections used on insights pages (/insights)
│   ├── insights-hero-section.tsx
│   ├── insights-main-section.tsx
│   ├── insight-detail-section.tsx
│   ├── insights-grid-section.tsx
│   └── insights-stats-section.tsx
│
├── resources/               # Sections used on resources pages (/resources)
│   ├── resources-hero-section.tsx
│   └── resources-main-section.tsx
│
├── shared/                  # Sections used across multiple pages
│   ├── cta-section.tsx
│   ├── footer-section.tsx
│   └── contact-dialogue.tsx
│
└── unused/                  # Legacy/unused sections
    ├── impact-section.tsx
    ├── newsletter-section.tsx
    ├── portfolio-section.tsx
    └── why-us-section.tsx
```

## Route Analysis and Section Mapping

### Main Landing Page (`/`)
**File:** `app/(app)/page.tsx`
**Sections used:**
- `hero-section.tsx` → `home/hero-section.tsx`
- `about-section.tsx` → `home/about-section.tsx`
- `smart-investing.tsx` → `home/smart-investing.tsx`
- `investment-approach-section.tsx` → `home/investment-approach-section.tsx`
- `portfolio-section-copy.tsx` → `home/portfolio-section-copy.tsx`
- `platform-businesses.tsx` → `home/platform-businesses.tsx`
- `investments-section.tsx` → `home/investments-section.tsx`
- `cta-section.tsx` → `shared/cta-section.tsx`
- `footer-section.tsx` → `shared/footer-section.tsx`

### Products Pages (`/products`)
**Files:** `app/(app)/products/page.tsx`, `app/(app)/products/[id]/page.tsx`
**Sections used:**
- `products-hero-section.tsx` → `products/products-hero-section.tsx`
- `products-main-section.tsx` → `products/products-main-section.tsx`
- `product-detail-section.tsx` → `products/product-detail-section.tsx`
- `cta-section.tsx` → `shared/cta-section.tsx`
- `footer-section.tsx` → `shared/footer-section.tsx`

### News Pages (`/news`)
**Files:** `app/(app)/news/page.tsx`, `app/(app)/news/[id]/page.tsx`
**Sections used:**
- `news-hero-section.tsx` → `news/news-hero-section.tsx`
- `news-main-section.tsx` → `news/news-main-section.tsx`
- `news-detail-section.tsx` → `news/news-detail-section.tsx`
- `news-grid-section.tsx` → `news/news-grid-section.tsx` (unused but related)
- `cta-section.tsx` → `shared/cta-section.tsx`
- `footer-section.tsx` → `shared/footer-section.tsx`

### Insights Pages (`/insights`)
**Files:** `app/(app)/insights/page.tsx`, `app/(app)/insights/[id]/page.tsx`
**Sections used:**
- `insights-hero-section.tsx` → `insights/insights-hero-section.tsx`
- `insights-main-section.tsx` → `insights/insights-main-section.tsx`
- `insight-detail-section.tsx` → `insights/insight-detail-section.tsx`
- `insights-grid-section.tsx` → `insights/insights-grid-section.tsx` (unused but related)
- `insights-stats-section.tsx` → `insights/insights-stats-section.tsx` (unused but related)
- `cta-section.tsx` → `shared/cta-section.tsx`
- `footer-section.tsx` → `shared/footer-section.tsx`

### Resources Page (`/resources`)
**File:** `app/(app)/resources/page.tsx`
**Sections used:**
- `resources-hero-section.tsx` → `resources/resources-hero-section.tsx`
- `resources-main-section.tsx` → `resources/resources-main-section.tsx`
- `cta-section.tsx` → `shared/cta-section.tsx`
- `footer-section.tsx` → `shared/footer-section.tsx`

## Updated Import Statements

All import statements in the route files have been updated to reflect the new folder structure:

```typescript
// Before
import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"

// After
import { HeroSection } from "@/components/sections/home/hero-section"
import { CTASection } from "@/components/sections/shared/cta-section"
```

## Benefits of This Organization

1. **Clear Separation of Concerns**: Each folder contains sections related to specific pages/features
2. **Easier Maintenance**: Developers can quickly find sections related to specific pages
3. **Reduced Coupling**: Shared components are clearly identified
4. **Legacy Management**: Unused sections are preserved but separated
5. **Scalability**: New pages can easily add their own section folders
6. **Better Developer Experience**: Logical grouping makes navigation easier

## Notes

- All TypeScript imports have been updated and verified
- No compilation errors after reorganization
- The `unused` folder contains legacy sections that may be removed in the future
- The `shared` folder contains components used across multiple pages
- Grid sections are included in their respective folders even if not currently used, as they may be needed for future features
