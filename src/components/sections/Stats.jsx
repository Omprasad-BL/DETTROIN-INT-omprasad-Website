// src/components/sections/Stats.jsx
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Trophy, HeartHandshake, Landmark } from 'lucide-react';
import Section from '../ui/Section';

const statsData = [
  { id: 1, value: "6,000+", label: "Students & Faculties", icon: Users, delay: 0.1, live: true },
  { id: 2, value: "60+", label: "National & Int. Awards", icon: Trophy, delay: 0.2, live: false },
  { id: 3, value: "100%", label: "Parents Satisfaction", icon: HeartHandshake, delay: 0.3, live: false },
  { id: 4, value: "CBSE", label: "Affiliated School", icon: Landmark, delay: 0.4, live: false }
];

// --- HIGH PERFORMANCE IN-VIEW ROLLING MOTOR ---
function ScrollingCounter({ value, once }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState("0");
  const isInView = useInView(ref, { once: once, margin: "-50px" });

  useEffect(() => {
    // Break layout safely if value is a text string (like "CBSE") instead of number strings
    const numericTarget = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (isNaN(numericTarget)) {
      setDisplayValue(value);
      return;
    }

    if (isInView) {
      // Direct numeric value countdown ticker setup bound natively to Framer Motion timeline frame ticks
      const controls = animate(0, numericTarget, {
        duration: 2.0, // Length of rolling count animations
        ease: "easeOut",
        onUpdate: (latest) => {
          const floored = Math.floor(latest);
          
          // Re-attach custom text formatting parameters ($ / % / + / commas) on the fly
          if (value.includes(',')) {
            setDisplayValue(`${floored.toLocaleString()}${value.replace(/[0-9,]/g, '')}`);
          } else {
            setDisplayValue(`${floored}${value.replace(/[0-9]/g, '')}`);
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Stats() {
  return (
    <Section id="stats" className="bg-[#0a0f1a] border-y border-white/5 relative overflow-hidden">
      {/* Subtle Background Lighting for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat) => (
            <motion.div 
              key={stat.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, delay: stat.delay }}
              // The Card: Interactive Lift and Glow
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm hover:-translate-y-2 hover:bg-slate-800/60 hover:border-emerald-500/30 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.15)] transition-all duration-300"
            >
              {/* Internal Hover Gradient Highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
              
              {/* Icon Container with pop effect */}
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500 shadow-lg relative">
                
                {/* Live pulse indicator light that safely shows up if stat.live is true */}
                {stat.live && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                )}

                <stat.icon className="w-8 h-8 text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300" />
              </div>

              {/* Typography */}
              <h4 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow-sm">
                {/* CALLING SCROLL TRACK COUNTER UTIL HERE */}
                <ScrollingCounter value={stat.value} once={true} />
              </h4>
              
              <p className="text-sm md:text-sm font-medium text-slate-400 uppercase tracking-widest group-hover:text-slate-300 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
