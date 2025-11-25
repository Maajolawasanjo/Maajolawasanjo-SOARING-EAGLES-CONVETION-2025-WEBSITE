import { Calendar, MapPin, ArrowRight, Video } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-11-29T18:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Eagle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1659651259903-381afc80c4d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYWdsZSUyMHNvYXJpbmclMjBza3l8ZW58MXx8fHwxNzYzOTk4MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/90 to-blue-950/95" />
      </div>
      
      {/* Subtle Sky Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1748891993061-184863d04abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2t5JTIwY2xvdWRzJTIwbGlnaHR8ZW58MXx8fHwxNzYzOTk4MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      {/* Golden Light Rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-amber-400/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-20">
        {/* Soaring Eagle Icon */}
        <div className="mb-6 md:mb-8 flex justify-center" data-aos="zoom-in" data-aos-duration="800">
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full absolute inset-0 blur-xl animate-pulse" />
            <svg className="w-16 h-16 md:w-20 md:h-20 text-amber-400 relative" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L3 9v2l9-3 9 3V9l-9-7zm0 8l-9 3v6c0 1.66 3.58 3 9 3s9-1.34 9-3v-6l-9-3z"/>
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-block mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-amber-400/30 shadow-2xl" data-aos="fade-in" data-aos-delay="100">
          <span className="text-amber-300 tracking-widest text-xs md:text-sm">TWO NIGHTS OF DIVINE ENCOUNTER</span>
        </div>
        
        {/* Main Title with Eagle Theme */}
        <h1 className="text-white mb-4 md:mb-6 tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-none px-4" data-aos="fade-up" data-aos-delay="200">
          Soaring Eagles
          <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Convention 2025
          </span>
        </h1>
        
        {/* Theme with elegant styling */}
        <div className="mb-10 md:mb-12 mt-8 md:mt-10 px-4" data-aos="fade-in" data-aos-delay="300">
          <div className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Theme:</p>
            <p className="text-white text-2xl sm:text-3xl md:text-4xl italic bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
              "I AM JESUS CHRIST"
            </p>
          </div>
        </div>
        
        {/* Event Details - Minimalistic */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-10 md:mb-14 px-4" data-aos="fade-up" data-aos-delay="400">
          <div className="flex items-center gap-3 text-white/90 text-base md:text-lg">
            <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Calendar className="size-5 text-amber-400" />
            </div>
            <span className="text-sm sm:text-base md:text-lg">Sat-Sun, Nov 29-30, 2025 • 6:00 PM</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20" />
          <div className="flex items-center gap-3 text-white/90 text-base md:text-lg">
            <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="size-5 text-amber-400" />
            </div>
            <span className="text-sm sm:text-base md:text-lg">Lekki Phase 1, Lagos</span>
          </div>
        </div>
        
        {/* CTAs - Modern & Clean */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-12 md:mb-16 px-4" data-aos="fade-up" data-aos-delay="500">
          <a
            href="#donate"
            className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all rounded-full flex items-center justify-center gap-3 shadow-2xl text-base md:text-lg"
          >
            Register Free
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#watch"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/10 text-white hover:bg-white/20 transition-all rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center gap-3 shadow-xl text-base md:text-lg"
          >
            <Video className="size-5" />
            Watch Live
          </a>
        </div>

        {/* Countdown Timer - Elegant */}
        {timeLeft.days > 0 && (
          <div className="inline-block px-4" data-aos="fade-up" data-aos-delay="600">
            <p className="text-white/50 text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6">Event Begins In</p>
            <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, idx) => (
                <div key={item.label} className="text-center" data-aos="zoom-in" data-aos-delay={700 + idx * 50}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center mb-2 md:mb-3">
                    <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs uppercase tracking-widest">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
