# Next.js E-Commerce Application

A modern, responsive E-Commerce application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project features a robust product catalog with infinite scrolling, a dynamic cart system, and a gamified "Lucky 3rd Customer" checkout experience.

## ✨ Features

### 🛒 Product Catalog
- **Display Modes:** Toggle between Grid and List views.
- **Advanced Filtering:** Filter by Category, Rating, and Search text.
- **Sorting:** Sort by Price, Rating, and Discount.
- **Performance:** Implemented **Infinite Scroll** using Intersection Observer.
- **Data Fetching:** Powered by **TanStack Query** for caching and state management.

### 💼 Cart & Checkout
- **Persistent Cart:** Cart state persists via LocalStorage using Context API.
- **Detailed Pricing:** Logic to display MRP, Product Discount (Strikethrough), and Selling Price.
- **Modular Checkout:** Atomic component architecture (`ReviewItems`, `PricingSummary`, `CouponWidget`).
- **Gamified Offer:** Custom logic where **every 3rd order wins** an extra 10% discount.
- **Sticky Summary:** Smart sticky sidebar for order summary on checkout.

### 🎨 UI/UX
- **Responsive Design:** Mobile-first approach using Tailwind CSS.
- **Loading States:** Skeleton loaders for smoother user experience.
- **Feedback:** Toast notifications for success/error states (e.g., "Order Placed").

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API + [TanStack Query](https://tanstack.com/query/latest)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Backend (Mock):** Express.js (running on port 4000)

---

## 📂 Project Structure
ecommerce-website/
├── backend/                # Express Backend
│   ├── controller.js
│   ├── server.js
│   ├── store.js
│   └── package.json
├── src/
│   ├── app/
│   │   ├── cart/           # Cart Page
│   │   ├── checkout/       # Checkout Module
│   │   │   ├── CouponWidget.tsx
│   │   │   ├── EmptyCartView.tsx
│   │   │   ├── page.tsx    # Main Checkout Logic
│   │   │   ├── PricingSummary.tsx
│   │   │   ├── ReviewItemsList.tsx
│   │   │   └── SuccessView.tsx
│   │   ├── product/
│   │   ├── layout.tsx      # Root Layout
│   │   └── page.tsx        # Home Page
│   ├── components/         # Shared Components
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── ProductListTable.tsx
│   │   └── Products.tsx
│   ├── context/
│   │   ├── CartContext.tsx
│   │   └── FavoriteContext.tsx
│   ├── types/
│   └── utils/
├── .next/
├── public/
├── package.json
└── tsconfig.json
