export default function Articles() {
  const articles = [
    {
      image: "/images/reader-girl.jpeg",
      date: "13 jan, 2026",
      title: "READING BOOKS ALWAYS MAKES THE MOMENTS HAPPY",
      category: "Inspiration",
    },
    {
      image: "/images/reader-man.jpeg",
      date: "2 feb, 2026",
      title: "READING BOOKS ALWAYS MAKES THE MOMENTS HAPPY",
      category: "Inspiration",
    },
    {
      image: "/images/article-reader.jpg", 
      date: "14 feb, 2026",
      title: "READING BOOKS ALWAYS MAKES THE MOMENTS HAPPY",
      category: "Inspiration",
    },
  ];

  return (
    <>
      <section className="bg-[#f7f4ee] px-6 py-28 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1200px]">

          {/* Heading */}
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-6">
              <div className="h-[1px] w-[200px] bg-[#d9d0ea]" />
              <p className="text-[13px] uppercase tracking-[0.25em] text-[#7b6f8c]">
                READ OUR ARTICLES
              </p>
              <div className="h-[1px] w-[200px] bg-[#d9d0ea]" />
            </div>

            <h2
              className="text-[64px] leading-none text-[#1f1f1f]"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              LATEST ARTICLES
            </h2>
          </div>

          {/* Cards */}
          <div className="flex gap-8">
            {articles.map((article, index) => (
              <div key={index} className="w-[33.33%]">
                
                {/* Image */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[230px] w-full rounded-[12px] object-cover"
                />

                {/* Date */}
                <p className="mt-4 text-[13px] text-[#d56600]">
                  {article.date}
                </p>

                {/* Title */}
                <h3
                  className="mt-2 text-[26px] leading-[1.05] text-[#1f1f1f]"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {article.title}
                </h3>

                {/* Category */}
                <p className="mt-3 text-[15px] text-[#1f1f1f]">
                  {article.category}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 LINES OF EMPTY SPACE (160px) */}
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}