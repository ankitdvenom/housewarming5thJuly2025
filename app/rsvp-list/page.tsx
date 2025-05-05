'use client';

import { useEffect, useState } from 'react';

export default function RsvpListPage() {
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/19oi6kobu2sjt")
      .then(res => res.json())
      .then(data => setRsvps(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#2f472f] p-6 font-serif">
      <h1 className="text-3xl font-bold text-center mb-4">Guest RSVP List</h1>
      <ul className="max-w-xl mx-auto space-y-2">
        {rsvps
  .filter(entry => entry.joining?.toLowerCase() === 'yes')
  .map((entry, index) => (
    <li key={index} className="bg-white shadow rounded p-4">
      <p><strong>{entry.name}</strong></p>
      <p>Guests: {entry.guests}</p>
      <p>Message: {entry.message}</p>
    </li>
))}
      </ul>
    </div>
  );
}
