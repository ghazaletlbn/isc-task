# React Items Dashboard

A React + TypeScript application for displaying and interacting with a paginated list of items.  
The project demonstrates practical patterns for server-state management, URL-based pagination, and performance-conscious UI design.

---

## 🚀 Features

- Server-side pagination (`skip` / `take`)
- URL-synchronized state (shareable & persistent)
- Page size selection
- Loading / error / empty states
- Optimistic UX during refetching (non-blocking UI updates)
- Jalali date formatting using native Intl API
- Responsive table UI with TailwindCSS
- Accessible pagination controls

---

## 🛠 Tech Stack

- React 18
- TypeScript
- Vite
- TanStack Query (React Query v5)
- React Router DOM
- Axios
- Tailwind CSS

---

## 🧠 Architecture Overview

### 1. URL as Single Source of Truth

Pagination state is fully derived from URL query parameters:

- `skip`
- `take`

This ensures:

- Page state persists on refresh
- Direct linking to any dataset state
- No need for external global state managers

The current page is derived using:

$$page = \lfloor \frac{skip}{take} \rfloor + 1$$

---

### 2. Server State Management

All server communication is handled via **TanStack Query**:

- Automatic caching per `(skip, take)` pair
- Request deduplication
- Background refetching support
- Built-in loading and error states

This removes the need for manual state handling or Redux-like solutions.

---

### 3. Pagination Logic Encapsulation

Pagination behavior is encapsulated in a custom hook:

`useUrlPagination`

Responsibilities:

- Reading query params safely
- Sanitizing invalid values
- Providing navigation helpers (next/previous)
- Handling page size changes

This keeps UI components purely presentational.

---

### 4. UI State Strategy

The UI differentiates between:

- `isLoading` → initial fetch (skeleton UI)
- `isFetching` → background refetch (dimmed UI)
- `isError` → error fallback with retry action

This ensures smooth transitions without layout shift or UI flickering.

---

### 5. API Layer

A dedicated Axios instance is used for:

- Centralized base configuration
- Consistent request structure
- Environment-based API switching

---

### 6. Date Handling

Dates are formatted using the native `Intl.DateTimeFormat` API with Persian calendar support:

- No external date libraries
- Lightweight and browser-native solution
- Ensures bundle size remains minimal

---

### 7. Component Structure

The project follows a feature-based structure:
```text
src/
├── components/   # Shared UI components
├── constants/    # Static configs and dictionaries
├── config/       # Environment setup
├── hooks/        # Reusable logic (pagination)
├── lib/          # API client setup
├── features/
│   └── items/
│       ├── api/        # Data fetching layer
│       ├── components  # Feature-specific UI
│       └── types.ts
└── utils/        # Pure utility functions

This structure ensures:

- High cohesion inside features
- Low coupling across modules
- Easy scalability for new domains

---

## ⚙️ Getting Started

### 1. Install dependencies
bash
npm install

### 2. Start API server
bash
npm run server

### 3. Start development server
bash
npm run dev

---

## 🧪 Edge Cases Covered

1. **State Persistence**
   Refreshing the page preserves pagination state via URL.
2. **Invalid URL Parameters**
   Non-numeric or negative values are sanitized. Fallbacks ensure safe API requests.
3. **Error Recovery**
   Network failures render a retry-enabled error state. Recovery does not require page reload.
4. **Rapid Navigation**
   React Query caching prevents unnecessary duplicate requests. UI remains consistent with latest requested state.

---

## 📌 Key Design Decisions

- No global state library (Redux/Zustand not needed)
- URL-driven state instead of local component state
- Separation of server-state (React Query) and UI-state (React state/URL)
- Lightweight native APIs preferred over external dependencies
- Feature-based architecture for scalability

---

## 📈 Summary

This project focuses on:

- Predictable state management
- Clean separation of concerns
- Performance-aware rendering strategy
- Practical production-ready React patterns
