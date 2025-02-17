"use client";

import { NavItem } from "@/types";
import { useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  items: NavItem[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        className="p-2 rounded-md text-gray-700 hover:bg-blue-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 