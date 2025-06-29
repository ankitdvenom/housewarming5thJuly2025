'use client';

import Link from "next/link";

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#2f472f] p-6 font-serif">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">More Info & Updates</h1>

        <details className="border rounded p-4 mb-6">
          <summary className="cursor-pointer font-semibold text-lg">
          🌮 The Plan (Click to expand)
          </summary>
          <div className="mt-4 space-y-3 text-left text-sm">
            <p>🕓 <strong>16:00 – 17:00 | WELCOME & SOCIAL START</strong><br/>
              🍹 Welcome Drinks Station<br/>
              📸 Polaroid Photo Booth – Snap a pic, capture the moment 📸😉
            </p>
            <p>🕔 <strong>17:00 – 18:00 | GRILL + Fun Challenges</strong><br/>
              🔥 Grill Opens (weather permitting) – We'll have hotdogs & sausages, feel free to bring your favourites 🌭<br/>
              🧠 Fun Challenges – buckle up 💪🤫
            </p>
            <p>🕕 <strong>18:00 – 18:30 | KAHOOT Time</strong><br/>
              👩‍💻 A quick game of Kahoot 📱🤙
            </p>
            <p>🕡 <strong>18:30 – 20:00 | SAUNA TIME</strong><br/>
              🧖‍♀️ Sauna available for those joining 👙🤩
            </p>
            <p>🕖 <strong>19:00 – 20:30 | BEERPONG + CHILL VIBES</strong><br/>
              🍻 What’s a party without Beerpong?<br/>
              🏆 Other games like flip cup, bus, kings cup suggested 🎉
            </p>
            <p>🕣 <strong>20:30 – 22:00 | DRINKING GAMES + PARTY MODE</strong><br/>
              🎵 Continue drinking games, enjoy food, and put on your dancing shoes 🕺🪩
            </p>
            <p>🕥 <strong>22:30+ | AFTERPARTY / GOING OUT</strong><br/>
              🤩 Those who want to go out start heading out ❤️
            </p>
            <p>👩‍🍼 Mama & Siya go to bed soon after 😴😛</p>
            <p>🍱 <strong>Food:</strong> We will have a couple of appetizers, sweet & savoury 🥕🌽🥒🍩🥯🧀</p>
            <p>🍻 <strong>Drinks:</strong> Some drinks provided, feel free to bring your own 🥃🍸</p>
            <p>🤩Bring in your party energy, good vibes and don't forget to dress up in summer shades of orange,white or green 🌻🧡🤍</p>
          </div>
        </details>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">💃 Dress code</h2>
          <p>
  Let's celebrate together in a sunlit summer afternoon, dress up in vibrant casuals...we are thinking shades of
  <span className="font-semibold" style={{ color: "green" }}> green</span>,
  <span className="font-semibold" style={{ color: "orange" }}> orange</span>, and
  <span className="font-semibold" style={{ color: "gray" }}> white</span>.
</p>

        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🎁 Gifts</h2>
          <p>Your presence is invaluable for us, but if you wish to bring any gifts please avoid flowers, decoratives and alcohol.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🚗 Parking Info</h2>
          <p>Street parking is available across the street but we recommend you use public transport so that we could drink without worry.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">📸 Photos</h2>
          <p>
  Please find a link to Google Photos here for everyone to upload pictures and relive the memories!<br/>
  <a
    href="https://photos.google.com/share/AF1QipOFWtGGaPJX3Dvrds_-DARkKbruEZhbgc0yWybNb7WmB9jeCwFSCmc_K2V7S3N9_w?key=bm5yTTdqYzgxWFF4OVA2Y2R3eDFDa2xrOG5jUVF3"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 underline"
  >
    → View Shared Album
  </a>
</p>

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
