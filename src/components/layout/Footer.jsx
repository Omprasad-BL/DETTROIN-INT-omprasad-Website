// src/components/layout/Footer.jsx
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { SiYoutube, SiFacebook, SiInstagram } from '@icons-pack/react-simple-icons';
import qr1 from '../../assets/androidqr.png'
import qr2 from '../../assets/macqr.png'
import logo2 from '../../assets/Kl2logo.png'
import klqr from '../../assets/klqr.png'


// Using a standard config object outside the component to keep JSX clean
const footerLinks = {
  "ABOUT KIS": ["Overview", "School Features", "Chairman's Message", "Principal's Message", "Quintessential Campus", "Why Krishna International?", "Recognition and Award"],
  "ADMISSION": ["Overview", "Fee Payment", "Fee Structure", "Withdrawals"],
  "ACADEMICS": ["Overview", "Academic Structure", "Student Teacher Partnership", "Curriculum", "Subjects", "Teaching Staff", "Roll of Honour", "Future Guidance"],
  "CO-CURRICULAR": ["Overview", "Sports and Life Skills", "Performing Arts", "Fine Arts", "Excursions And Trips", "Events", "Community Engagement"],
  "SCHOOL EVENTS": ["Recent", "Upcoming"],
  "JOIN US": ["Vacancy", "Online Student", "Registration", "School App"]
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    // <footer className="max-w-7xl mx-auto w-full bg-[#0f141e] border-t border-slate-800 pt-16 relative">
    <footer className="max-w-[1600px] mx-auto w-full bg-[#0f141e] border-t border-slate-800 pt-16 relative">
      {/* Max-width container matches our RootLayout constraint */}
      <div className=" px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Branding & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 pb-8 border-b border-slate-800">
          
          {/* Logo & Address */}
          <div className="flex items-center gap-6">
            <img src={logo2} alt="KIS Shield" className="w-24 h-auto" />
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <p>KRISHNA INTERNATIONAL SCHOOL<br/>Delhi G.T. Road, Aligarh-202001<br/>(U.P.) INDIA</p>
              </div>
              <a href="#" className="text-emerald-400 font-medium hover:underline block ml-7">
                - View Direction
              </a>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4 text-slate-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400"/> +(91) 983-70-50000
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400"/> +(91) 735-10-50000
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400"/> info@kisaligarh.com
            </div>
            
            {/* Social Icons Updated to Simple Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-[#FF0000] rounded-full hover:bg-red-600 transition-colors" aria-label="YouTube">
                <SiYoutube className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 bg-[#1877F2] rounded-full hover:bg-blue-600 transition-colors" aria-label="Facebook">
                <SiFacebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 bg-[#E4405F] rounded-full hover:bg-pink-600 transition-colors" aria-label="Instagram">
                <SiInstagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* QR Code */}
          <div className="hidden lg:block bg-white p-2 rounded-lg">
            <img src={klqr} alt="Scan to download" className="w-32 h-32" />
          </div>
        </div>

        {/* Middle Section: Navigation Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h5 className="text-white font-semibold mb-6 tracking-wide relative inline-block">
                {category}
                <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-emerald-500"></span>
              </h5>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Special condition for "Join Us" column to include App Links */}
              {category === "JOIN US" && (
                <div className="mt-8 flex gap-4">
                  <div className="text-center">
                    <img src={qr2} alt="Android" className="w-16 h-16 bg-white p-1 rounded" />
                    <span className="text-xs text-slate-400 mt-2 block">Android</span>
                  </div>
                  <div className="text-center">
                    <img src={qr1} alt="iOS" className="w-16 h-16 bg-white p-1 rounded" />
                    <span className="text-xs text-slate-400 mt-2 block">iOS</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black py-4 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-emerald-400 font-semibold tracking-wider">
            KRISHNA INTERNATIONAL SCHOOL © 2026
          </p>
        </div>
        {/* Floating Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-8 bottom-4 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-emerald-400 hover:bg-slate-700 transition-colors border border-slate-600"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}