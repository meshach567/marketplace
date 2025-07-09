import React from "react";

const categories = [
  "Vehicles",
  "Property Rentals",
  "Apparel",
  "Classifieds",
  "Electronics",
  "Entertainment",
  "Family",
  "Free Stuff",
  "Garden & Outdoor",
  "Hobbies",
  "Home Goods",
  "Home Improvement",
  "Home Sales",
  "Musical Instruments",
  "Office Supplies",
  "Pet Supplies",
  "Sporting Goods",
  "Toys & Games",
  "Buy and sell groups",
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6 flex flex-col">
      <div className="flex items-center mb-8">
        <div className="bg-blue-400 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-2xl mr-3 border-2 border-black">F</div>
        <span className="font-black text-xl">Marketplace</span>
      </div>
      <div>
        <h2 className="font-black text-lg mb-2">Categories</h2>
        <ul className="space-y-1 text-sm">
          {categories.map((cat) => (
            <li key={cat} className="hover:underline cursor-pointer">
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 