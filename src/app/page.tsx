
'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Palette, Camera, Brush, Star, Flower2, Moon, Sun, Feather, Zap, Music, BookOpen, PenTool }  from 'lucide-react';
import Art1 from '../../public/art.jpg'
import Art2 from '../../public/hand.jpg'
import Art3 from '../../public/krishna_saday.jpg'
import Art4 from '../../public/moon.jpg'
import Image from 'next/image';

export default function NiveditaPortfolio() {
 const [isLoaded, setIsLoaded] = useState(false);
  const [selectedArt, setSelectedArt] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  // Sample artwork data - replace with actual images
  const artworks = [
    {
      id: 1,
      title: "Whispers of Spring",
      category: "Handmade Card",
      description: "Delicate florals dancing in watercolor",
      image: Art1,
      color: "from-pink-200 to-rose-300"
    },
    {
      id: 2,
      title: "Dreams in Pastel",
      category: "Painting",
      description: "Abstract emotions on canvas",
      image: Art2,
      color: "from-purple-200 to-indigo-300"
    },
    {
      id: 3,
      title: "Krishna Sada sahayat",
      category: "Handmade Card",
      description: "Heartfelt messages in artistic form",
      image: Art3,
      color: "from-amber-200 to-orange-300"
    },
    {
      id: 4,
      title: "Ethereal Moments",
      category: "Photography",
      description: "Capturing beauty in everyday life",
      image: Art4,
      color: "from-cyan-200 to-blue-300"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 relative overflow-hidden">
       {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute -bottom-32 left-40 w-96 h-96 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse-slow"></div>
        
      </div>

      {/* Interactive Cursor Follower */}
      <div 
        className="fixed w-20 h-20 pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x - 40}px`,
          top: `${mousePosition.y - 40}px`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
      </div>

      {/* Hero Section with Enhanced Design */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center z-10 max-w-5xl mx-auto">
          {/* Animated Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <Sparkles className="absolute top-10 left-10 text-pink-500 opacity-70 animate-sparkle" size={28} />
            <Heart className="absolute top-20 right-20 text-rose-500 opacity-60 animate-heartbeat" size={24} />
            <Star className="absolute bottom-20 left-20 text-yellow-500 opacity-60 animate-twinkle" size={26} />
            <Palette className="absolute bottom-10 right-10 text-purple-500 opacity-70 animate-spin-slow" size={30} />
            <Flower2 className="absolute top-1/3 left-1/4 text-fuchsia-500 opacity-50 animate-sway" size={22} />
            <Moon className="absolute top-1/3 right-1/4 text-indigo-500 opacity-50 animate-float" size={20} />
            <Sun className="absolute bottom-1/3 left-1/3 text-amber-500 opacity-50 animate-spin-slow" size={24} />
            <Feather className="absolute bottom-1/3 right-1/3 text-cyan-500 opacity-50 animate-float-slow" size={22} />
          </div>

          {/* Creative Title with Multiple Effects */}
          <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
            <div className="relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 opacity-20 blur-3xl animate-pulse-slow"></div>
              
              {/* Main Title */}
              <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl font-black mb-6 relative">
                <span className="relative inline-block">
                  {/* Outline Text Effect */}
                  <span className="absolute inset-0 text-transparent" style={{
                    WebkitTextStroke: '2px transparent',
                    backgroundImage: 'linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ec4899)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-shift 3s linear infinite'
                  }}>
                    Nivedita
                  </span>
                  
                  {/* Main Gradient Text */}
                  <span className="relative bg-gradient-to-r from-violet-600 via-pink-600 to-rose-600 bg-clip-text text-transparent animate-gradient-x">
                    Nivedita
                  </span>
                  
                  {/* Sparkle Effects */}
                  <Sparkles className="absolute -top-6 -right-6 text-yellow-400 animate-sparkle" size={20} />
                  <Star className="absolute -bottom-4 -left-4 text-pink-400 animate-twinkle" size={16} />
                </span>
              </h1>
            </div>
          </div>

          {/* Enhanced Tagline with Icons */}
          <div className={`transform transition-all duration-1500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8">
              <span className="flex items-center gap-2 font-light">
                <Palette className="text-purple-500 animate-bounce-slow" size={24} />
                Creative Soul
              </span>
              <span className="hidden sm:inline text-pink-400">✦</span>
              <span className="flex items-center gap-2 font-light">
                <Brush className="text-rose-500 animate-sway" size={24} />
                Artist
              </span>
              <span className="hidden sm:inline text-purple-400">✦</span>
              <span className="flex items-center gap-2 font-light">
                <Moon className="text-indigo-500 animate-pulse" size={24} />
                Dreamer
              </span>
            </div>
          </div>

          {/* Animated Quote */}
          <div className={`transform transition-all duration-1500 delay-500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-600 italic font-light max-w-2xl mx-auto mb-8">
              "Art is not what you see, but what you make others see"
            </p>
          </div>

          {/* Creative Divider */}
          <div className={`transform transition-all duration-1500 delay-700 ${isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-400"></div>
              <Flower2 className="text-purple-400 animate-spin-slow" size={20} />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className={`transform transition-all duration-1500 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">View Gallery</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-3 border-2 border-purple-400 text-purple-600 rounded-full font-medium transition-all duration-300 hover:bg-purple-50 hover:scale-105 hover:border-purple-500">
                <span className="flex items-center gap-2">
                  <Heart size={18} />
                  About the Artist
                </span>
              </button>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-8 h-12 border-2 border-gradient-to-b from-purple-400 to-pink-400 rounded-full flex justify-center">
                <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-scroll-bounce"></div>
              </div>
              <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-sparkle" size={12} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Art Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              A collection of handcrafted emotions, painted dreams, and captured moments
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className={`group relative transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedArt(artwork)}
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${artwork.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                    <div className="relative m-1 bg-white rounded-xl overflow-hidden">
                    {/* Image Container */}
                    <div className="relative h-96 w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <Image 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="object-cover w-auto h-full max-h-full max-w-full transform group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-700">
                        {artwork.category}
                      </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {artwork.title}
                      </h3>
                      <p className="text-gray-600 text-sm italic">
                      {artwork.description}
                      </p>
                      
                      {/* Decorative Icon */}
                      <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Heart className="w-5 h-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Sparkles className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                      </div>
                      <Brush className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                      </div>
                    </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedArt && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArt(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden transform scale-95 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
            >
              <span className="text-2xl text-gray-700">&times;</span>
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5">
                <Image 
                  src={selectedArt.image} 
                  alt={selectedArt.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/5 p-8">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                  {selectedArt.category}
                </span>
                <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">
                  {selectedArt.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedArt.description}
                </p>
                <div className="flex items-center space-x-4">
                  <Heart className="w-6 h-6 text-pink-500" />
                  <Palette className="w-6 h-6 text-purple-500" />
                  <Camera className="w-6 h-6 text-indigo-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        
        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}