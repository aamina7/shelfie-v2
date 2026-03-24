export default function Footer() {
  return (
    <footer className="bg-[#f7f4ee] px-6 pb-10 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1100px] text-center">

        {/* LINE */}
        <div className="mb-6 border-t border-black/10" />

        {/* TEXT */}
        <p className="text-[14px] text-[#6b7280]">
          A product by{" "}
          <span className="text-[#d56600] font-medium">
            JAC Magnus Private Limited
          </span>
        </p>

      </div>
    </footer>
  );
}