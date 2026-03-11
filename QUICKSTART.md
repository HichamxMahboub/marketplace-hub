# Marketplace Hub - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose installed
- Stripe account (for payment processing)

### Setup Steps

1. **Clone and navigate:**
   ```bash
   cd marketplace-hub
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Stripe keys:
   - Get test keys from: https://dashboard.stripe.com/test/apikeys
   - Add `STRIPE_SECRET_KEY` and `STRIPE_PUBLISHABLE_KEY`

3. **Start with Docker:**
   ```bash
   npm run docker:build
   ```
   
   This will:
   - Build the Next.js app
   - Start PostgreSQL database
   - Start Redis cache
   - Run database migrations
   - Launch the app on http://localhost:3000

4. **Access the application:**
   - Frontend: http://localhost:3000
   - Database: localhost:5432
   - Redis: localhost:6379

## 📦 What's Included

### Core Features
- ✅ User authentication (customers, vendors, admins)
- ✅ Multi-vendor storefronts
- ✅ Product management
- ✅ Shopping cart
- ✅ Stripe payment integration
- ✅ Order tracking
- ✅ Product reviews & ratings
- ✅ Search & filters

### Tech Stack
- **Frontend:** Next.js 16 + React 19 + Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL 16 + Prisma ORM
- **Cache:** Redis 7
- **Payments:** Stripe Connect
- **Auth:** NextAuth.js v5

## 🛠️ Development Commands

```bash
# Start all services
npm run docker:up

# Stop all services
npm run docker:down

# Rebuild and restart
npm run docker:build

# View application logs
npm run docker:logs

# Access database
docker exec -it marketplace-db psql -U marketplace -d marketplace_hub
```

## 📁 Project Structure

```
marketplace-hub/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── products/     # Product CRUD
│   │   ├── cart/         # Shopping cart
│   │   └── checkout/     # Payment processing
│   ├── (shop)/           # Customer-facing pages
│   ├── (vendor)/         # Vendor dashboard
│   └── (auth)/           # Login/register pages
├── components/           # Reusable React components
├── lib/                  # Utilities
│   ├── auth.ts          # NextAuth configuration
│   └── prisma.ts        # Database client
├── prisma/
│   └── schema.prisma    # Database schema
└── docker-compose.yml   # Docker services
```

## 🎯 Next Steps

1. **Create an admin user** (run in container):
   ```bash
   docker exec -it marketplace-app npx prisma studio
   ```

2. **Add sample products** via vendor dashboard

3. **Test checkout flow** with Stripe test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

4. **Customize branding** in `app/page.tsx`

## 🔐 Environment Variables

Required variables in `.env`:

```env
DATABASE_URL=postgresql://marketplace:marketplace_pass@postgres:5432/marketplace_hub
REDIS_URL=redis://redis:6379

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/signin` - Login
- `POST /api/auth/signout` - Logout

### Products
- `GET /api/products` - List products (with filters)
- `POST /api/products` - Create product (vendor only)
- `GET /api/products/[id]` - Get product details
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add to cart
- `DELETE /api/cart` - Remove from cart

### Checkout
- `POST /api/checkout` - Create payment intent

## 🐛 Troubleshooting

**Database connection issues:**
```bash
docker-compose down -v
docker-compose up --build
```

**Port already in use:**
Edit `docker-compose.yml` and change port mappings

**Prisma client errors:**
```bash
docker exec -it marketplace-app npx prisma generate
```

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Stripe Connect Guide](https://stripe.com/docs/connect)
- [NextAuth.js Docs](https://next-auth.js.org)

---

**Ready to deploy?** Check out deployment guides for Vercel, Railway, or AWS.
