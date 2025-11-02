# Design Guidelines for 별책다방 (Star Book Cafe) - Book Club App

## Design Approach

**Selected Approach:** Reference-Based Design inspired by Instagram's visual-first social features + Notion's content organization + Goodreads' book-focused layouts

**Design Philosophy:** Create a warm, inviting digital reading space that combines the intimacy of a cozy cafe with the energy of celebrity-driven social engagement. The experience should feel premium yet approachable, encouraging users to discover books through their favorite influencers.

## Core Design Elements

### A. Typography System

**Primary Font:** 'Noto Sans KR' (Korean) + 'Inter' (English fallback)
- Hero Headlines: 700 weight, 2.5rem-4rem (responsive)
- Section Titles: 700 weight, 1.75rem-2.25rem
- Card Titles/Book Titles: 600 weight, 1.25rem-1.5rem
- Body Text: 400 weight, 1rem (16px baseline)
- Captions/Meta Info: 400 weight, 0.875rem
- Button Text: 600 weight, 1rem

**Reading Hierarchy:** Prioritize exceptional readability for long-form content (book descriptions, discussion posts) with generous line-height (1.7 for Korean text, 1.6 for English).

### B. Layout System

**Spacing Primitives:** Tailwind units of 3, 4, 6, 8, 12, 16
- Micro spacing (within components): 3, 4
- Component padding: 6, 8
- Section spacing: 12, 16
- Page margins: 8, 12, 16

**Grid System:**
- Mobile: Single column, max-w-full with px-4
- Tablet: 2-column grids for cards, max-w-5xl
- Desktop: 3-4 column grids for book/club cards, max-w-7xl
- Content reading width: max-w-3xl for optimal readability

### C. Component Library

**Navigation:**
- Fixed top navigation with blur backdrop effect
- Logo/app name on left, user avatar/profile on right
- Bottom tab bar for mobile (Home, Discover, My Books, Profile)
- Desktop sidebar navigation for club sections

**Hero/Landing Elements:**
- Full-screen immersive hero with background image (cafe/reading atmosphere)
- Gradient overlay for text legibility (dark gradient from top)
- Centered content with generous vertical padding (py-20 to py-32)
- CTA buttons with backdrop blur effect for clarity against varied backgrounds

**Book Cards:**
- Vertical card layout with book cover image
- Book title, author, celebrity recommendation badge
- Progress indicators for books in reading
- Hover state: subtle elevation (shadow-lg) and scale (scale-105)
- Rounded corners (rounded-xl)

**Club/Celebrity Cards:**
- Horizontal layout combining avatar, name, current book, member count
- Featured clubs: larger format with cover image background
- Join/Following buttons with clear state indicators

**Content Displays:**
- Discussion posts: Instagram-like feed with user avatar, post content, reactions
- Reading progress: Visual progress bars with milestone celebrations
- Book details: Split layout (image left, details right on desktop)
- Quotes/highlights: Styled blockquotes with attribution

**Forms & Inputs:**
- Rounded input fields (rounded-lg) with consistent padding (p-4)
- Clear label hierarchy above inputs
- Button groups with primary/secondary distinction
- Search bars with icon prefixes

**Social Elements:**
- Like/comment/share interactions following familiar social patterns
- User avatars: circular (rounded-full) with online status indicators
- Notification badges with counts
- Achievement/milestone celebrations with decorative elements

**Data Displays:**
- Reading statistics: Clean number displays with contextual labels
- Book shelves: Grid view with filtering options
- Activity feeds: Timeline-style chronological display

### D. Visual Treatment

**Imagery Strategy:**

*Hero Section:*
- Large hero image showing warm cafe/reading environment (as provided)
- Optimized for emotional connection and brand atmosphere
- Maintained across login and key landing pages

*Book Covers:*
- Prominent display as primary visual elements
- Consistent aspect ratios with shadow effects for depth
- Lazy loading for performance

*Celebrity/User Avatars:*
- Circular crops with subtle borders
- Verified badges for celebrity accounts
- Placeholder silhouettes for missing images

*Background Treatments:*
- Subtle texture overlays for depth
- Gradient backgrounds for section breaks
- Blur effects for overlays maintaining focus

**Spacing Philosophy:**
Embrace generous whitespace to create breathing room between content sections. Books and reading require calm, uncluttered environments—avoid cramming information. Each section should have clear visual boundaries with padding of at least p-12 on desktop, p-8 on mobile.

**Interaction Patterns:**
- Minimal, purposeful animations (150-200ms transitions)
- Smooth page transitions for navigation
- Skeleton screens for loading states
- Haptic-feeling button presses (subtle scale-down on active state)
- Infinite scroll for feeds with loading indicators

**Mobile-First Considerations:**
- Touch-friendly tap targets (minimum 44px height)
- Swipeable book carousels
- Pull-to-refresh on feeds
- Bottom-sheet modals for actions
- Sticky CTAs for key conversion points

## Page-Specific Guidelines

**Login/Landing Page:**
- Full-viewport hero with background image
- Centered vertical content stack
- App name (large, bold), tagline (medium weight)
- Primary CTA: prominent button with backdrop blur
- Secondary CTA: subtle ghost button
- No navigation header on initial landing

**Main Feed:**
- Top navigation with search and filters
- Mixed content feed: book recommendations, club updates, reading progress
- Card-based layout with generous spacing (gap-6)
- Floating action button for quick post/share

**Book Detail Pages:**
- Hero section with large book cover
- Two-column layout (image/details) on desktop
- Prominent "Start Reading" or "Join Discussion" CTAs
- Related books carousel at bottom
- User reviews and highlights sections

**Profile/My Books:**
- Cover photo area with avatar overlay
- Reading statistics prominently displayed
- Tabbed sections: Currently Reading, Finished, Want to Read
- Achievement badges and reading streaks

This design system creates a cohesive, book-focused social experience that feels both premium and welcoming, perfectly suited for a celebrity-driven book club community.