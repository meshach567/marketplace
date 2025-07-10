# Marketplace App

A Facebook Marketplace-style web application built with Next.js 15, React 19, Supabase, and Tailwind CSS. This project demonstrates modern Next.js 15 features, including server components, Promise-based dynamic route params, and robust messaging with email notifications via Resend.

---

## 🚀 Features

- **Facebook-style UI**: Header, sidebar, and responsive grid layout
- **Dynamic Routing**: Promise-based params with async/await and React `use()`
- **Create Listings**: Users can create new listings with images, price, category, and description
- **Browse & Search**: Responsive item grid, category navigation, and search bar
- **Listing Detail**: Dedicated page for each item with full info and seller contact
- **Messaging**: Buyers can message sellers; messages are saved to Supabase and trigger email notifications via Resend
- **Authentication**: Supabase Auth integration for buyer email autofill
- **TypeScript**: Strict typing throughout
- **Tailwind CSS**: Modern, mobile-first design

---

## 🛠️ Tech Stack
- **Next.js 15** (App Router, server components)
- **React 19**
- **Supabase** (database, auth, storage)
- **Resend** (email notifications)
- **Tailwind CSS**
- **TypeScript**

---

## 📦 Getting Started

### 1. Clone the repo
```sh
git clone https://github.com/meshach567/marketplace.git
cd marketplace
```

### 2. Install dependencies
```sh
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

### 4. Run the development server
```sh
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🗂️ Project Structure
```
marketplace/
├── src/
│   ├── app/
│   │   ├── create/           # Listing creation flow
│   │   ├── item/[id]/        # Item detail page (Promise-based params)
│   │   ├── listing/[id]/     # Listing detail page (Promise-based params)
│   │   └── ...
│   ├── components/
│   │   ├── layout/           # Header, Sidebar
│   │   └── marketplace/      # ItemGrid, forms, etc.
│   └── lib/                  # Supabase client, utils
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## ✨ Usage
- **Create a listing**: Click "+ Create new listing" in the sidebar, choose a type, and fill out the form.
- **Browse listings**: Use the homepage grid, category tabs, or search bar.
- **View details**: Click any item to see full info and message the seller.
- **Message seller**: Fill out the message form; if logged in, your email is autofilled.

---

## 📝 Notes
- **TypeScript**: The project uses strict typing and the latest Next.js conventions.
- **Server Components**: Dynamic route pages use async/await and Promise-based params for optimal performance.
- **Messaging**: Messages are saved to Supabase and trigger Resend email notifications.
- **Authentication**: Supabase Auth is used for autofilling buyer email.
- **TypeScript Config**: Ensure `.next/types/**/*.ts` is NOT included in your `tsconfig.json`.

---

## 📄 License
MIT
