# MarketHub - Multi-Vendor Marketplace

A full-featured e-commerce platform enabling multiple vendors to sell products with automated payment splits via Stripe Connect.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue) ![Docker](https://img.shields.io/badge/Docker-Ready-blue)

## 🎯 Live Demo

**Repository:** https://github.com/HichamxMahboub/marketplace-hub

## ✨ Features

### For Customers
- 🛍️ Browse products from multiple vendors
- 🔍 Search and filter by category
- 🛒 Shopping cart with real-time updates
- 💳 Secure checkout with Stripe
- 📦 Order tracking
- ⭐ Product reviews and ratings

### For Vendors
- 🏪 Personal storefront
- 📊 Dashboard for managing products and orders
- 💰 Automated payment splits via Stripe Connect
- 📈 Sales analytics
- 🎨 Customizable store profile

### For Admins
- 👥 User and vendor management
- 🔐 Vendor approval system
- 📊 Platform-wide analytics

## 🚀 Quick Start

### One-Command Setup

```bash
./setup.sh
```

### Manual Setup

```bash
# 1. Copy environment file
cp .env.example .env

# 2. Add your Stripe keys to .env
# Get them from: https://dashboard.stripe.com/test/apikeys

# 3. Start with Docker
docker-compose up --build -d

# 4. Access at http://localhost:3000
```

## 📱 Pages & Routes

- `/` - Landing page
- `/register` - Create account (Customer or Vendor)
- `/login` - Sign in
- `/shop` - Browse all products
- `/dashboard` - Vendor dashboard (add/manage products)
- `/cart` - Shopping cart
- `/checkout` - Payment processing

## 🛠️ Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL 16
- **Cache:** Redis 7
- **Payments:** Stripe Connect
- **Auth:** JWT-based authentication
- **Deployment:** Docker + Docker Compose

## 📊 Database Schema

- **Users** - Customer, vendor, and admin accounts
- **Vendors** - Vendor profiles with Stripe Connect
- **Products** - Product listings with inventory
- **Orders** - Order management and tracking
- **Cart** - Shopping cart items
- **Reviews** - Product ratings and feedback

## 🎨 Screenshots

### Landing Page
Clean, modern landing page with call-to-actions for customers and vendors.

### Shop Page
Grid layout displaying all products from multiple vendors.

### Vendor Dashboard
Simple interface for vendors to add and manage their products.

### Authentication
Clean login and registration forms with role selection.

## 🧪 Testing

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

## 🛠️ Development Commands

```bash
# View logs
docker-compose logs -f app

# Stop services
docker-compose down

# Restart services
docker-compose restart

# Access database
docker exec -it marketplace-db psql -U marketplace -d marketplace_hub

# Rebuild
docker-compose up --build -d
```

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Sign in
- `POST /api/auth/logout` - Sign out

### Products
- `GET /api/products` - List all products
- `POST /api/products` - Create product (vendor only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add to cart
- `DELETE /api/cart` - Remove from cart

### Checkout
- `POST /api/checkout` - Process payment

## 🚢 Deployment

Ready for deployment to:
- **Vercel** (recommended for Next.js)
- **Railway**
- **AWS ECS**
- Any Docker-compatible platform

## 📄 License

MIT License - feel free to use for your projects

## 👤 Author

**Hicham Mahboub**
- GitHub: [@HichamxMahboub](https://github.com/HichamxMahboub)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js and Stripe Connect
