export default function About() {
  return (
    <>
      <section className="bg-[#f7f4ee] px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1200px] flex items-start justify-between gap-16">
          
          {/* LEFT */}
          <div className="w-[48%]">
            <div className="mb-6 h-[3px] w-10 bg-[#d56600]" />

            <h2
              className="text-[72px] leading-[0.92] text-[#4b1d58]"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              WHAT IS SHELFIE
            </h2>

            <p className="mt-6 text-[16px] uppercase tracking-[0.3em] text-[#d56600]">
              A SHARED SPACE FOR READERS AND WRITERS
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-[52%]">
            <h3 className="text-[34px] font-semibold leading-[1.35] text-[#1f1f1f]">
              Shelfie is an interactive storytelling platform built for both
              readers and writers.
            </h3>

            <p className="mt-8 text-[18px] leading-[1.8] text-[#5b6472]">
              Writers can share their books, stories, and ideas, while readers can
              engage directly with authors through meaningful interactions. Unlike
              traditional eBooks platforms, Shelfie focuses on connection,
              dialogue, and community, not just content distribution.
            </p>

            <div className="mt-12 h-[3px] w-16 bg-[#d8a878]" />
          </div>
        </div>
      </section>

      {/* 3 LINES OF EMPTY SPACE (160px) */}
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}