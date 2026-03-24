import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Community from "@/components/Community";
import Writers from "@/components/Writers";
import AuthorJoin from "@/components/AuthorJoin";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

// ✅ NEW IMPORT
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="bg-[#f7f4ee]">
      
      {/* ✅ WRAP EVERYTHING INSIDE SMOOTH SCROLL */}
      <SmoothScroll>
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Community />
        <Writers />
        <AuthorJoin />
        <Articles />
        <Newsletter />
        <Footer />
      </SmoothScroll>

    </main>
  );
}