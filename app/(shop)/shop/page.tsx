import Link from "next/link"

async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/products`, {
    cache: "no-store",
  })
  if (!res.ok) return []
  return res.json()
}

export default async function ShopPage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">MarketHub</Link>
          <div className="flex gap-4">
            <Link href="/cart" className="px-4 py-2 hover:text-gray-600">Cart</Link>
            <Link href="/login" className="px-4 py-2 hover:text-gray-600">Login</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Browse Products</h1>
        
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-4">No products yet</p>
            <Link href="/vendor/register" className="text-blue-600 hover:underline">
              Become a vendor and add products
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: any) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
              >
                <div className="aspect-square bg-gray-200 rounded mb-4"></div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-xl font-bold">${product.price}</p>
                <p className="text-sm text-gray-500">{product.vendor.storeName}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
