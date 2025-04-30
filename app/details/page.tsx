#'use client';

import Link from "next/link";

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#2f472f] p-6 font-serif">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">More Info & Updates</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🍽 Food Menu</h2>
          <p>We’ll be serving both vegetarian and non-veg options including buffet and desserts. Full list will be updated here closer to the event.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🚗 Parking Info</h2>
          <p>Street parking is available nearby. We’ll add specific instructions or a map soon to help you plan easily.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">📸 Photos</h2>
          <p>After the event, we’ll upload some group pictures and highlights here so you can relive the memories!</p>
        </div>

        <Link href="/" className="mt-6 inline-block text-blue-700 underline">
          ← Back to Invite Page
        </Link>
      </div>
    </div>
  );
#}
