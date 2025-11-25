import { Video, Youtube, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WatchLive() {
  return (
    <section id="watch" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625325994084-0ac660cdeeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYWdsZSUyMGZsaWdodCUyMGNsb3Vkc3xlbnwxfHx8fDE3NjM5OTgwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-12">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-3xl mb-6 md:mb-8 shadow-2xl" data-aos="zoom-in">
            <Youtube className="size-8 md:size-10 text-white" />
          </div>

          <h2 className="text-white mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight px-4" data-aos="fade-up" data-aos-delay="100">
            Watch Live on
            <span className="block mt-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              YouTube
            </span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg mb-10 md:mb-12 leading-relaxed px-4" data-aos="fade-up" data-aos-delay="200">
            Can't join us in person? Experience the convention live from anywhere in the world. 
            Stream both nights directly on our YouTube channel.
          </p>

          {/* Video Placeholder */}
          <div className="relative mb-10 md:mb-12 rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/10" data-aos="fade-up" data-aos-delay="300">
            <div className="aspect-video bg-gradient-to-br from-blue-800 to-blue-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667068114532-97a1ce6d0a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWR8ZW58MXx8fHwxNjM5MTg3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Live stream preview"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://www.youtube.com/results?search_query=chris+igboko"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition-all cursor-pointer group hover:scale-110"
              >
                <Video className="size-10 md:size-12 text-white ml-2 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Live Badge */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-red-600 rounded-full shadow-lg">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse" />
              <span className="text-white text-xs md:text-sm tracking-wider">LIVE STREAMING</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.youtube.com/results?search_query=chris+igboko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-red-600 text-white hover:bg-red-700 transition-all rounded-full shadow-2xl text-base md:text-lg group"
            data-aos="slide-up"
            data-aos-delay="400"
          >
            <Youtube className="size-5 md:size-6" />
            <span>Visit YouTube Channel</span>
            <ExternalLink className="size-4 md:size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Stream Info Cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20" data-aos="fade-right" data-aos-delay="500">
            <h3 className="text-white mb-2 md:mb-3 text-lg md:text-xl">Day 1 - November 29</h3>
            <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base">Saturday, 6:00 PM WAT</p>
            <p className="text-white/60 text-xs md:text-sm">
              Opening night with powerful worship and teaching on "Who Is Jesus Christ?"
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20" data-aos="fade-left" data-aos-delay="600">
            <h3 className="text-white mb-2 md:mb-3 text-lg md:text-xl">Day 2 - November 30</h3>
            <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base">Sunday, 6:00 PM WAT</p>
            <p className="text-white/60 text-xs md:text-sm">
              Closing night featuring guest ministers and healing service
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-10 md:mt-12 text-center px-4">
          <p className="text-white/60 text-xs md:text-sm">
            Set a reminder on YouTube so you don't miss the live stream. 
            Replays will be available after each session.
          </p>
        </div>
      </div>
    </section>
  );
}