export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      {/* PERFECTED SIZE: Keeping your py-1.5 padding */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-1.5 md:px-10 lg:px-14">
        
        {/* Logo Section - Stacked and now in Bold Black */}
        <div className="flex flex-col select-none justify-center">
          <h1 className="text-[24px] font-black uppercase leading-[0.8] tracking-tighter text-black">
            SHELFIE
          </h1>
          <p className="mt-[2px] text-[10px] font-black uppercase tracking-wider text-black opacity-90">
            Your Shelf. Your Story.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-[#b85600] px-5 py-1.5 text-[13px] font-black text-white transition-all hover:scale-105 hover:bg-[#d96500]">
            Read Great books!
          </button>
          <button className="rounded-full bg-[#b85600] px-5 py-1.5 text-[13px] font-black text-white transition-all hover:scale-105 hover:bg-[#d96500]">
            Start writing today
          </button>
        </div>

      </div>
    </header>
  );
}