// src/components/sections/About.jsx
import { motion } from 'framer-motion';
import { Atom, BookOpen, GraduationCap, Microscope, Globe, Palette, Calculator, Compass } from 'lucide-react';
import Section from '../ui/Section';
import Sample from '../../assets/sample.jpg'; // Importing the sample image for the hover cards

// 1. Hover Overlay Card Component (Standard WebKit Compositing Fix)
const HoverCard = ({ img, title, desc, shapeClass, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    /* 
      1. isolation-isolate creates a new stacking context.
      2. Removed standard 'border' class to prevent edge calculation bleeding.
    */
    className={`group relative w-full aspect-square overflow-hidden cursor-pointer shadow-xl bg-[#0f172a] isolation-isolate ${shapeClass}`}
    style={{
      // The absolute standard CSS hack to fix Webkit border-radius + transform bleed
      WebkitMaskImage: '-webkit-radial-gradient(white, black)' 
    }}
  >
    {/* 
      We use an absolute inset ring instead of a standard border. 
      This draws the line INSIDE the container, preventing the white halo.
    */}
    <div className={`absolute inset-0 ring-1 ring-inset ring-white/5 z-20 pointer-events-none ${shapeClass}`} />

    {/* Base Image */}
    <img 
      src={img} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
    />
    
    {/* Sliding Text Cover-Up Overlay */}
    <div className="absolute inset-0 bg-slate-900/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center p-4 md:p-6 translate-y-4 group-hover:translate-y-0 z-10">
      <h4 className="text-lg md:text-xl font-bold text-emerald-400 mb-2">{title}</h4>
      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);
// 2. Diagonal Icon Repeater for Background
const IconRepeater = () => (
  <div className="flex justify-around items-center w-full shrink-0 opacity-[0.03] text-white">
    <Atom size={64} />
    <BookOpen size={64} />
    <GraduationCap size={64} />
    <Microscope size={64} />
    <Globe size={64} />
    <Palette size={64} />
    <Calculator size={64} />
    <Compass size={64} />
  </div>
);

export default function About() {
  return (
    <Section id="about" className="bg-[#0f172a] border-y border-white/5 overflow-hidden relative">
      
      {/* Self-contained animation for the diagonal scroll */}
      <style>{`
        @keyframes diagonalScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-icon-watermark {
          animation: diagonalScroll 40s linear infinite;
        }
      `}</style>

      {/* --- BACKGROUND LAYER --- */}
      {/* Infinite Scrolling Educational Icons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] -rotate-[30deg] z-0 pointer-events-none flex flex-col justify-evenly">
        {[...Array(12)].map((_, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index}
              className="flex w-[200%] animate-icon-watermark"
              style={{ animationDelay: isEven ? '0s' : '-20s' }}
            >
              <IconRepeater />
              <IconRepeater />
            </div>
          );
        })}
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Krishna International School
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto px-4">
          
          {/* LEFT SIDE: Bundled Square Image Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 w-full max-w-[500px] mx-auto lg:mx-0">
             
             {/* 
               Outer Edge Rounded: Top-Left Image
               rounded-tl-[4rem] creates the large outer curve, while inner edges remain standard rounded-2xl
             */}
             <HoverCard 
               img={Sample}
               title="Scientific Curiosity" 
               desc="Collaborative geography and science projects."
               shapeClass="rounded-tl-[4rem] md:rounded-tl-[5rem] rounded-tr-xl rounded-bl-xl rounded-br-xl"
               delay={0.1}
             />
             
             {/* Standard Inner Image: Top-Right */}
             <HoverCard 
               img={Sample}
               title="Interactive Class" 
               desc="Peer-to-peer learning environments."
               shapeClass="rounded-xl md:rounded-2xl"
               delay={0.2}
             />
             
             {/* Standard Inner Image: Bottom-Left */}
             <HoverCard 
               img={Sample} 
               title="Sports & Athletics" 
               desc="Building character and teamwork."
               shapeClass="rounded-xl md:rounded-2xl"
               delay={0.3}
             />
             
             {/* 
               Outer Edge Rounded: Bottom-Right Image
               rounded-br-[4rem] creates the large outer curve to mirror the top-left
             */}
             <HoverCard 
               img={Sample} 
               title="Academic Focus" 
               desc="Dedicated spaces for deep study."
               shapeClass="rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-[4rem] md:rounded-br-[5rem]"
               delay={0.4}
             />
          </div>

          {/* RIGHT SIDE: Clean, Perfect Typography */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-300 text-base md:text-lg leading-relaxed space-y-6"
          >
            <p>
              Amongst the best CBSE schools in Aligarh, the school is set amidst 5 acres of
              land, away from the city's pollution. The school provides an ideal environment
              for academic and co-curricular excellence. The school has all facilities required
              for the overall development of children. Facilities such as an equipped library,
              theatre, science laboratories and sports for students, so they excel in
              academics and enhance their co-curricular skills and talents.
            </p>
            <p>
              The school is committed to the cause of promoting sound moral values,
              encouraging a scientific temperament and developing the overall personality
              of its students. Regular counselling of students gives them an insight into the
              competitive world ahead and encourages students to build a healthy spirit of
              competition.
            </p>
            <p>
              Under the canopy of the school motto, "dedicated to excellence," the staff and
              the management of K.I.S. endeavour, students not only excel in academics but
              gives opportunities in different fields besides academics K.I.S. also imbue them
              with social awareness, pride in their rich cultural heritage and sense of
              responsibility towards the nation.
            </p>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}