export default function Writers() {
  return (
    <>
      <section className="bg-[#f7f4ee] px-6 py-28 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-20">
          
          {/* LEFT CONTENT */}
          <div className="w-[60%]">
            <h2
              className="text-[64px] leading-[0.95] text-[#4b1d58]"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              FOR WRITERS WHO WANT REAL <br /> READER ENGAGEMENT
            </h2>

            <p className="mt-8 text-[18px] text-[#1f1f1f] font-medium">
              Shelfie helps emerging & established writers go beyond publishing.
            </p>

            <p className="mt-4 max-w-[600px] text-[17px] leading-[1.8] text-[#5b6472]">
              Share your stories, connect directly with readers, and build a
              community around your work. Our platform is designed to turn passive
              readers into active participants in your creative journey.
            </p>

            {/* CARDS */}
            <div className="mt-12 flex mb-12" style={{ gap: '24px' }}> 
              {/* Card 1 */}
              <div 
                className="rounded-[20px] p-8 w-[280px]" 
                style={{ backgroundColor: '#3a153d' }}
              >
                <h3 
                  className="text-[18px] font-bold tracking-wide" 
                  style={{ color: 'white !important', margin: 0 }}
                >
                  DIRECT CONNECTION
                </h3>
                <p 
                  className="mt-3 text-[14px] leading-relaxed" 
                  style={{ color: 'rgba(255, 255, 255, 0.9) !important' }}
                >
                  Talk to your audience without intermediaries.
                </p>
              </div>

              {/* Card 2 */}
              <div 
                className="rounded-[20px] p-8 w-[280px]" 
                style={{ backgroundColor: '#3a153d' }}
              >
                <h3 
                  className="text-[18px] font-bold tracking-wide" 
                  style={{ color: 'white !important', margin: 0 }}
                >
                  COMMUNITY BUILDING
                </h3>
                <p 
                  className="mt-3 text-[14px] leading-relaxed" 
                  style={{ color: 'rgba(255, 255, 255, 0.9) !important' }}
                >
                  Foster a loyal following that grows with every chapter.
                </p>
              </div>
            </div>

            {/* STORE BUTTONS */}
            <div className="flex gap-4">
              <img
                src="/images/app-store.svg"
                alt="Download on App Store"
                className="h-[52px] cursor-pointer"
              />
              <img
                src="/images/google-play.png"
                alt="Get it on Google Play"
                className="h-[52px] cursor-pointer"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[40%] flex justify-end">
            <div className="relative">
              <div className="absolute -right-4 top-4 h-full w-full rounded-[24px] bg-[#ece2d5]" />
              <img
                src="/images/book2.jpeg"
                alt="The Island No One Returned From"
                className="relative z-10 h-[520px] w-[360px] rounded-[24px] object-cover shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5 LINES OF EMPTY SPACE (160px) */}
      <div className="h-[160px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}