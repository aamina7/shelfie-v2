"use client";
import { useState } from "react";
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
import HeroDialogueBox from "@/components/HeroDialogueBox";

export default function Home() {
  // 1. This state controls if the box is visible
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main className="relative bg-[#f7f4ee] min-h-screen">
      {/* 2. The SmoothScroll handles the background animations */}
      <SmoothScroll>
        <LibraryScroll />

        <div className="relative z-10 w-full bg-transparent">
          <Navbar />
          
          {/* 3. We pass the command to open the box to the Hero */}
          <Hero onOpenDialog={() => setIsDialogOpen(true)} />
          
          <Features />
          <About />
          <Community />
          <Writers />
          <AuthorJoin />
          <Articles />
          <Newsletter />
          <Footer />
        </div>
      </SmoothScroll>

      {/* 4. IMPORTANT: The box is OUTSIDE SmoothScroll so it doesn't get "stuck" */}
      <HeroDialogueBox 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </main>
  );
}