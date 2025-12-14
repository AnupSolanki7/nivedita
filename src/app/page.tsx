"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Palette,
  Brush,
  ArrowUp,
  X,
  Gift,
  Feather,
} from "lucide-react";

// Assuming these images exist in the correct path
import Art1 from "../../public/A.jpeg";
import Art2 from "../../public/Art.jpeg";
import Art3 from "../../public/Krishna.jpeg";
import Art4 from "../../public/bloom.jpeg";
import Art5 from "../../public/butterfly.jpeg";

export default function NiveditaFestivePortfolio() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [selectedArt, setSelectedArt] = useState<any>(null);
  const [showScroll, setShowScroll] = useState(false);

  // 🖱️ Cursor Tracker and ⬆ Back to Top visibility
  useEffect(() => {
    const move = (e: MouseEvent) =>
      setMouse({ x: e.clientX, y: e.clientY });

    const checkScrollTop = () => {
      // Show button after scrolling 400px
      setShowScroll(window.scrollY > 400); 
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const artworks = [
    { id: 1, title: "Silent Night Rose", image: Art1, description: "A peaceful composition inspired by winter's quiet beauty." },
    { id: 2, title: "Divine Krishna Art", image: Art3, description: "Vibrant devotion blended with festive colors." },
    { id: 3, title: "Holiday Imagination", image: Art2, description: "Abstract expression of festive warmth and joy." },
    { id: 4, title: "Winter Bloom", image: Art4, description: "Delicate artistry depicting flowers touched by frost." },
    { id: 5, title: "Festive Butterfly", image: Art5, description: "An ethereal creature adorned with sparkling Christmas patterns." },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#f7f0e6] text-[#333] overflow-x-hidden">

      {/* 🎄 LIGHT SNOW EFFECT (Subtler and brighter) */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-70">
        {[...Array(100)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-red-400/50 rounded-full animate-snow-light shadow-md shadow-red-300"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 7}s`,
            }}
          />
        ))}
      </div>

      {/* ✨ CURSOR GLOW */}
      <div
        className="fixed w-36 h-36 pointer-events-none z-40 transition-opacity duration-300 hidden sm:block" // Hidden on extra small screens for performance/clarity
        style={{ left: mouse.x - 72, top: mouse.y - 72 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-red-200/50 via-green-200/50 to-yellow-300/50 blur-3xl rounded-full opacity-60" />
      </div>

      {/* 🎄 NAVBAR (Responsive padding and text size) */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-red-200 shadow-md">
        <div className="max-w-7xl mx-auto h-16 md:h-20 flex justify-between items-center px-4 md:px-6">
          <h1 className="font-serif text-xl md:text-3xl font-black text-[#B00000] tracking-widest flex items-center">
            <Gift className="w-6 h-6 md:w-8 md:h-8 mr-2 text-[#006400]" />
            Nivedita's Festive Art
          </h1>
          {/* Navigation links hidden on small screens (would use a hamburger menu in production) */}
          <div className="hidden md:flex gap-6 lg:gap-10 text-lg font-medium">
            {["Home", "Gallery", "About", "Contact"].map((t) => (
              <a
                key={t}
                href={`#${t.toLowerCase()}`}
                className="text-[#333] hover:text-[#B00000] transition duration-300 relative group py-1"
              >
                {t}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#006400] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 🎅 HERO (Responsive scaling of text and card) */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 md:px-6 relative overflow-hidden bg-white/70">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('/light-wreath-texture.svg')" }}></div>

        <div className="max-w-6xl z-20 p-6 md:p-10 bg-white/80 rounded-3xl shadow-2xl border-4 border-red-100 mx-auto">
          <h1 className="font-serif text-7xl sm:text-8xl md:text-[12rem] font-black leading-none mb-4 text-[#B00000] drop-shadow-lg">
            Nivedita
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl italic text-[#006400] font-light tracking-wider drop-shadow-md mt-2">
            The Magic of Handmade Christmas
          </h2>

          <p className="mt-6 md:mt-8 text-base md:text-2xl font-serif text-[#333] max-w-3xl mx-auto">
             "Art that illuminates the spirit of Christmas. Each piece is a gift, created with love and a sprinkle of festive cheer."
          </p>

          <div className="flex justify-center gap-6 md:gap-10 mt-8 md:mt-10">
            <Palette className="w-8 h-8 md:w-10 md:h-10 text-[#B00000] transform hover:scale-125 transition" />
            <Feather className="w-8 h-8 md:w-10 md:h-10 text-[#333] transform hover:rotate-12 transition" />
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-[#006400] transform hover:scale-125 transition" />
          </div>

          <a href="#gallery">
            <button className="mt-10 md:mt-16 px-8 py-4 md:px-14 md:py-5 bg-gradient-to-r from-[#B00000] to-[#FF5733] text-white rounded-full font-bold text-base md:text-xl hover:scale-105 transition shadow-2xl relative animate-pulse-slow overflow-hidden">
              🎁 View The Holiday Collection
            </button>
          </a>
        </div>
      </section>

      {/* 🎄 GALLERY (Crucial Responsive Grid Adjustments) */}
      <section id="gallery" className="py-20 md:py-32 px-4 md:px-6 relative bg-red-50/70">
        <h2 className="text-4xl md:text-6xl text-center font-serif font-extrabold mb-12 md:mb-20 text-[#006400] drop-shadow-md">
          Christmas Creations ✨
        </h2>

        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {artworks.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArt(art)}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 cursor-pointer hover:scale-[1.03] transition duration-500 shadow-xl hover:shadow-2xl border-4 border-white hover:border-[#FF5733] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bg-[#006400] text-white text-xs font-bold py-1 px-3 rounded-br-lg z-10">
                  FESTIVE
              </div>

              <div className="relative h-72 sm:h-80 lg:h-96 bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden shadow-inner">
                {/* Image component scales responsively */}
                <Image
                  src={art.image}
                  alt={art.title}
                  className="object-cover h-full w-full group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-red-900/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                    <p className="text-white text-sm italic">{art.description}</p>
                </div>
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl font-serif text-center font-semibold text-[#B00000]">
                {art.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🎄 ABOUT (Responsive text scaling and padding) */}
      <section id="about" className="py-20 md:py-24 px-4 md:px-6 bg-white shadow-inner">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-extrabold mb-6 md:mb-8 text-[#B00000] drop-shadow-md">
            About the Artist 🎅
          </h2>
          <p className="text-lg md:text-xl text-[#333] leading-relaxed font-serif italic">
            "My mission is to bottle the feeling of Christmas morning and translate it onto the canvas. I use vibrant pigments and dedication to create pieces that are not just art, but heirlooms of **holiday warmth** and **spiritual devotion**."
          </p>
          <div className="mt-6 md:mt-8 text-base text-gray-500 font-light">
            <p>Mediums include acrylics, watercolors, and mixed media on canvas.</p>
          </div>
        </div>
      </section>

      {/* 🎅 CONTACT (Responsive Button Layout) */}
      <section id="contact" className="py-20 md:py-24 px-4 md:px-6 bg-green-50/70">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-extrabold mb-6 md:mb-8 text-[#006400] drop-shadow-md">
            Commission a Piece 🎁
          </h2>
          <p className="text-lg md:text-xl text-[#333] mb-8 md:mb-12 font-medium">
            Let's discuss a custom, personalized Christmas gift or artwork. Send warm wishes and start a collaboration today!
          </p>
          {/* Responsive Flexbox for buttons: stacked on small screens, side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-[#006400] to-[#5cb85c] text-white rounded-full font-bold text-base hover:scale-105 transition shadow-xl">
              Email for Commissions 📧
            </button>
            <button className="px-6 py-3 md:px-10 md:py-4 border-2 border-[#B00000] text-[#B00000] rounded-full font-bold text-base hover:bg-red-100 transition shadow-xl hover:scale-105">
              Instagram Portfolio 🖼️
            </button>
          </div>
        </div>
      </section>

      {/* 🎄 FOOTER */}
      <footer className="py-6 md:py-8 text-center bg-[#B00000] text-white text-sm md:text-base">
        © {new Date().getFullYear()} Nivedita's Festive Art • Handcrafted with Christmas Love 🎄
      </footer>

      {/* 🎁 LIGHTBOX (Responsive size controls) */}
      {selectedArt && (
        <div
          onClick={() => setSelectedArt(null)}
          className="fixed inset-0 bg-white/95 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-sm cursor-pointer"
        >
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 md:p-8 rounded-3xl max-w-sm sm:max-w-lg lg:max-w-4xl max-h-[90vh] shadow-2xl relative border-4 md:border-8 border-[#006400]/80">
            <button 
                onClick={() => setSelectedArt(null)}
                className="absolute top-[-10px] right-[-10px] md:top-[-15px] md:right-[-15px] bg-[#B00000] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition"
            >
                <X className="w-5 h-5 md:w-6 md:h-6"/>
            </button>
            <Image
              src={selectedArt.image}
              alt={selectedArt.title}
              // Max width/height adjust dynamically based on viewport
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg border border-gray-200"
            />
            <div className="mt-4 md:mt-6 text-center">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#006400]">{selectedArt.title}</h3>
                <p className="text-[#333] italic mt-2 text-sm md:text-lg">{selectedArt.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* ⬆ BACK TO TOP */}
      {showScroll && (
        <button 
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 w-12 h-12 md:bottom-6 md:right-6 md:w-14 md:h-14 bg-gradient-to-r from-[#B00000] to-[#FF5733] text-white rounded-full flex items-center justify-center shadow-2xl z-40 hover:scale-110 transition duration-300 border-2 border-white"
        >
          <ArrowUp className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      )}

      <style jsx global>{`
        /* Scrollbar styles (inherited) */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f7f0e6;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to top, #B00000, #006400);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to top, #7a0000, #004d00);
        }
      `}</style>
      <style jsx>{`
        /* Light Snow Animation (inherited) */
        @keyframes snow-light {
          0% {
            transform: translateY(-10vh);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
        .animate-snow-light {
          animation: snow-light linear infinite;
        }

        /* Slow Pulse for Button (inherited) */
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.8);
          }
        }
        .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}