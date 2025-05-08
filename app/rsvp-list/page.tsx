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
    fetch("https://sheetdb.io/api/v1/ubkmd6nag649k")
      .then(res => res.json())
      .then(data => setRsvps(data));
  }, []);

  const yesResponses = rsvps.filter(entry => entry.joining?.toLowerCase() === 'yes');

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#2f472f] p-6 font-serif">
      <h1 className="text-3xl font-bold text-center mb-6">Confirmed Guests</h1>

      {yesResponses.length > 0 ? (
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="min-w-full bg-white shadow rounded overflow-hidden">
            <thead className="bg-[#e7e5d8] text-left text-[#2f472f] font-semibold">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Guests</th>
                <th className="p-3">Message</th>
              </tr>
            </thead>
            <tbody>
              {yesResponses.map((entry, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="p-3">{entry.name}</td>
                  <td className="p-3">{entry.guests || '-'}</td>
                  <td className="p-3 italic text-gray-600">{entry.message || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">No one has RSVPed “Yes” yet.</p>
      )}
    </div>
  );
}
