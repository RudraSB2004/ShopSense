import Container from "../layout/Container";
import ProductCard from "../product/ProductCard";

import { products } from "@/data/products";

export default function FeaturedProducts() {
    return(
         <section className="py-20">
      <Container>
        <h2 className="mb-12 text-center text-4xl font-bold">
          Featured Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
    )
}