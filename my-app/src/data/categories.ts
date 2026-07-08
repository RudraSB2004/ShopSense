import {
  Smartphone,
  Shirt,
  Gamepad2,
  BookOpen,
  Dumbbell,
  Sparkles,
} from "lucide-react";

import { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    icon: Smartphone,
    productCount: 230,
  },
  {
    id: "2",
    name: "Fashion",
    icon: Shirt,
    productCount: 180,
  },
  {
    id: "3",
    name: "Gaming",
    icon: Gamepad2,
    productCount: 120,
  },
  {
    id: "4",
    name: "Books",
    icon: BookOpen,
    productCount: 90,
  },
  {
    id: "5",
    name: "Fitness",
    icon: Dumbbell,
    productCount: 70,
  },
  {
    id: "6",
    name: "Beauty",
    icon: Sparkles,
    productCount: 140,
  },
];