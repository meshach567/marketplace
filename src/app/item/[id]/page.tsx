"use client";
import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Mock data (should match the Listing type)
const listings = Array.from({ length: 15 }).map((_, i) => ({
  id: (i + 1).toString(),
  title: "Bike 24 inch",
  price: "$99",
  location: "Palo Alto, CA",
  imageUrl: undefined,
  description: "Listed 1 hour ago in Palo Alto, CA",
  category: "Electronics",
  email: "seller@example.com",
}));

export default function ItemDetail({ params }: { params: { id: string } }) {
  const listing = listings.find((l) => l.id === params.id);
  const [message, setMessage] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const supabase = createClientComponentClient();
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user?.email) {
        setBuyerEmail(data.user.email);
        setIsAuthed(true);
      }
    });
  }, []);

  if (!listing) return notFound();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    setError("");
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          listing_id: listing!.id,
          buyer_email: buyerEmail,
          seller_email: listing!.email,
          message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setMessage("");
      } else {
        setError(data.error || "Failed to send message");
      }
    } catch (err: unknown) {
      setError((err as Error).message || "Unknown error");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto p-8">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full aspect-square max-w-xl bg-[repeating-linear-gradient(135deg,#b3e0ff_0_2px,transparent_2px_8px),repeating-linear-gradient(45deg,#b3e0ff_0_2px,transparent_2px_8px)] rounded-2xl border-2 border-black flex items-center justify-center overflow-hidden">
          {listing.imageUrl ? (
            <Image src={listing.imageUrl} alt={listing.title} className="object-cover w-full h-full" />
          ) : (
            <span className="text-gray-400 text-2xl">🖼️</span>
          )}
        </div>
      </div>
      <div className="w-full max-w-xs flex flex-col gap-4">
        <div>
          <div className="font-black text-xl mb-1">{listing.title}</div>
          <div className="font-bold text-lg mb-2">{listing.price}</div>
          <div className="text-sm mb-2">{listing.description}</div>
          <div className="text-sm mb-2">Category: <span className="font-bold">{listing.category}</span></div>
          <div className="text-sm mb-2">Seller Email: <span className="font-bold">{listing.email}</span></div>
        </div>
        <form className="flex flex-col gap-2 bg-white border-2 border-black rounded-xl p-4 mt-4" onSubmit={handleSubmit}>
          <label htmlFor="buyerEmail" className="font-bold mb-1">Your Email</label>
          <input
            id="buyerEmail"
            type="email"
            className="border rounded p-2 mb-2"
            value={buyerEmail}
            onChange={e => setBuyerEmail(e.target.value)}
            required
            disabled={isAuthed}
            placeholder="Enter your email"
          />
          <label htmlFor="message" className="font-bold mb-1">Send seller a message</label>
          <textarea id="message" className="border rounded p-2 min-h-[60px]" placeholder="I want to buy your bike!" value={message} onChange={e => setMessage(e.target.value)} required />
          <button type="submit" className="bg-blue-400 text-white font-bold rounded-lg py-2 mt-2 hover:bg-blue-500 transition" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>
          {success && <div className="text-green-600 font-bold mt-2">Message sent!</div>}
          {error && <div className="text-red-600 font-bold mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
} 