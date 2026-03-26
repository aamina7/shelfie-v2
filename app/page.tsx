import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LibraryScroll from "@/components/LibraryScroll";
import Features from "@/components/Features";
import About from "@/components/About";
import Community from "@/components/Community";
import Writers from "@/components/Writers";
import AuthorJoin from "@/components/AuthorJoin";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative bg-[#f7f4ee]">
      <SmoothScroll>
        <LibraryScroll />

        <div className="relative z-10">
          
          {/* EXTENDED TRANSPARENT ZONE: Library shows through all these */}
          <div id="transparent-zone" className="bg-transparent">
            <Navbar />
            <Hero />
            <Features />
            <About /> {/* Now part of the library experience */}
            <Community />
            <Writers />
            <AuthorJoin />
            <Articles />
            <Newsletter />
            <Footer />
          </div>

          {/* SOLID ZONE: The background "shuts" here */}
          <div className="relative z-20 bg-[#f7f4ee] shadow-[0_-50px_100px_rgba(0,0,0,0.12)]">
            
          </div>
        </div>
      </SmoothScroll>
    </main>
  );
}