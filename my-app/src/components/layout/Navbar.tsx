import Link from "next/link";
import Container from "./Container";
import { navigation } from "@/constants/navigation";
import { ShoppingCart, Heart, User } from "lucide-react";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-500"
          >
            Shopsense AI
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation?.map((item: any) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              aria-label="Wishlist"
              className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <Heart className="h-5 w-5" />
            </button>
            
            <button 
              aria-label="Cart"
              className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            
            <div className="hidden h-5 w-px bg-gray-300 dark:bg-gray-700 sm:block"></div>
            
            <button 
              aria-label="User Account"
              className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
          
        </div>
      </Container>
    </nav>
  );
}