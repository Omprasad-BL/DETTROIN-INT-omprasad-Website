// src/App.jsx
import RootLayout from './components/layout/RootLayout';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Features from './components/sections/Features';


function App() {
  return (
    <RootLayout>
      {/* 
        All sections are inside RootLayout's <main> container.
        This guarantees they never stretch beyond max-w-7xl on ultrawide monitors.
      */}
      <Hero />
      <Stats />
      <About />
      <Features />
    </RootLayout>
  );
}

export default App;