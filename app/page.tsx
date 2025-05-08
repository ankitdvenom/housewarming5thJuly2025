'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [joining, setJoining] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [kids, setKids] = useState("");

  const checkDuplicate = async () => {
    try {
      const response = await fetch("https://sheetdb.io/api/v1/ubkmd6nag649k");
      const entries = await response.json();
      return entries.some((entry: any) => {
        const entryPhone = entry.phone?.trim().replace(/[^0-9]/g, "").replace(/^0+/, "");
        const formPhone = phone.trim().replace(/[^0-9]/g, "").replace(/^0+/, "");
        return (
          entry.email?.trim().toLowerCase() === email.trim().toLowerCase() ||
          entryPhone === formPhone
        );
      });
    } catch (error) {
      console.error("Error checking duplicates:", error);
      return false;
    }
  };

  const handleRSVP = async () => {
    if (!name || !email || !phone || !guests || !joining || !kids) {
      alert("Please fill in all the required fields before submitting your RSVP.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    const isDuplicate = await checkDuplicate();
    if (isDuplicate) {
      alert("You’ve already RSVPed with this email or phone number.");
      setLoading(false);
      return;
    }

    const data = {
      data: {
        name,
        email,
        phone,
        guests,
        message,
        joining,
        kids,
      },
    };

    const response = await fetch("https://sheetdb.io/api/v1/ubkmd6nag649k", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("There was an error submitting your RSVP.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#2f472f] flex flex-col items-center justify-start p-6 font-serif">
      <motion.h1
        className="text-5xl font-bold mt-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to our <span className="block text-6xl italic"> New Home</span>
      </motion.h1>
      <Image
        src="/house.png"
        alt="Housewarming"
        width={200}
        height={200}
        className="my-6"
      />

      <div className="text-center text-lg mb-4">
        Join us in celebrating the arrival of our daughter and our new home
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl w-full mb-6">
        <div className="text-center mb-6">
          <div className="font-semibold">SATURDAY</div>
          <div className="text-4xl font-bold">JULY 5</div>
          <div className="font-semibold">2025 @ 4 PM</div>
          <p className="mt-2">Ketokivenkaari 22, Helsinki 00710</p>
        </div>

        {!submitted ? (
          <div className="space-y-4">
            <input
              className="w-full p-2 border border-[#ccc] rounded"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="w-full p-2 border border-[#ccc] rounded"
              placeholder="Your Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full p-2 border border-[#ccc] rounded"
              placeholder="e.g. 0444567890"
              type="text"
              inputMode="numeric"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
              required
            />
            <select
              className="w-full p-2 border border-[#ccc] rounded"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            >
              <option value="">Number of Guests</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select
              className="w-full p-2 border border-[#ccc] rounded"
              value={joining}
              onChange={(e) => setJoining(e.target.value)}
              required
            >
              <option value="">Will you join us?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select
              className="w-full p-2 border border-[#ccc] rounded"
              value={kids}
              onChange={(e) => setKids(e.target.value)}
              required
            >
              <option value="">Coming with kids?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <textarea
              className="w-full p-2 border border-[#ccc] rounded"
              placeholder="Leave us a message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleRSVP}
              className="w-full bg-[#2f472f] text-white p-2 rounded text-lg hover:bg-green-900 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'RSVP'}
            </button>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-700 font-semibold"
            >
              Thank you for RSVPing! We can’t wait to see you! 💚
            </motion.div>
            <Link href="/rsvp-list" className="text-blue-700 underline text-center block my-4">
              → View RSVP List
            </Link>
          </>
        )}
      </div>

      <div className="text-sm text-center mb-10">
        Hosted by Ankit & Shweta <br />
        Kindly RSVP before 21<sup>th</sup> June ’25 on <br />
        0453278211 / 0404894432
      </div>

      <Link href="/details" className="text-blue-700 underline text-sm mt-4">
        More info & updates ↗
      </Link>
      <Link href="/" className="text-blue-700 underline text-sm mt-2">
        ← Back to Home
      </Link>
    </div>
  );
}
