const listings = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  price: "$2,300",
  title: "Lorem ipsum dolor sit",
  location: "Palo Alto, CA",
}));

function ListingCard({ price, title, location }: { price: string; title: string; location: string }) {
  return (
    <div className="bg-blue-100 border-2 border-black rounded-xl p-4 flex flex-col items-center min-w-[160px] min-h-[180px]">
      <div className="w-32 h-32 bg-[repeating-linear-gradient(135deg,#b3e0ff_0_2px,transparent_2px_8px),repeating-linear-gradient(45deg,#b3e0ff_0_2px,transparent_2px_8px)] rounded-lg mb-2" />
      <div className="font-bold text-lg">{price}</div>
      <div className="text-xs text-black/80">{title}</div>
      <div className="text-xs text-black/60">{location}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-black mb-6">Today`&apos;`s picks</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}
