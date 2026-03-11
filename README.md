# MarketHub - Multi-Vendor Marketplace

A full-featured e-commerce platform enabling multiple vendors to sell products with automated payment splits via Stripe Connect.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue) ![Docker](https://img.shields.io/badge/Docker-Ready-blue)

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
- 🛡️ Content moderation

## 🚀 Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL 16
- **Cache:** Redis 7
- **Payments:** Stripe Connect
- **Auth:** NextAuth.js v5
- **Deployment:** Docker + Docker Compose

## 📦 Quick Start

### Prerequisites
- Docker & Docker Compose
- Stripe account (free test mode)

### Installation

```bash
# Clone the repository
git clone https://github.com/HichamxMahboub/marketplace-hub.git
cd marketplace-hub

# Copy environment variables
cp .env.example .env

# Add your Stripe keys to .env
# Get them from: https://dashboard.stripe.com/test/apikeys

# Start with Docker
npm run docker:build

# Access at http://localhost:3000
```

That's it! Docker handles all dependencies and database setup.

## 🎯 Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Next.js   │────▶│  PostgreSQL  │     │   Stripe    │
│  Frontend   │     │   Database   │     │   Connect   │
│  + API      │     └──────────────┘     └─────────────┘
└─────────────┘            │                     │
       │                   │                     │
       ▼                   ▼                     ▼
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Redis     │     │    Prisma    │     │  Payment    │
│   Cache     │     │     ORM      │     │   Splits    │
└─────────────┘     └──────────────┘     └─────────────┘
```

## 📁 Project Structure

```
marketplace-hub/
├── app/
│   ├── api/              # Backend API routes
│   ├── (shop)/           # Customer-facing pages
│   ├── (vendor)/         # Vendor dashboard
│   └── (auth)/           # Authentication pages
├── components/           # Reusable React components
├── lib/                  # Utilities and configurations
├── prisma/              # Database schema and migrations
└── docker-compose.yml   # Docker services
```

## 🔧 Environment Variables

```env
DATABASE_URL=postgresql://user:pass@localhost:5432/marketplace
REDIS_URL=redis://localhost:6379
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 🧪 Testing

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- 3D Secure: `4000 0025 0000 3155`

## 📊 Database Schema

- **Users** - Customer, vendor, and admin accounts
- **Vendors** - Vendor profiles with Stripe Connect
- **Products** - Product listings with inventory
- **Orders** - Order management and tracking
- **Reviews** - Product ratings and feedback

## 🛠️ Development

```bash
# Start services
npm run docker:up

# Stop services
npm run docker:down

# View logs
npm run docker:logs

# Access database
docker exec -it marketplace-db psql -U marketplace
```

## 🚢 Deployment

Ready for deployment to:
- Vercel (recommended for Next.js)
- Railway
- AWS ECS
- Any Docker-compatible platform

## 📝 API Documentation

### Products
- `GET /api/products` - List products
- `POST /api/products` - Create product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Cart
- `GET /api/cart` - Get cart
- `POST /api/cart` - Add to cart
- `DELETE /api/cart` - Remove from cart

### Checkout
- `POST /api/checkout` - Process payment

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

## 📄 License

MIT License - feel free to use for your projects

## 👤 Author

**Hicham Mahboub**
- GitHub: [@HichamxMahboub](https://github.com/HichamxMahboub)
- Fiverr: [Your Fiverr Profile]

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js and Stripe Connect
