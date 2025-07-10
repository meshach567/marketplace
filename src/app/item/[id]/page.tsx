import React from "react";

// Example async data fetcher (replace with your real fetch, e.g., Supabase)
async function fetchItem(id: string) {
  // Simulate API/database call
  await new Promise((res) => setTimeout(res, 200));
  return {
    id,
    title: "Bike 24 inch",
    price: "$99",
    location: "Palo Alto, CA",
    description: "Listed 1 hour ago in Palo Alto, CA",
    seller: "Wei Gu",
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ItemDetail({ params }: PageProps) {
  const { id } = await params;
  const item = await fetchItem(id);

  if (!item) return <div>Not found</div>;

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
      <div className="text-lg font-semibold mb-1">{item.price}</div>
      <div className="text-gray-600 mb-2">{item.location}</div>
      <div className="mb-4">{item.description}</div>
      <div className="text-sm text-gray-500">Seller: {item.seller}</div>
    </div>
  );
} 