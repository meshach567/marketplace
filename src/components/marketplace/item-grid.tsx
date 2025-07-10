import React from "react";
import Image from "next/image";

export interface Listing {
  id: string;
  title: string;
  price: string;
  location: string;
  imageUrl?: string;
}

const ItemGrid = ({ listings }: { listings: Listing[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {listings.map((listing) => (
        <a
          key={listing.id}
          href={`/item/${listing.id}`}
          className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center min-w-[180px] min-h-[220px] shadow-sm hover:shadow-2xl hover:scale-105 hover:border-blue-300 transition-all duration-200 group cursor-pointer"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden shadow-inner border border-gray-100">
            {listing.imageUrl ? (
              <Image src={listing.imageUrl} alt={listing.title} className="object-cover w-full h-full" />
            ) : (
              <span className="text-gray-300 text-4xl">🖼️</span>
            )}
          </div>
          <div className="font-extrabold text-xl text-blue-700 mb-1">{listing.price}</div>
          <div className="text-base text-gray-900 font-semibold line-clamp-1 mb-1 text-center">{listing.title}</div>
          <div className="text-xs text-gray-500 text-center">{listing.location}</div>
        </a>
      ))}
    </div>
  );
};

export default ItemGrid;
