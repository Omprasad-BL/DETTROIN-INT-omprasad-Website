// src/components/layout/RootLayout.jsx
import Header from './Header';
import Footer from './Footer'

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
      {/* Header stays inside the body but outside <main> */}
      <Header />
      
      {/* Main content area */}
        <main className="relative flex flex-col w-full mx-auto max-w-[1600px] px-4 2xl:px-0 overflow-hidden">
               {children}
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}