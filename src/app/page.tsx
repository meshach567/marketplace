import ItemGrid, { Listing } from "@/components/marketplace/item-grid";

const listings: Listing[] = Array.from({ length: 15 }).map((_, i) => ({
  id: (i + 1).toString(),
  title: "Bike 24 inch",
  price: "$99",
  location: "Palo Alto, CA",
  imageUrl: undefined, // Add image URLs when available
}));

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-black mb-6">Today&apos;s picks</h1>
      <ItemGrid listings={listings} />
    </div>
  );
}
