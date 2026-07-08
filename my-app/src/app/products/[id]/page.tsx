import Navbar from "@/components/layout/Navbar";
import { products } from "@/data/products";
import Image from "next/image";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = products.find((item) => String(item.id) === String(id));

    if (!product) {
        return (
            <div className="flex h-screen items-center justify-center">
                <h1 className="text-4xl font-bold">Product Not Found</h1>
            </div>
        );
    }
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-7xl px-6 py-10">
                <div className="grid gap-10 md:grid-cols-2">
                    {/* Fixed parent wrapper for Next.js Image */}
                    <div className="relative h-[400px] w-full overflow-hidden rounded-xl md:h-[500px]">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority 
                        />
                    </div>

                    <div className="space-y-6">
                        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                            {product.category}
                        </span>
                        
                        <h1 className="text-4xl font-bold">
                            {product.name}
                        </h1>
                        
                        <p className="text-lg text-gray-600">
                            {product.description}
                        </p>
                        
                        <div className="flex items-center gap-6">
                            <h2 className="text-3xl font-bold text-green-600">
                                ₹{product.price.toLocaleString("en-IN")}
                            </h2>
                            {product.discount && (
                                <span className="rounded bg-red-100 px-2 py-1 text-red-600">
                                    {product.discount}% OFF
                                </span>
                            )}
                        </div>
                        
                        <p>⭐ {product.rating} / 5</p>
                        
                        <p>
                            Brand:
                            <span className="ml-2 font-semibold">
                                {product.brand}
                            </span>
                        </p>
                        
                        <p>
                            Stock:
                            <span className="ml-2 font-semibold">
                                {product.stock}
                            </span>
                        </p>
                        
                        <div className="flex gap-4">
                            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
                                Add to Cart
                            </button>
                            <button className="rounded-lg border px-8 py-3 font-semibold transition hover:bg-gray-100">
                                Wishlist
                            </button>
                        </div>
                        
                        {product.tags && product.tags.length > 0 && (
                            <div>
                                <h3 className="mb-3 text-xl font-semibold">
                                    Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-gray-500 px-3 py-1 text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}