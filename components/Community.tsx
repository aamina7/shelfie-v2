export default function Community() {
  return (
    <>
      <section className="bg-[#f7f4ee] px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-20">
          {/* LEFT IMAGE BLOCK */}
          <div className="w-[40%] flex justify-start">
            <div className="relative">
              <div className="absolute left-5 top-5 h-full w-full rounded-[18px] bg-[#eadac7]" />
              <img
                src="/images/book4.png"
                alt="Crown of Thorns and Starlight"
                className="relative z-10 h-[460px] w-[320px] rounded-[20px] object-cover shadow-lg"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-[60%]">
            <h2
              className="max-w-[760px] text-[58px] leading-[0.92] text-[#c85f00] md:text-[82px]"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              FOR THOSE PASSIONATE READERS WHO WANT TO
            </h2>

            <div className="mt-10 space-y-0">
              <div className="grid grid-cols-[44px_1fr] items-center gap-4 border-b border-black/10 py-5">
                <span className="text-[18px] font-semibold text-[#c85f00]">01</span>
                <p className="text-[18px] text-[#1f1f1f]">Discover new writers</p>
              </div>

              <div className="grid grid-cols-[44px_1fr] items-center gap-4 border-b border-black/10 py-5">
                <span className="text-[18px] font-semibold text-[#c85f00]">02</span>
                <p className="text-[18px] text-[#1f1f1f]">Explore their work</p>
              </div>

              <div className="grid grid-cols-[44px_1fr] items-center gap-4 border-b border-black/10 py-5">
                <span className="text-[18px] font-semibold text-[#c85f00]">03</span>
                <p className="text-[18px] text-[#1f1f1f]">
                  Take part in conversations that bring stories to life
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-[760px] text-[18px] leading-[1.8] text-[#5b6472]">
              Shelfie allows readers to ask questions, share perspectives, and
              interact with authors without expensive paywalls or exclusivity.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <div className="mt-1 h-7 w-[3px] bg-[#c85f00]" />
              <p className="text-[18px] italic text-[#1f1f1f]">
                Reading on Shelfie isn&apos;t passive, it&apos;s personal.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <img
                src="/images/app-store.svg"
                alt="Download on the App Store"
                className="h-[48px] w-auto object-contain"
              />
              <img
                src="/images/google-play.png"
                alt="Get it on Google Play"
                className="h-[48px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 LINES OF EMPTY SPACE (160px) */}
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}