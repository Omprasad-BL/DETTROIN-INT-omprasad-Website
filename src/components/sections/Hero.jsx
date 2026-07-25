// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import Section from '../ui/Section';
import TypingEffect from '../ui/TypingEffect'; 
import Sample from '../../assets/sample.jpg';
import Wm from '../../assets/klogo.png'
export default function Hero() {
  const LogoRepeater = () => (
    <div className="flex justify-around items-center w-full shrink-0">
      {[...Array(10)].map((_, i) => (
        <img 
          key={i} 
          src={Wm}
          alt="KIS Crest Watermark" 
          className="w-16 md:w-20 opacity-[0.08] grayscale drop-shadow-sm" 
        />
      ))}
    </div>
  );

  return (
    <Section 
      id="hero" 
      // Base dark slate background with overflow hidden to contain the animations
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center pt-28 pb-12 gap-10 sm:gap-14 overflow-hidden bg-slate-950"
    >
      
      <style>{`
        /* 1. Staggered Uniform Marquee (Watermark) */
        @keyframes staggeredScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-watermark {
          animation: staggeredScroll 40s linear infinite;
        }

        /* 2. Floating Bubble Animation (Inside Avatars) */
        @keyframes bubbleFloat {
          0% { transform: translateY(10px) scale(0.5); opacity: 0; }
          40% { opacity: 0.8; }
          100% { transform: translateY(-80px) scale(1.2); opacity: 0; }
        }
        .animate-bubble {
          animation: bubbleFloat 1.5s ease-in infinite;
        }

        /* 3. Liquid Water Morph Animation (Behind Avatars) */
        @keyframes liquidMorph {
          0%   { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34%  { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67%  { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }
        @keyframes liquidSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .liquid-layer {
          animation: liquidMorph 5s ease-in-out infinite, liquidSpin 8s linear infinite;
        }
        .liquid-layer-alt {
          animation: liquidMorph 7s ease-in-out infinite reverse, liquidSpin 12s linear infinite reverse;
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}

      {/* Background Radial Glow (Spotlight effect) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[70%] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Vercel-Style Architectural Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          // Masks the grid so it fades out smoothly toward the edges and bottom
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, #000 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, #000 20%, transparent 100%)'
        }}
      />

      {/* Staggered Watermark Pattern (Pushed deep into the background) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] -rotate-[30deg] z-[1] pointer-events-none flex flex-col justify-evenly mix-blend-screen">
        {[...Array(12)].map((_, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index}
              className="flex w-[200%] animate-watermark"
              style={{ animationDelay: isEven ? '0s' : '-20s' }}
            >
              <LogoRepeater />
              <LogoRepeater />
            </div>
          );
        })}
      </div>


      {/* --- FOREGROUND CONTENT --- */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 max-w-4xl text-center px-4 mt-8 md:mt-0"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight mb-5 leading-tight text-white drop-shadow-md">
          Let's explore the <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">limitless</span><br className="hidden sm:inline" />
          {/* <TypingEffect /> */}
          possibilities of knowledge
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 max-w-xl mx-auto drop-shadow">
          We are committed to providing high-quality teaching and developing intellectually curious, self-motivated young children with an endearing love of learning.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3">
          <button className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-full transition-all text-sm md:text-base shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Click to Enroll
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 text-slate-300 hover:text-white transition-all group text-sm md:text-base backdrop-blur-md bg-white/5 rounded-full border border-white/10 hover:bg-white/10">
            <PlayCircle className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform drop-shadow-md" />
            <span className="font-medium">Explore us</span>
          </button>

          <button className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-full transition-all text-sm md:text-base shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Pay School Fee
          </button>
        </div>
      </motion.div>

      {/* --- AVATARS WITH ON-HOVER 2PX WAVING BACKGROUND & SUNLIGHT SHINE --- */}
      
      {/* <div className="z-10 w-full flex justify-center items-center gap-6 sm:gap-8 md:gap-12 px-4 flex-wrap mt-4"> */}
        <div className="z-10 w-full flex justify-center items-center gap-6 sm:gap-10 md:gap-20 px-4 flex-wrap mt-4">
        <style>{`
          /* 1. Organic waving border animation */
          @keyframes gentleWave {
            0%, 100% { border-radius: 50%; transform: rotate(0deg); }
            33% { border-radius: 45% 55% 40% 60% / 55% 45% 60% 40%; transform: rotate(3deg); }
            66% { border-radius: 55% 45% 55% 45% / 45% 55% 45% 55%; transform: rotate(-3deg); }
          }
          
          /* 2. Micro-interaction vertical float */
          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }

          /* Apply animations EXCLUSIVELY on hover */
          .avatar-group:hover {
            animation: subtleFloat 2s ease-in-out infinite;
          }
          .avatar-group:hover .avatar-wave {
            animation: gentleWave 2.5s ease-in-out infinite;
          }
        `}</style>

        {[1, 2, 3, 4].map((item, index) => {
          
          const waveColors = [
            'bg-emerald-500',
            'bg-amber-500',
            'bg-purple-500',
            'bg-blue-500'
          ];

          return (
            <motion.div 
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 + (index * 0.08) }}
              // Added custom 'avatar-group' class to act as the CSS hover trigger
              className="relative group cursor-pointer shrink-0 avatar-group transition-all duration-300"
            >
               {/* 
                 Waving Background Layer 
                 Stays a static rounded-full circle (opacity-0 by default for cleanliness, or opacity-50 if you prefer it always visible).
                 Triggers the 'avatar-wave' animation ONLY when the parent is hovered.
               */}
               <div 
                 className={`absolute inset-[-2px] ${waveColors[index]} rounded-full avatar-wave opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
               />

               {/* Inner Avatar Container (Strictly perfectly rounded) */}
               <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-slate-900 overflow-hidden z-20 border-[1px] border-slate-800">
                  
                  {/* Sunlight Shine Animation (Triggers across the image on hover) */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-40 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent left-[-150%] group-hover:left-[200%] transition-all duration-700 ease-out pointer-events-none" />

                  {/* The Student Image */}
                  <img 
                    src={Sample} 
                    alt="Student" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10" 
                  />
               </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}