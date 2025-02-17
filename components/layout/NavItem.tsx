"use client";

import { NavItem as NavItemType } from "@/types";
import { useState } from "react";
import Link from "next/link";

export const NavItem = ({ label, href, children }: NavItemType) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!children) {
    return (
      <Link 
        href={href} 
        className="px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm"
      >
        {label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button 
        className="px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'} group-hover:block`}>
        <div className="py-1">
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}; 