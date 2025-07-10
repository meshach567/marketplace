import React from "react";
import { notFound } from "next/navigation";

// Placeholder data
const listings = Array.from({ length: 15 }).map((_, i) => ({
  id: (i + 1).toString(),
  title: "Bike 24 inch",
  price: "$99",
  location: "Palo Alto, CA",
  seller: "Wei Gu",
  description: "Listed 1 hour ago in Palo Alto, CA",
}));

interface ListingDetailProps {
  params: { id: string };
}


export default function ListingDetail({ params }: ListingDetailProps) {
  const listing = listings.find((l) => l.id === params.id);
  if (!listing) return notFound();

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto p-8">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full aspect-square max-w-xl bg-[repeating-linear-gradient(135deg,#b3e0ff_0_2px,transparent_2px_8px),repeating-linear-gradient(45deg,#b3e0ff_0_2px,transparent_2px_8px)] rounded-2xl border-2 border-black" />
      </div>
      <div className="w-full max-w-xs flex flex-col gap-4">
        <div>
          <div className="font-black text-xl mb-1">{listing.title}</div>
          <div className="font-bold text-lg mb-2">{listing.price}</div>
          <div className="text-sm mb-2">{listing.description}</div>
          <div className="text-sm mb-2">Seller Information<br /><span className="font-bold">{listing.seller}</span></div>
        </div>
        <form className="flex flex-col gap-2 bg-white border-2 border-black rounded-xl p-4 mt-4">
          <label htmlFor="message" className="font-bold mb-1">Send seller a message</label>
          <textarea id="message" className="border rounded p-2 min-h-[60px]" placeholder="I want to buy your bike!" />
          <button type="submit" className="bg-blue-400 text-white font-bold rounded-lg py-2 mt-2 hover:bg-blue-500 transition">Send</button>
        </form>
      </div>
    </div>
  );
} 