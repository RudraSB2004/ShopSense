"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    
    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); 
        console.log(`Added ${product.name} to cart!`);
    };

    return (
        <Link href={`/products/${product.id}`}>
              <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    
                <div className="relative h-60 w-full">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>
                
                <CardContent className="space-y-4 p-5">
                    <Badge>{product.category}</Badge>
     
                    <h3 className="text-lg font-semibold line-clamp-1">
                        {product.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                        {/* 3. Removed duplicate spans */}
                        <span className="text-xl font-bold">
                            ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        
                        <div className="flex items-center gap-1">
                            <Star
                                size={18}
                                className="fill-yellow-400 text-yellow-400"
                            />
                            <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                    </div>
                    
                    <Button className="w-full" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to cart
                    </Button>
                </CardContent>
            </Card>
        </Link>
    );
}