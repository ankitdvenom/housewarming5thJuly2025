'use client';

import Link from "next/link";

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#2f472f] p-6 font-serif">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">More Info & Updates</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🌮 The Plan</h2>
          <p>We will share the party agenda closer to the event, stay tuned!!.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🚗 Parking Info</h2>
          <p>Street parking is available across the street but we recommend you use public transport so that we could drink without worry</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">📸 Photos</h2>
          <p>We'll share a link to google photos here for all of us to upload some pictures so that we can relive the memories!</p>
        </div>

        <Link href="/" className="mt-6 inline-block text-blue-700 underline">
          ← Back to Invite Page
        </Link>
        <br />
        <Link href="/rsvp-list" className="mt-2 inline-block text-blue-700 underline">
          → View RSVP List
        </Link>
      </div>
    </div>
  );
}
