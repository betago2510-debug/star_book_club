# 별책다방 (Star Book Cafe) - Celebrity Book Club App

## Overview

별책다방 is a Korean book club application that connects readers with celebrity hosts. The platform enables users to discover book clubs led by celebrities, read curated content, view daily quotes, and participate in a social reading community. The app combines elements of social media, content discovery, and e-commerce to create a premium reading experience centered around celebrity-curated book clubs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Client-side routing using Wouter (lightweight alternative to React Router)
- Component architecture follows a page-based structure with reusable UI components

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library with the "new-york" style preset
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theme configuration supporting light/dark modes
- Typography system using Noto Sans KR for Korean text and Inter as English fallback

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Local component state using React hooks
- Query client configured with infinite stale time and disabled refetching for performance

**Design System**
- Reference-based design inspired by Instagram's visual-first features, Notion's content organization, and Goodreads' book-focused layouts
- Responsive layout system with mobile-first approach
- Fixed bottom navigation for mobile, potential sidebar navigation for desktop
- Gradient overlays and backdrop blur effects for premium visual aesthetic
- Custom spacing primitives based on Tailwind scale (3, 4, 6, 8, 12, 16)

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- ESM (ECMAScript Modules) configuration throughout the codebase
- HTTP server creation using Node's built-in `http` module
- Custom middleware for request logging with timing and JSON response capture

**Data Layer**
- In-memory storage implementation (`MemStorage`) for development
- Interface-based storage pattern (`IStorage`) allowing easy swap to database implementations
- Currently implements basic user CRUD operations (getUser, getUserByUsername, createUser)
- UUID generation for entity IDs using Node's crypto module

**API Design**
- RESTful API pattern with `/api` prefix for all application routes
- Routes centralized in `server/routes.ts` for maintainability
- JSON request/response format with automatic parsing
- Request body buffering for raw body access when needed

**Development Environment**
- Vite middleware integration for HMR during development
- Custom error overlay for runtime error visualization in Replit
- Separate development and production build configurations
- Source map support for debugging

### Database Architecture

**ORM & Database Driver**
- Drizzle ORM for type-safe database operations
- Neon serverless PostgreSQL as the database provider
- WebSocket-based connection using ws library for serverless compatibility
- Database schema defined in TypeScript with automatic type inference

**Schema Design**
- Users table with UUID primary keys, unique usernames, and password storage
- Zod integration via drizzle-zod for runtime validation
- Migration support through Drizzle Kit with PostgreSQL dialect
- Schema exports both insert schemas and select types for type safety

**Connection Management**
- Connection pooling via Neon's Pool implementation
- Environment variable-based configuration (DATABASE_URL)
- Drizzle client instantiated with schema for enhanced type safety

### Routing & Navigation

**Page Structure**
- Landing page with hero image and authentication entry point
- Home page featuring hero banners, quotes, and club discovery
- Book club listing and detail pages
- Search functionality with result pages
- Profile/settings page (MyPage)
- Payment page for book purchases and club donations
- Quote of the day page
- Generic empty state page for under-construction features
- 404 Not Found page

**Navigation Patterns**
- Bottom tab navigation for primary sections (Home, Book Clubs, Quotes, Profile)
- Header with menu and search capabilities
- Programmatic navigation using Wouter's useLocation hook
- Search-based navigation with mock results for specific queries

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled React components including dialogs, dropdowns, navigation menus, tooltips, and form controls
- **shadcn/ui**: Pre-styled component collection built on Radix UI primitives
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command menu component for advanced search/navigation interfaces
- **Vaul**: Drawer component for mobile-optimized overlays

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration
- **class-variance-authority**: Type-safe utility for managing component variants
- **tailwind-merge**: Intelligent Tailwind class merging to prevent conflicts
- **clsx**: Conditional className construction utility

### Data Fetching & Forms
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant form validation and management
- **Hookform Resolvers**: Validation schema integration for React Hook Form
- **Zod**: TypeScript-first schema validation library

### Database & Backend
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver optimized for edge environments
- **drizzle-kit**: CLI tool for schema migrations and management
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas
- **ws**: WebSocket client for Neon database connections
- **connect-pg-simple**: PostgreSQL session store (prepared for session management)

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: JavaScript/TypeScript bundler for production builds
- **tsx**: TypeScript execution engine for development
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Source map visualization (development only)
- **@replit/vite-plugin-dev-banner**: Development mode indicator

### Utilities
- **date-fns**: Modern date utility library for formatting and manipulation
- **nanoid**: Compact, URL-safe unique ID generator
- **memoizee**: Function memoization library for performance optimization

### Assets & Resources
- Custom generated images stored in `attached_assets/generated_images/` directory
- Includes celebrity avatars, book covers, banner images, and portrait photography
- Font loading from Google Fonts (Noto Sans KR and Inter)