export default function Navbar() {
  return (
    <header className="border-b border-black/5 bg-[#f7f4ee]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        <div>
          <h1 className="text-[34px] font-black uppercase leading-none tracking-tight text-[#26114a]">
            SHELFIE
          </h1>
          <p className="mt-1 text-[15px] text-[#3b244d]">Your Shelf. Your Story.</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-full bg-[#c85f00] px-8 py-3 text-[16px] font-semibold text-white">
            Read Great books!
          </button>
          <button className="rounded-full bg-[#3a0d45] px-8 py-3 text-[16px] font-semibold text-white">
            Start writing today
          </button>
        </div>
      </div>
    </header>
  );
}