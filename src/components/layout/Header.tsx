"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              FinanceBlog
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <Link href="/about" className="hover:text-primary-600">About</Link>
            <Link href="/contact" className="hover:text-primary-600">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">Login</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 hover:bg-gray-50">Home</Link>
            <Link href="/blog" className="block px-3 py-2 hover:bg-gray-50">Blog</Link>
            <Link href="/about" className="block px-3 py-2 hover:bg-gray-50">About</Link>
            <Link href="/contact" className="block px-3 py-2 hover:bg-gray-50">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}