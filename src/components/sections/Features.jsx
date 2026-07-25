// src/components/sections/Features.jsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Sample from '../../assets/sample.jpg'; // Importing the sample image for the hover cards

const featuresData = [
  { 
    title: "Academics", 
    desc: "We are committed to providing high-quality teaching, developing intellectually curious, self-motivated, enthusiastic young children with an endearing love of learning.", 
    img: "/assets/academics.jpg",
    delay: 0.1
  },
  { 
    title: "Admission", 
    desc: "Krishna International School seeks students from diverse social and cultural backgrounds, who demonstrate a desire to continuously learn and grow.", 
    img: "/assets/admission.jpg",
    delay: 0.2
  },
  { 
    title: "Co-Curricular", 
    desc: "We are on a constant mission to make our learning environment responsive, exciting, and geared toward holistic student development.", 
    img: "/assets/cocurricular.jpg",
    delay: 0.3
  },
  { 
    title: "Gallery", 
    desc: "We encourage every student at the school to express themselves creatively, embrace their individuality, and learn to work collaboratively.", 
    img: "/assets/gallery.jpg",
    delay: 0.4
  }
];

export default function Features() {
  return (
    <Section id="features" className="bg-[#050810] border-y border-white/5 relative overflow-hidden pb-24">
      
      {/* --- CENTERED RADIAL GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Framer Motion kept ONLY for initial scroll reveal, not for hovers) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Here is the Reason How We Help<br className="hidden md:block" />
            Students to Explore Their Talent.
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
        </motion.div>

        {/* 3-COLUMN RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {featuresData.map((feature, idx) => (
            // Wrapping the card in motion.div solely for the scroll-in entry animation.
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className={idx === 3 ? 'lg:col-start-2' : ''}
            >
              {/* 
                THE CARD: Pure CSS/Tailwind interactions only.
                - group: Triggers all child hover effects.
                - hover:-translate-y-1.5: The "little tweak" lift.
              */}
              <div className="group relative flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-900/20 transition-transform duration-200 cursor-pointer">
                
               
             {/* Uses a real rounded border and clip-path to reveal from bottom-left to top-right smoothly */}
                <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 z-20 pointer-events-none transition-all duration-300 ease-out [clip-path:inset(100%_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)]" />

                {/* Image Container (No zoom, strictly static) */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden shrink-0">
                  <img 
                    src={Sample} 
                    alt={feature.title} 
                    className="w-full h-full object-cover" 
                  />
                  {/* Subtle overlay to blend image into the glassmorphism body */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/90 via-transparent to-transparent opacity-90" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow p-6 md:p-8 pt-4 md:pt-5 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-emerald-400 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {feature.desc}
                  </p>
                  
                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-emerald-500 font-semibold mt-auto">
                    <span>Explore now</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </Section>
  );
}