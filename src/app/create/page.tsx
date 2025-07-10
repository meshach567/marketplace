"use client";
import React from "react";
import { Squares2X2Icon, RectangleStackIcon, TruckIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CreateListing() {
  return (
    <div className="flex flex-col items-center w-full min-h-[80vh] max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-md">
      <h1 className="font-black text-3xl mb-10 text-center text-gray-800 drop-shadow">Choose listing type</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
        <Link href="/create/item" className="bg-white border border-gray-200 rounded-2xl flex flex-col items-center p-8 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer group">
          <div className="bg-blue-100 group-hover:bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center mb-5 shadow-inner">
            <Squares2X2Icon className="h-10 w-10 text-blue-500 group-hover:text-blue-700" />
          </div>
          <div className="font-extrabold text-lg mb-2 text-center text-gray-900">Item for sale</div>
          <div className="text-gray-500 text-base text-center">Sell a single item quickly</div>
        </Link>
        <div className="bg-white border border-gray-200 rounded-2xl flex flex-col items-center p-8 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer group">
          <div className="bg-purple-100 group-hover:bg-purple-200 rounded-full w-20 h-20 flex items-center justify-center mb-5 shadow-inner">
            <RectangleStackIcon className="h-10 w-10 text-purple-500 group-hover:text-purple-700" />
          </div>
          <div className="font-extrabold text-lg mb-2 text-center text-gray-900">Create multiple listings</div>
          <div className="text-gray-500 text-base text-center">Post several items at once</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl flex flex-col items-center p-8 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer group">
          <div className="bg-green-100 group-hover:bg-green-200 rounded-full w-20 h-20 flex items-center justify-center mb-5 shadow-inner">
            <TruckIcon className="h-10 w-10 text-green-500 group-hover:text-green-700" />
          </div>
          <div className="font-extrabold text-lg mb-2 text-center text-gray-900">Vehicle for sale</div>
          <div className="text-gray-500 text-base text-center">List a car, bike, or more</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl flex flex-col items-center p-8 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer group">
          <div className="bg-pink-100 group-hover:bg-pink-200 rounded-full w-20 h-20 flex items-center justify-center mb-5 shadow-inner">
            <HomeModernIcon className="h-10 w-10 text-pink-500 group-hover:text-pink-700" />
          </div>
          <div className="font-extrabold text-lg mb-2 text-center text-gray-900">Home for sale or rent</div>
          <div className="text-gray-500 text-base text-center">Advertise property easily</div>
        </div>
      </div>
    </div>
  );
} 