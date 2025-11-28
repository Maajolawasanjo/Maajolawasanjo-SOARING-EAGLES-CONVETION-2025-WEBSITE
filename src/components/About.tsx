import { Heart, Users, BookOpen, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Worship',
    description: 'Powerful worship sessions that usher in God\'s presence.'
  },
  {
    icon: BookOpen,
    title: 'Teaching',
    description: 'Life-transforming biblical teachings and revelations.'
  },
  {
    icon: Sparkles,
    title: 'Healing',
    description: 'Miraculous healings through the power of the Holy Spirit.'
  },
  {
    icon: Users,
    title: 'Fellowship',
    description: 'Connect with believers and grow together in faith.'
  }
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-block mb-6 px-5 py-2 bg-amber-50 text-amber-700 rounded-full text-xs sm:text-sm tracking-wider border border-amber-100" data-aos="fade-up">
            ABOUT THE CONVENTION
          </div>
          <h2 className="text-blue-950 mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 leading-tight" data-aos="fade-up" data-aos-delay="100">
            Two Nights of
            <span className="block mt-2 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Divine Encounter
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-6 text-blue-900/70 text-[15px] sm:text-base md:text-lg leading-relaxed px-4">
            <p data-aos="fade-right" data-aos-delay="200" className="leading-[1.7]">
              The Soaring Eagles Convention 2025 is a powerful Christian gathering under the 
              theme <strong className="text-blue-950">"I AM JESUS CHRIST"</strong>, exploring 
              the profound identity and lordship of our Savior.
            </p>
            <p data-aos="fade-left" data-aos-delay="300" className="leading-[1.7]">
              Led by <strong className="text-blue-950">Apostle Chris Igboko</strong> of 
              <strong className="text-blue-950"> Streams of Life Nation</strong>, experience 
              two transformative nights of worship, prayer, powerful teachings, and supernatural ministry.
            </p>
          </div>
        </div>

        {/* Features - Minimalistic Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-50/50 to-transparent hover:from-blue-50 hover:to-amber-50/30 transition-all duration-300 border border-transparent hover:border-amber-200"
              data-aos="fade-up"
              data-aos-delay={400 + idx * 100}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <feature.icon className="size-7 md:size-8 text-white" />
              </div>
              <h3 className="text-blue-950 mb-2 md:mb-3 text-base md:text-xl">{feature.title}</h3>
              <p className="text-blue-900/60 leading-relaxed text-[14px] md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Event is Free Badge */}
        <div className="mt-12 md:mt-16 text-center px-4" data-aos="zoom-in" data-aos-delay="800">
          <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-blue-950 to-blue-900 text-white rounded-full shadow-2xl text-sm md:text-lg">
            <Heart className="size-5 text-amber-400 flex-shrink-0" />
            <span>Completely Free • All Are Welcome</span>
          </div>
        </div>
      </div>
    </section>
  );
}