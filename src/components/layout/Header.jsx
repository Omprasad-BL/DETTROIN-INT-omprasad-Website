import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Play } from 'lucide-react';
import Sample from '../../assets/klogo.png'; // Importing the sample image for the hover cards
import logo2 from '../../assets/Kl2logo.png'
const navigation = [
  { name: 'ABOUT KIS', href: '#about', sub: ['Overview', 'Leadership', 'Vision & Mission', 'Infrastructure'] },
  { name: 'ADMISSION', href: '#admission', sub: ['Overview', 'Fee Payment', 'Enroll', 'Transfer Certificate'] },
  { name: 'ACADEMICS', href: '#academics', sub: ['Curriculum', 'Faculty', 'Timetable', 'Results'] },
  { name: 'CO-CURRICULAR', href: '#co-curricular', sub: ['Sports', 'Arts & Music', 'Clubs', 'Competitions'] },
  // { name: 'SCHOOL EVENTS', href: '#events', sub: ['Calendar', 'Annual Day', 'Sports Meet', 'Exhibitions'] },
  { name: 'SCHOOL PORTAL', href: '#portal', sub: ['Student Login', 'Parent Login', 'Staff Login'] },
  { name: 'GALLERY', href: '#gallery', sub: ['Photos', 'Videos', 'Press'] },
  { name: 'JOIN US', href: '#join', sub: ['Careers', 'Contact', 'Alumni'] },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for the 2-column mobile overlay menu (defaults to the first item)
  const [activeOverlayMenu, setActiveOverlayMenu] = useState(navigation[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when overlay is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 px-2 right-0 mx-auto w-full max-w-[1600px] z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#050810]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="px-4 2xl:px-0">
          <div className="flex items-center justify-between">
            
            {/* 1. FREE FLEXIBLE LOGO (No width compression) */}
            <a href="/" className="flex items-center shrink-0 z-50">
              <img 
                src={Sample}
                alt="Krishna International School" 
                // shrink-0 prevents flexbox from squeezing the logo, w-auto keeps aspect ratio
                className="h-10 md:h-14 w-auto object-contain shrink-0 drop-shadow-md" 
                onError={(e) => {
                  // Fallback if image is missing so the layout doesn't break
                  e.target.onerror = null; 
                  e.target.outerHTML = '<span class="text-2xl font-serif font-bold text-white tracking-widest shrink-0">KRISHNA<span class="text-emerald-400">.</span></span>';
                }}
              />
              <img 
                src={logo2}
                alt="Krishna International School" 
                // shrink-0 prevents flexbox from squeezing the logo, w-auto keeps aspect ratio
                className="h-10 md:h-14 w-auto object-contain shrink-0 drop-shadow-md" 
                onError={(e) => {
                  // Fallback if image is missing so the layout doesn't break
                  e.target.onerror = null; 
                  e.target.outerHTML = '<span class="text-2xl font-serif font-bold text-white tracking-widest shrink-0">KRISHNA<span class="text-emerald-400">.</span></span>';
                }}
              />
            </a>

            {/* 2. DESKTOP NAVIGATION (Hidden on standard lg, shown on xl) */}
            <nav className="hidden xl:flex items-center justify-center gap-1 2xl:gap-3 flex-grow ml-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  
                  {/* Main Nav Item with Pill Hover */}
                  <a 
                    href={item.href} 
                    className="relative flex items-center gap-1 px-3 2xl:px-4 py-2 text-[12px] 2xl:text-[13px] font-semibold text-slate-200 uppercase tracking-widest cursor-pointer transition-colors z-10 group-hover:text-white"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <ChevronDown size={14} className="relative z-10 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                    
                    {/* The Tablet/Pill Animated Background */}
                    <div className="absolute inset-0 bg-white/10 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out z-0" />
                  </a>

                  {/* Dropdown Sublist (Glassmorphic) */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    {/* The connector invisible bridge to prevent hover loss */}
                    <div className="absolute -top-4 left-0 w-full h-4" />
                    
                    <div className="min-w-[220px] bg-[#0a0f1a]/85 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                      {/* Green Dropdown Header */}
                      <h4 className="px-3 pt-1 pb-2 text-[11px] font-bold text-emerald-400 uppercase tracking-widest border-b border-white/10 mb-2">
                        {item.name}
                      </h4>
                      
                      <ul className="flex flex-col gap-1">
                        {item.sub.map((subItem, idx) => (
                          <li key={idx}>
                            <a 
                              href="#" 
                              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              ))}
            </nav>

            {/* 3. CTA & MOBILE TOGGLE */}
            <div className="flex items-center gap-4 shrink-0 z-50">
              <a 
                href="#enroll" 
                className="hidden md:flex px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold rounded-full transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                Enroll Now
              </a>
              
              {/* Hamburger Toggle (Visible when desktop nav is hidden) */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 4. REFERENCE IMAGE OVERLAY MENU (For Tablet/Mobile & Standard Lg screens) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050810]/95 backdrop-blur-2xl overflow-y-auto"
          >
            {/* Close Button strictly mapped to top-right exactly like the reference */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-emerald-400 hover:text-white transition-colors"
            >
              <X size={40} strokeWidth={1.5} />
            </button>

            <div className="min-h-screen flex flex-col md:flex-row items-center justify-center max-w-[1200px] mx-auto px-6 py-24 gap-12 md:gap-24">
              
              {/* Left Column: Main Navigation Categories */}
              <div className="w-full md:w-1/2 flex flex-col items-start md:items-end gap-6 md:gap-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onMouseEnter={() => setActiveOverlayMenu(item)}
                    onClick={() => setActiveOverlayMenu(item)}
                    className="group relative flex items-center gap-4 text-left"
                  >
                    <span className={`text-xl md:text-2xl font-light tracking-wider transition-colors duration-300 ${
                      activeOverlayMenu.name === item.name ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* The small green active triangle indicator */}
                    <Play 
                      size={14} 
                      fill="currentColor"
                      className={`text-emerald-400 transition-opacity duration-300 ${
                        activeOverlayMenu.name === item.name ? 'opacity-100' : 'opacity-0'
                      }`} 
                    />
                  </button>
                ))}
              </div>

              {/* Thin Vertical Divider Line */}
              <div className="hidden md:block w-px h-[60vh] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              
              {/* Mobile Horizontal Divider */}
              <div className="md:hidden w-full h-px bg-white/10 my-4" />

              {/* Right Column: Dynamic Sub-menus for the Active Category */}
              <div className="w-full md:w-1/2 flex flex-col items-start min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeOverlayMenu.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Category Title in Green */}
                    <h3 className="text-3xl md:text-4xl font-bold text-emerald-400 tracking-wide mb-4">
                      {activeOverlayMenu.name}
                    </h3>
                    
                    {/* Sublinks */}
                    {activeOverlayMenu.sub.map((subLink, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg md:text-xl font-light text-slate-300 hover:text-white transition-colors cursor-pointer block"
                      >
                        {subLink}
                      </a>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}