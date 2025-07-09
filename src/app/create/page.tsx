"use client";
import React, { useState } from "react";

export default function CreateListing() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    email: "",
    description: "",
    image: undefined as File | undefined,
    imageUrl: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setForm((f) => ({ ...f, image: file, imageUrl: URL.createObjectURL(file) }));
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto p-8">
      <form className="flex flex-col gap-4 w-full max-w-xs bg-white border-2 border-black rounded-xl p-6">
        <label className="flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-gray-400 rounded-xl h-32 cursor-pointer mb-2">
          {form.imageUrl ? (
            <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover rounded-xl" />
          ) : (
            <span className="text-lg text-gray-500">Add photos</span>
          )}
          <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
        </label>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border rounded p-2" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border rounded p-2" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border rounded p-2" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border rounded p-2 min-h-[60px]" />
        <button type="submit" className="bg-blue-400 text-white font-bold rounded-lg py-2 mt-2 hover:bg-blue-500 transition">Next</button>
      </form>
      <div className="flex-1 flex flex-col items-center">
        <h2 className="font-black text-lg mb-2">Preview</h2>
        <div className="w-full aspect-square max-w-xl bg-[repeating-linear-gradient(135deg,#b3e0ff_0_2px,transparent_2px_8px),repeating-linear-gradient(45deg,#b3e0ff_0_2px,transparent_2px_8px)] rounded-2xl border-2 border-black flex items-center justify-center overflow-hidden mb-4">
          {form.imageUrl && <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" />}
        </div>
        <div className="font-black text-xl">{form.title || "Title"}</div>
        <div className="font-bold text-lg">{form.price || "Price"}</div>
        <div className="text-sm mb-2">Listed 1 hour ago in Palo Alto, CA</div>
        <div className="text-sm mb-2">Seller Information<br /><span className="font-bold">Greg Wientjes</span></div>
      </div>
    </div>
  );
} 