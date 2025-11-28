import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Speakers } from './components/Speakers';
import { Schedule } from './components/Schedule';
import { WatchLive } from './components/WatchLive';
import Media from './components/Media';
import { Registration } from './components/Registration';
import { Donate } from './components/Donate';
import { Location } from './components/Location';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useEffect } from 'react';
import faviconImage from 'figma:asset/b3fae9dc2ba60a8cd2341e189ad799fb6b397d8a.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    // Set page title
    document.title = 'Soaring Eagles Convention 2025';
    
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImage;
    document.getElementsByTagName('head')[0].appendChild(link);

    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <WatchLive />
      <Media />
      <Registration />
      <Donate />
      <Location />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </div>
  );
}