'use client';

import { useEffect, useState } from 'react';

interface RSVP {
  name: string;
  email?: string;
  phone?: string;
  guests?: string;
  message?: string;
  joining?: string;
}

export default function RsvpListPage() {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/19oi6kobu2sjt")
      .then(res => res.json())
      .then(data => setRsvps(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#2f472f] p-6 font-serif">
      <h1 className="text-3xl font-bold text-center mb-6">Confirmed Guests</h1>

      <ul className="max-w-xl mx-auto space-y-4">
        {rsvps
          .filter(entry => entry.joining?.toLowerCase() === 'yes')
          .map((entry, index) => (
            <li key={index} className="bg-white shadow rounded p-4">
              <p className="text-lg font-semibold">{entry.name}</p>
              {entry.guests && <p>Guests: {entry.guests}</p>}
              {entry.message && <p className="italic text-gray-600">“{entry.message}”</p>}
            </li>
          ))}
      </ul>

      {rsvps.filter(entry => entry.joining?.toLowerCase() === 'yes').length === 0 && (
        <p className="text-center text-gray-500 mt-6">No one has RSVPed “Yes” yet.</p>
      )}
    </div>
  );
}
