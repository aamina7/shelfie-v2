"use client";

export default function Features() {
  const genres = [
    { title: "SCI-FI", subtitle: "Future & Tech", color: "text-[#4b1d58]", border: "border-[#4b1d58]", icon: "/icons/scifi.png" },
    { title: "ADVENTURE", subtitle: "Quests & Journeys", color: "text-[#d56600]", border: "border-[#d56600]", icon: "/icons/adventure.png" },
    { title: "SELF-HELP", subtitle: "Growth & Mindset", color: "text-[#4b1d58]", border: "border-[#4b1d58]", icon: "/icons/self-help.png" },
    { title: "DRAMA", subtitle: "Emotional Stories", color: "text-[#d56600]", border: "border-[#d56600]", icon: "/icons/drama.png" },
    { title: "HISTORY", subtitle: "Past Events", color: "text-[#4b1d58]", border: "border-[#4b1d58]", icon: "/icons/history.png" },
    { title: "MYSTERY", subtitle: "Suspense & Clues", color: "text-[#d56600]", border: "border-[#d56600]", icon: "/icons/mystery.png" },
    { title: "HORROR", subtitle: "Thrills & Chills", color: "text-[#4b1d58]", border: "border-[#4b1d58]", icon: "/icons/horror.png" },
    { title: "FANTASY", subtitle: "Mythical Worlds", color: "text-[#d56600]", border: "border-[#d56600]", icon: "/icons/fantasy.png" },
  ];

  return (
    <div className="block w-full"> 
      {/* 1. THE FEATURE SECTION */}
      <section className="overflow-hidden bg-[#f7f4ee] mt-24 pt-6 pb-6">
        <div className="marquee-track flex">
          {[...genres, ...genres].map((genre, index) => (
            <div key={`${genre.title}-${index}`} className="px-4">
              <div
                className={`flex h-[180px] w-[160px] shrink-0 flex-col items-center justify-center rounded-[26px] border-2 bg-[#f7f4ee] ${genre.border}`}
              >
                <img
                  src={genre.icon}
                  alt={genre.title}
                  className="mb-4 h-[32px] w-[32px] object-contain"
                />
                <h3 className={`text-[18px] font-bold ${genre.color}`}>
                  {genre.title}
                </h3>
                <p className={`mt-2 text-center text-[13px] ${genre.color}`}>
                  {genre.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FORCED 3-LINE SPACE (96px) */}
      <div className="h-[96px] w-full clear-both" aria-hidden="true"></div>
    </div>
  );
}