"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        
        {/* Logo Section */}
        <div 
          className="flex flex-col select-none justify-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1 className="text-[24px] font-black uppercase leading-[0.8] tracking-tighter text-black">
            SHELFIE
          </h1>
          <p className="mt-[2px] text-[10px] font-black uppercase tracking-wider text-black opacity-90">
            Your Shelf. Your Story.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center">
          {/* BUTTON 1: Forced small width with !important and forced white text */}
          <button 
            onClick={() => scrollToSection("community")}
            style={{ 
              padding: '8px 24px !important', 
              marginRight: '40px', 
              width: '180px !important',
              minWidth: '180px !important',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white !important' // UPDATED: Forced white color
            }}
            className="rounded-full bg-[#d56600] text-[14px] font-black !text-white transition-all hover:scale-105 whitespace-nowrap"
          >
            Read Great books!
          </button>
          
          {/* BUTTON 2: Forced small width with !important and forced white text */}
          <button 
            onClick={() => scrollToSection("authorjoin")}
            style={{ 
              padding: '8px 24px !important', 
              width: '180px !important',
              minWidth: '180px !important',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white !important' // UPDATED: Forced white color
            }}
            className="rounded-full bg-[#4b1d58] text-[14px] font-black !text-white transition-all hover:scale-105 whitespace-nowrap"
          >
            Start writing today
          </button>
        </div>

      </div>
    </header>
  );
}