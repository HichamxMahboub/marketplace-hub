#!/bin/bash

echo "🚀 MarketHub - Multi-Vendor Marketplace Setup"
echo "=============================================="
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

echo "✅ Docker is running"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please edit .env and add your Stripe keys"
    echo "   Get them from: https://dashboard.stripe.com/test/apikeys"
    echo ""
fi

echo "🐳 Starting Docker containers..."
docker-compose up --build -d

echo ""
echo "⏳ Waiting for services to be ready..."
sleep 10

echo ""
echo "✅ MarketHub is running!"
echo ""
echo "📍 Access your marketplace:"
echo "   🌐 App: http://localhost:3000"
echo "   🗄️  Database: localhost:5433"
echo "   🔴 Redis: localhost:6379"
echo ""
echo "📚 Quick commands:"
echo "   View logs:    docker-compose logs -f app"
echo "   Stop:         docker-compose down"
echo "   Restart:      docker-compose restart"
echo ""
echo "🎯 Next steps:"
echo "   1. Visit http://localhost:3000"
echo "   2. Create an account at /register"
echo "   3. Choose 'Vendor' to add products"
echo "   4. Browse products at /shop"
echo ""
