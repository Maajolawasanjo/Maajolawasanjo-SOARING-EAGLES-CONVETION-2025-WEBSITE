import { ArrowRight, Video, Gift } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1659651259903-381afc80c4d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYWdsZSUyMHNvYXJpbmclMjBza3l8ZW58MXx8fHwxNzYzOTk4MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center" />
      </div>

      {/* Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/20 blur-[150px] rounded-full" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Eagle Icon */}
        <div className="mb-8 md:mb-10 flex justify-center" data-aos="zoom-in">
          <svg className="w-14 h-14 md:w-16 md:h-16 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 9v2l9-3 9 3V9l-9-7zm0 8l-9 3v6c0 1.66 3.58 3 9 3s9-1.34 9-3v-6l-9-3z"/>
          </svg>
        </div>

        <h2 className="text-white mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight px-4" data-aos="fade-up" data-aos-delay="100">
          Don't Miss This
          <span className="block mt-2 bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
            Divine Encounter
          </span>
        </h2>
        
        <p className="text-white/80 text-base md:text-xl mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed px-4" data-aos="fade-up" data-aos-delay="200">
          Join us for two transformative nights of worship, powerful teachings, and 
          supernatural ministry. Your life will never remain the same.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10 px-4" data-aos="zoom-in" data-aos-delay="300">
          <a
            href="#register"
            className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all rounded-full flex items-center justify-center gap-3 shadow-2xl text-base md:text-lg"
          >
            Register Now - Free
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#watch"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/10 text-white hover:bg-white/20 transition-all rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center gap-3 shadow-xl text-base md:text-lg"
          >
            <Video className="size-5" />
            Watch Live
          </a>
          <a
            href="#donate"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/10 text-white hover:bg-white/20 transition-all rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center gap-3 shadow-xl text-base md:text-lg"
          >
            <Gift className="size-5" />
            Donate
          </a>
        </div>

        {/* Event Details */}
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/20 mx-4" data-aos="fade-up" data-aos-delay="400">
          <p className="text-white/90 text-base md:text-lg">
            <span className="text-amber-400">Saturday-Sunday, November 29-30, 2025</span> • 6:00 PM Daily
          </p>
          <p className="text-white/70 mt-2 text-sm md:text-base">
            Alhaji Sunmonu Street, Lekki Phase 1, Lagos
          </p>
        </div>
      </div>
    </section>
  );
}