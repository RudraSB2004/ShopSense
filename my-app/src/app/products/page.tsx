import FeaturedProducts from "@/components/home/FeaturedProducts";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
    title: "Products"
};

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <h1 className="mb-10 text-4xl font-bold">
                        Products
                    </h1>
                    <div>
                        
                    </div>
                    <FeaturedProducts />
                </div>
            </main>
        </>
    )
}