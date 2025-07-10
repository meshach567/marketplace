"use client";
import Image from "next/image";
import React, { useState } from "react";

const categories = [
  "Vehicles", "Property Rentals", "Apparel", "Classifieds", "Electronics", "Entertainment", "Family", "Free Stuff", "Garden & Outdoor", "Hobbies", "Home Goods", "Home Improvement", "Home Sales", "Musical Instruments", "Office Supplies", "Pet Supplies", "Sporting Goods", "Toys & Games", "Buy and sell groups"
];

export default function CreateListing() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    email: "",
    description: "",
    category: categories[0],
    image: undefined as File | undefined,
    imageUrl: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setForm((f) => ({ ...f, image: file, imageUrl: URL.createObjectURL(file) }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // For now, just log the data
    // Later, integrate with Supabase
    // eslint-disable-next-line no-console
    console.log({ ...form, image: form.image ? form.image.name : undefined });
    setTimeout(() => setSubmitting(false), 1000);
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-lg">
      <form className="flex flex-col gap-4 w-full max-w-xs bg-white/90 border border-gray-200 rounded-2xl p-8 shadow" onSubmit={handleSubmit}>
        <label className="flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl h-32 cursor-pointer mb-2 shadow-inner">
          {form.imageUrl ? (
            <Image src={form.imageUrl} alt="Preview" className="w-full h-full object-cover rounded-xl" />
          ) : (
            <span className="text-lg text-gray-400">Add photos</span>
          )}
          <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
        </label>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 transition" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 transition" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 transition" type="email" required />
        <label htmlFor="category" className="font-bold text-gray-700">Category</label>
        <select id="category" name="category" value={form.category} onChange={handleChange} className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 transition" required>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border rounded-lg p-3 min-h-[60px] focus:ring-2 focus:ring-blue-200 transition" required />
        <button type="submit" className="bg-blue-500 text-white font-bold rounded-lg py-2 mt-2 hover:bg-blue-600 shadow transition" disabled={submitting}>
          {submitting ? "Submitting..." : "Create Listing"}
        </button>
      </form>
      <div className="flex-1 flex flex-col items-center">
        <h2 className="font-black text-xl mb-4 text-gray-800 drop-shadow">Preview</h2>
        <div className="w-full aspect-square max-w-xl bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl border border-gray-200 shadow-inner flex items-center justify-center overflow-hidden mb-4">
          {form.imageUrl && <Image src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" />}
        </div>
        <div className="font-black text-2xl text-blue-700 mb-1">{form.title || "Title"}</div>
        <div className="font-bold text-lg text-gray-900 mb-1">{form.price || "Price"}</div>
        <div className="text-base text-gray-700 mb-2">{form.description || "Listed 1 hour ago in Palo Alto, CA"}</div>
        <div className="text-sm mb-2 text-gray-500">Seller Information<br /><span className="font-bold text-gray-700">{form.email || "Your email"}</span></div>
      </div>
    </div>
  );
} 