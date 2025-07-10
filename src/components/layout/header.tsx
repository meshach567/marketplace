import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-[#1877F2] text-white flex items-center px-4 py-2 shadow-md sticky top-0 z-50 font-sans">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-[#1877F2] font-black text-lg">F</div>
        <span className="font-bold text-xl tracking-tight hidden sm:block">Marketplace</span>
      </div>
      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search Marketplace..."
          className="w-full max-w-md px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Search Marketplace"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:bg-blue-600 rounded-full p-2 transition" aria-label="Inbox">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6.79a2 2 0 00.553 1.384l7 7.21a2 2 0 002.894 0l7-7.21A2 2 0 0021 12.79z" /></svg>
        </button>
        <button className="hover:bg-blue-600 rounded-full p-2 transition" aria-label="Notifications">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
        <button className="hover:bg-blue-600 rounded-full p-2 transition" aria-label="Profile">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" /></svg>
        </button>
      </div>
    </header>
  );
} 