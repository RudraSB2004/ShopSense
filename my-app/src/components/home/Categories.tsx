import Container from "../layout/Container";
import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
    return(
        <section className="py-20">
            <Container>
                <h2 className="mb-12 text-center text-4xl font-bold">
                    Shop by Category 
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                name={category.name}
                                productCount={category.productCount}
                                icon={<category.icon className="h-8 w-8 text-primary" />} 
                            />
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}