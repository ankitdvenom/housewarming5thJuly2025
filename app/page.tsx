'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [name, setName] = useState<string>('');
  const [guests, setGuests] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');


  const handleRSVP = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-200 flex flex-col items-center justify-center p-4 text-gray-800">

<motion.h1
  className="text-5xl font-bold mb-4 text-center text-purple-800"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
>
  You're Invited!
</motion.h1>

      <div className="w-full max-w-2xl p-6 bg-white rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <p className="text-lg">Join us to celebrate our new home!</p>
        </div>
        <div className="mb-6 text-center">
          <p><strong>Date:</strong> Saturday, June 15, 2025</p>
          <p><strong>Time:</strong> 12:00 PM onwards</p>
          <p><strong>Location:</strong> Ketokivekaari 22, 00710, Helsinki</p>
        </div>
        {!submitted ? (
          <div className="space-y-4">
            <input
              className="w-full p-2 border rounded"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Your Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             />
            <input
              className="w-full p-2 border rounded"
              placeholder="Your Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              />
            <input
              className="w-full p-2 border rounded"
              placeholder="Number of Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Leave us a message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
  onClick={handleRSVP}
  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg p-2 rounded"
>
  RSVP
</button>

          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600 font-semibold"
          >
            Thank you for RSVPing! We can't wait to see you!
          </motion.div>
        )}
      </div>
    </div>
  );
}
