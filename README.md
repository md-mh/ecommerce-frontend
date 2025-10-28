<!-- a short system design overview including setup instructions, architecture explanation, and time spent -->

# This is a [Saimon Store](https://ecommerce-mdmh.vercel.app) project overview.

- Live link: https://ecommerce-mdmh.vercel.app/
- A modern e-commerce frontend built with **Next.js**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**, designed for performance, scalability, and clean architecture.

---

## Setup Instructions

First, clone, install and run this project :

```bash
git clone https://github.com/md-mh/ecommerce-frontend.git
```

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Architecture Explanation

### **1. App Directory (`/app`)**

- Uses the **Next.js App Router** architecture.
- Includes routing files:
  - `page.tsx` – Main entry page
  - `layout.tsx` – Root layout for global providers and UI wrappers
  - `loading.tsx` – Loading state handling
  - `error.tsx` and `not-found.tsx` – Error boundaries
- Global styles managed in `globals.css`.
- (public) Folder are public user pages with layout.

### **2. Components (`/components`)**

- Organized by feature for maintainability:
  - `cart/`, `home/`, `layout/`, `productDetails/`, `shared/`
- Each module contains reusable UI elements and feature-specific components.

### **3. Hooks (`/hooks`)**

- Custom hooks for managing theme and UI state, e.g., `useTheme.ts`.

### **4. Redux (`/redux`)**

- **features/** – Contains Redux slices for specific app modules.
- **rootReducer.ts** – Combines all reducers.
- **store.ts** – Configures and exports Redux store.
- **ReduxProvider.tsx** – Provides store context to the entire app.

### **5. Types (`/types`)**

- Centralized TypeScript definitions for entities such as:
  - `Billing.ts`, `Cart.ts`, `Products.ts`, `Theme.ts`
- Ensures consistent type safety across the project.

### **6. Utils (`/utils`)**

- Utility functions and constants:
  - `apiUrl.ts` – API endpoint management.
  - `get.ts` – Generic GET request handler for data fetching.

---

## Time Spent : 2 Days
