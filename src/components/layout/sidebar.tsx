import React from "react";
import { TagIcon, ClipboardDocumentListIcon, UserIcon } from "@heroicons/react/24/outline";

const categories = [
  "Vehicles", "Property Rentals", "Apparel", "Classifieds", "Electronics", "Entertainment", "Family", "Free Stuff", "Garden & Outdoor", "Hobbies", "Home Goods", "Home Improvement", "Home Sales", "Musical Instruments", "Office Supplies", "Pet Supplies", "Sporting Goods", "Toys & Games", "Buy and sell groups"
];

export default function Sidebar({ activeCategory }: { activeCategory?: string }) {
  return (
    <aside className="w-64 min-w-[200px] h-full py-8 px-4 hidden md:block font-sans bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-lg border border-gray-200 m-4">
      <nav className="flex flex-col gap-2">
        <div className="mb-6 p-4 bg-white/80 rounded-xl shadow-sm">
          <div className="font-black text-lg mb-3 text-gray-800">Create new listing</div>
          <a href="/create" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100/70 transition text-gray-800 font-medium text-base mb-1 group">
            <TagIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-700" />
            <span className="group-hover:font-bold">Choose listing type</span>
          </a>
          <a href="/your-listings" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-100/70 transition text-gray-800 font-medium text-base mb-1 group">
            <ClipboardDocumentListIcon className="h-5 w-5 text-purple-500 group-hover:text-purple-700" />
            <span className="group-hover:font-bold">Your listings</span>
          </a>
          <a href="/seller-help" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-100/70 transition text-gray-800 font-medium text-base group">
            <UserIcon className="h-5 w-5 text-pink-500 group-hover:text-pink-700" />
            <span className="group-hover:font-bold">Seller help</span>
          </a>
        </div>
        <div className="mb-2 px-3 text-xs text-gray-500 uppercase tracking-wider font-bold">Categories</div>
        <div className="flex flex-col gap-1">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`block px-4 py-2 rounded-lg font-medium text-sm transition hover:bg-blue-50 hover:text-[#1877F2] ${activeCategory === cat ? 'bg-[#1877F2] text-white font-bold shadow' : 'text-gray-800'}`}
            >
              {cat}
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
} 