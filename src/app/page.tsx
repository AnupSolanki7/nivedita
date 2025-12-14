"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Heart,
  Sparkles,
  Palette,
  Brush,
  Star,
  ArrowUp,
} from "lucide-react";

import Art1 from "../../public/A.jpeg";
import Art2 from "../../public/Art.jpeg";
import Art3 from "../../public/Krishna.jpeg";
import Art4 from "../../public/bloom.jpeg";
import Art5 from "../../public/butterfly.jpeg";

export default function NiveditaPortfolio() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [selectedArt, setSelectedArt] = useState<any>(null);

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const artworks = [
    { id: 1, title: "Artistic A", image: Art1 },
    { id: 2, title: "Imagination", image: Art2 },
    { id: 3, title: "Krishna", image: Art3 },
    { id: 4, title: "Bloom", image: Art4 },
    { id: 5, title: "Butterfly", image: Art5 },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b1f16] via-[#7a1111] to-[#0b3d2e] text-white overflow-hidden">

      {/* 🎄 SNOW */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(80)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🎅 CHRISTMAS FLOATING ICONS */}
      <div className="fixed inset-0 pointer-events-none z-10 text-3xl opacity-80">
        {["🎅", "🦌", "🎄", "🎁", "⭐"].map((icon, i) => (
          <span
            key={i}
            className="absolute animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* ✨ CURSOR GLOW */}
      <div
        className="fixed w-24 h-24 pointer-events-none z-40"
        style={{ left: mouse.x - 48, top: mouse.y - 48 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-red-500/30 to-green-500/30 blur-2xl rounded-full" />
      </div>

      {/* 🎄 NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto h-16 flex justify-between items-center px-6">
          <h1 className="font-serif text-xl font-bold text-red-400">
            🎄 Nivedita
          </h1>
          <div className="hidden md:flex gap-6 text-sm">
            {["Home", "Gallery", "About", "Contact"].map((t) => (
              <span
                key={t}
                className="cursor-pointer hover:text-green-400 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* 🎅 HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-20 relative">
        <div className="max-w-5xl z-20">
          <h1 className="font-serif text-7xl md:text-9xl font-black bg-gradient-to-r from-red-400 via-white to-green-400 bg-clip-text text-transparent drop-shadow-xl">
            Nivedita
          </h1>

          <p className="mt-6 text-xl md:text-2xl italic text-green-300">
            Christmas • Art • Love • Magic 🎄✨
          </p>

          <div className="flex justify-center gap-6 mt-10">
            <Palette className="text-red-400" />
            <Brush className="text-white" />
            <Sparkles className="text-green-400" />
          </div>

          <button className="mt-12 px-10 py-4 bg-gradient-to-r from-red-600 to-green-600 rounded-full font-semibold hover:scale-110 transition shadow-xl">
            🎁 Explore Christmas Gallery
          </button>
        </div>
      </section>

      {/* 🎄 GALLERY */}
      <section className="py-24 px-6 relative">
        <h2 className="text-center text-5xl font-serif font-bold mb-16">
          🎅 Christmas Creations
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {artworks.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArt(art)}
              className="group bg-black/40 rounded-3xl p-4 cursor-pointer hover:scale-105 transition shadow-2xl"
            >
              <div className="relative h-80 bg-black flex items-center justify-center rounded-2xl overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  className="object-contain h-full group-hover:scale-110 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <h3 className="mt-4 text-xl font-serif text-center">
                {art.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🎄 ABOUT */}
      <section className="py-24 px-6 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">
            About the Artist 🎨
          </h2>
          <p className="text-lg text-white/80">
            Nivedita creates handmade art filled with warmth, devotion,
            imagination, and festive joy. Every piece is crafted with patience,
            love, and Christmas magic.
          </p>
        </div>
      </section>

      {/* 🎅 CONTACT */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">
            Get in Touch 🎁
          </h2>
          <p className="text-white/80 mb-10">
            Commission a Christmas gift, festive artwork or just send warm
            wishes 🎄
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-red-600 rounded-full">
              Message 🎅
            </button>
            <button className="px-6 py-3 border border-green-400 rounded-full">
              Instagram 🎄
            </button>
          </div>
        </div>
      </section>

      {/* 🎄 FOOTER */}
      <footer className="py-8 text-center bg-black text-white/70">
        © {new Date().getFullYear()} Nivedita • Merry Christmas 🎄
      </footer>

      {/* 🎁 LIGHTBOX */}
      {selectedArt && (
        <div
          onClick={() => setSelectedArt(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
        >
          <div className="bg-black p-6 rounded-2xl">
            <Image
              src={selectedArt.image}
              alt={selectedArt.title}
              className="max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* ⬆ BACK TO TOP */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-red-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
        <ArrowUp />
      </button>

      <style jsx>{`
        @keyframes snow {
          0% {
            transform: translateY(-10vh);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
        .animate-snow {
          animation: snow linear infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
