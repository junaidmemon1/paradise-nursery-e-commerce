# 🌿 Paradise Nursery - E-Commerce Plant Shop

A beautiful, full-stack e-commerce application for selling plants and gardening accessories. Built with modern technologies and featuring a stunning, responsive design.

![Paradise Nursery](https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1200&q=80)

## ✨ Features

### Customer Features
- **🛒 Shopping Cart** - Add/remove items, adjust quantities, persistent cart state
- **❤️ Wishlist** - Save favorite products (requires authentication)
- **🔍 Product Search & Filters** - Search by name, filter by category, sort by price/name
- **📱 Responsive Design** - Beautiful on all devices (mobile, tablet, desktop)
- **🎨 Premium UI/UX** - Glassmorphism effects, smooth animations, micro-interactions
- **👤 User Authentication** - Sign up, login, profile management
- **📦 Order Management** - Place orders, view order history
- **📧 Newsletter Subscription** - Stay updated with latest offers

### Admin Features
- **📊 Dashboard** - Overview of orders, products, messages
- **🌱 Product Management** - Add, edit, delete products
- **📋 Order Management** - View and update order status
- **💬 Message Center** - View and respond to customer inquiries

### Technical Features
- **🔐 Row Level Security** - Secure data access with Supabase RLS
- **⚡ Real-time Updates** - Instant data synchronization
- **🎭 Dark/Light Mode** - Theme support
- **🚀 Optimized Performance** - Lazy loading, code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router v6
- **Forms**: React Hook Form, Zod validation
- **Icons**: Lucide React
- **Animations**: CSS animations, Tailwind animations

## 📁 Project Structure

```
src/
├── components/
│   ├── cart/          # Cart drawer component
│   ├── home/          # Homepage sections (Hero, Categories, etc.)
│   ├── layout/        # Navbar, Footer, Layout wrapper
│   ├── products/      # Product card, product list
│   └── ui/            # shadcn/ui components
├── context/           # React contexts (Auth, Cart)
├── data/              # Static data (categories)
├── hooks/             # Custom hooks (useProducts, useWishlist, etc.)
├── integrations/      # Supabase client and types
├── lib/               # Utility functions
├── pages/             # Route pages
│   ├── admin/         # Admin panel pages
│   └── ...            # Customer-facing pages
└── types/             # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd paradise-nursery
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Environment Variables

The project uses Lovable Cloud (Supabase) for the backend. Environment variables are automatically configured when using Lovable. If running locally with your own Supabase instance:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🗄️ Database Schema

### Tables

- **products** - Plant and accessory catalog
- **profiles** - User profile information
- **orders** - Customer orders
- **order_items** - Items within each order
- **wishlist** - User's saved products
- **contact_messages** - Customer inquiries
- **user_roles** - Admin/user role management

## 🔐 Authentication

The app uses Supabase Auth with:
- Email/Password authentication
- Auto-confirm email signups (for development)
- Protected routes for authenticated users
- Admin-only routes for product/order management

## 🎨 Design System

The project uses a custom design system with:
- **Colors**: Forest green, cream, terracotta, sage
- **Typography**: Playfair Display (headings), DM Sans (body)
- **Animations**: Float, fade, scale, slide effects
- **Components**: Glassmorphism cards, premium shadows

## 📦 Deployment

The app is designed to be deployed on Lovable. Simply click "Publish" in the Lovable editor to deploy.

For manual deployment:
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is created with Lovable. All rights reserved.

---

**Made with 💚 by Paradise Nursery Team**

© 2024 Junaid Ahmed Memon. All Rights Reserved.
