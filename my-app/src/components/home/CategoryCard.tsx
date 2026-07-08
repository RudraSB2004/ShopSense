"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react"; 

interface CategoryCardProps {
  name: string;
  productCount: number;
  icon: ReactNode; 
}

export default function CategoryCard({ name, productCount, icon } : CategoryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="cursor-pointer rounded-2xl border bg-card p-6 shadow-sm transition"
    >
      <div className="flex justify-center">
        <div className="rounded-full bg-primary/10 p-4">
          {icon} 
        </div>
      </div>

      <h3 className="mt-4 text-center text-xl font-semibold">
        {name}
      </h3>

      <p className="mt-2 text-center text-muted-foreground">
        {productCount} Products
      </p>
    </motion.div>
  );
}