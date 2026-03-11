import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MarketHub</h1>
          <div className="flex gap-4">
            <Link href="/login" className="px-4 py-2 text-gray-700 hover:text-blue-600">Login</Link>
            <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-6xl font-bold text-gray-900">Multi-Vendor Marketplace</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect buyers with sellers. Built with Next.js, Stripe Connect, and modern web technologies.
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <Link href="/shop" className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">
              Browse Products
            </Link>
            <Link href="/vendor/register" className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg text-lg hover:bg-blue-50">
              Become a Vendor
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-white border border-blue-100 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-blue-600">🏪 Multi-Vendor</h3>
            <p className="text-gray-600">Multiple vendors can sell on one platform with their own storefronts</p>
          </div>
          <div className="p-6 bg-white border border-blue-100 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-blue-600">💳 Stripe Connect</h3>
            <p className="text-gray-600">Automated payment splits to vendors with Stripe Connect</p>
          </div>
          <div className="p-6 bg-white border border-blue-100 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-blue-600">📊 Dashboards</h3>
            <p className="text-gray-600">Vendor and admin dashboards for managing products and orders</p>
          </div>
        </div>
      </main>
    </div>
  )
}
