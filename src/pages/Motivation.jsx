import React from "react";

const Motivation = () => {
  const categories = [
    {
      title: "💪 Overcoming Challenges",
      quotes: [
        "The harder you fall, the stronger you rise.",
        "Your current situation is not your final destination.",
        "Storms make trees take deeper roots.",
        "Don't limit your challenges — challenge your limits.",
      ],
      example:
        "🌪️ *Example:* J.K. Rowling was rejected 12 times before ‘Harry Potter’ was published. Today, she inspires millions who once felt defeated.",
    },
    {
      title: "🎯 Staying Focused & Consistent",
      quotes: [
        "Discipline beats motivation every single day.",
        "Small steps every day lead to big changes.",
        "Success doesn’t come from what you do occasionally, but from what you do consistently.",
        "The secret of getting ahead is getting started.",
      ],
      example:
        "🔥 *Example:* APJ Abdul Kalam studied under a streetlight in his childhood. His consistency made him ‘The Missile Man of India’.",
    },
    {
      title: "💔 Handling Failure & Rejection",
      quotes: [
        "Failure is the tuition you pay for success.",
        "Rejection is just redirection — towards something better.",
        "Every master was once a beginner who refused to give up.",
        "Don’t fear failure; fear giving up.",
      ],
      example:
        "🚀 *Example:* Elon Musk’s first three rocket launches failed. People laughed — until the fourth one changed space history forever.",
    },
    {
      title: "🧘‍♀️ Mental Strength & Peace",
      quotes: [
        "Peace begins the moment you choose not to allow another person or event to control your emotions.",
        "You don’t have to control everything. Sometimes, letting go is strength.",
        "A calm mind is your greatest weapon against any challenge.",
        "You are not behind in life — you’re simply on your own path.",
      ],
      example:
        "🌸 *Example:* Oprah Winfrey faced poverty and trauma early in life, yet she turned her pain into purpose — becoming one of the world’s strongest voices.",
    },
    {
      title: "🚀 Dream Big & Never Give Up",
      quotes: [
        "If your dreams don’t scare you, they’re not big enough.",
        "Doubt kills more dreams than failure ever will.",
        "The only limit to your success is your imagination and effort.",
        "You’re stronger than your excuses.",
      ],
      example:
        "🌠 *Example:* Walt Disney was once fired for ‘lack of imagination’. His dreams later built a world of imagination for everyone else.",
    },
  ];

  const affirmations = [
    "🌞 I am capable of handling anything that comes my way.",
    "🔥 I am becoming better, stronger, and wiser every day.",
    "🌿 I trust the timing of my life.",
    "💫 I deserve peace, success, and happiness.",
    "🌻 I am proud of how far I’ve come, and I’m excited for what’s next.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6 flex flex-col items-center text-gray-900">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-700 text-center mb-2">
          🌟 Stay Strong, Stay Motivated
        </h1>
        <p className="text-center text-gray-700 mb-10">
          A collection of quotes, lessons, and real stories to remind you that
          strength is built in silence, and growth comes from struggle.
        </p>

        {/* Quote Sections */}
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md mb-8 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              {cat.title}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              {cat.quotes.map((q, i) => (
                <li key={i}>“{q}”</li>
              ))}
            </ul>
            <p className="italic text-gray-600 mt-4">{cat.example}</p>
          </div>
        ))}

        {/* Affirmations Section */}
        <div className="bg-green-100 rounded-2xl p-6 mb-8 shadow-inner">
          <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
            🌈 Daily Affirmations
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-800">
            {affirmations.map((a, i) => (
              <div
                key={i}
                className="bg-white border border-green-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
              >
                {a}
              </div>
            ))}
          </div>
        </div>

        {/* Final Note */}
        <div className="text-center text-gray-700 mt-10">
          <p className="text-lg font-medium">
            Remember: Strength doesn’t mean never falling — it means standing
            back up every time you do. 💚
          </p>
          <p className="mt-2 text-sm text-gray-500">
            “One day, you’ll look back and realize that every struggle shaped
            the person you were meant to be.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Motivation;

