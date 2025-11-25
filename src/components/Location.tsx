import { MapPin, Phone, Mail, Navigation, Car, Bus } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block mb-6 px-5 py-2 bg-amber-50 text-amber-700 rounded-full text-sm tracking-wider border border-amber-100" data-aos="fade-up">
            VENUE LOCATION
          </div>
          <h2 className="text-blue-950 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4" data-aos="fade-up" data-aos-delay="100">
            Find Us
            <span className="block mt-2 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Here
            </span>
          </h2>
          <p className="text-blue-900/70 max-w-2xl mx-auto text-base md:text-lg px-4" data-aos="fade-up" data-aos-delay="200">
            Join us at our convenient location in Lekki Phase 1, Lagos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden border-2 border-amber-200 shadow-2xl h-[350px] md:h-[500px]" data-aos="fade-in" data-aos-delay="300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7391825087755!2d3.4445!3d6.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnNTAuNiJOIDPCsDI2JzQwLjIiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Venue location map"
            />
          </div>

          {/* Venue Details */}
          <div className="space-y-5 md:space-y-6">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-blue-100" data-aos="slide-up" data-aos-delay="400">
              <h3 className="text-blue-950 mb-6 md:mb-8 text-2xl md:text-3xl">Streams of Life Nation</h3>
              
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="size-5 md:size-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-950 mb-1 md:mb-2 text-base md:text-lg">Address</p>
                    <p className="text-blue-900/70 leading-relaxed text-sm md:text-base">
                      Alhaji Sunmonu Street<br />
                      Lekki Phase 1<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="size-5 md:size-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-950 mb-1 md:mb-2 text-base md:text-lg">Phone / WhatsApp</p>
                    <a 
                      href="tel:+2348103070734"
                      className="text-blue-900/70 hover:text-amber-600 transition-colors text-base md:text-lg"
                    >
                      +234 810 307 0734
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="size-5 md:size-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-blue-950 mb-1 md:mb-2 text-base md:text-lg">Email</p>
                    <a 
                      href="mailto:Streamsoflifeworldwide@gmail.com"
                      className="text-blue-900/70 hover:text-amber-600 transition-colors break-all text-sm md:text-base"
                    >
                      Streamsoflifeworldwide@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting There */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <Navigation className="size-6 md:size-7 text-amber-400 flex-shrink-0" />
                <h3 className="text-white text-xl md:text-2xl">Getting There</h3>
              </div>
              
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3 md:gap-4">
                  <Car className="size-5 md:size-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white mb-1 md:mb-2 text-base md:text-lg">By Car</p>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base">
                      Free parking available on-site. Navigate to Alhaji Sunmonu Street, 
                      Lekki Phase 1 using Google Maps or Waze.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <Bus className="size-5 md:size-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white mb-1 md:mb-2 text-base md:text-lg">By Public Transport</p>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base">
                      Take any bus to Lekki Phase 1 and ask for Alhaji Sunmonu Street. 
                      The venue is easily accessible from major bus stops.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-6 md:p-8 border-2 border-amber-200">
              <h4 className="text-blue-950 mb-2 md:mb-3 text-lg md:text-xl">Need Directions?</h4>
              <p className="text-blue-900/70 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                Can't find us? Call or WhatsApp for assistance getting to the venue. 
                We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+2348103070734"
                  className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg text-sm md:text-base"
                >
                  <Phone className="size-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/2348103070734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all shadow-lg text-sm md:text-base"
                >
                  <Phone className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}