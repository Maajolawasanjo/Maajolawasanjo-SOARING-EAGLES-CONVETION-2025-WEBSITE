import { ImageWithFallback } from './figma/ImageWithFallback';
import apostleChrisImage from 'figma:asset/66b43083434ef8db2c76347c265668fc4b0937bc.png';
import pastorKingsleyImage from 'figma:asset/5885ee870dff9511bb4509f52cfdae12d18e10c2.png';
import pastorEmmanuelImage from 'figma:asset/665fa473951e10ccdb24fc94490e2d09013fa7f4.png';
import apostlePreciousImage from 'figma:asset/da6504cef567754f6495ff53fd425758116df62a.png';

const speakers = [
  {
    name: 'Apostle Chris Igboko',
    role: 'Lead Pastor & Convener',
    church: 'Streams of Life Nation, Lagos',
    image: apostleChrisImage,
    bio: 'A passionate apostle with a heart for souls, leading Streams of Life Nation with a vision to raise believers who walk in divine purpose.',
    featured: true
  },
  {
    name: 'Pastor Kingsley Oni',
    role: 'Guest Minister',
    church: 'Streams of Life Nation',
    image: pastorKingsleyImage,
    bio: 'Dynamic teacher with a special anointing for revival and awakening in the body of Christ.',
    featured: false
  },
  {
    name: 'Pastor Emmanuel Timothy',
    role: 'Guest Minister',
    church: 'Streams of Life Nation',
    image: pastorEmmanuelImage,
    bio: 'Anointed minister leading believers into deeper intimacy with God through prayer and worship.',
    featured: false
  },
  {
    name: 'Apostle Precious Ezeobi',
    role: 'Guest Minister',
    church: 'Streams of Life Nation',
    image: apostlePreciousImage,
    bio: 'Powerful evangelist with signs and wonders, passionate about soul-winning and discipleship.',
    featured: false
  }
];

export function Speakers() {
  const mainSpeaker = speakers[0];
  const guestSpeakers = speakers.slice(1);

  return (
    <section id="speakers" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block mb-6 px-5 py-2 bg-amber-50 text-amber-700 rounded-full text-sm tracking-wider border border-amber-100" data-aos="fade-up">
            OUR SPEAKERS
          </div>
          <h2 className="text-blue-950 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4" data-aos="fade-up" data-aos-delay="100">
            Anointed
            <span className="block mt-2 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Ministers of God
            </span>
          </h2>
          <p className="text-blue-900/70 max-w-2xl mx-auto text-base md:text-lg px-4" data-aos="fade-up" data-aos-delay="200">
            Powerful men and women of God bringing fresh revelation and spiritual impartation
          </p>
        </div>

        {/* Main Speaker - Apostle Chris Igboko */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16" data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 aspect-[3/4] md:aspect-auto overflow-hidden bg-blue-100">
                <ImageWithFallback
                  src={mainSpeaker.image}
                  alt={mainSpeaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block mb-4 md:mb-5 px-4 md:px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-xs md:text-sm w-fit shadow-lg">
                  Main Speaker & Convener
                </div>
                <h3 className="text-blue-950 mb-2 md:mb-3 text-2xl md:text-4xl">{mainSpeaker.name}</h3>
                <p className="text-amber-600 mb-1 md:mb-2 text-base md:text-lg">{mainSpeaker.role}</p>
                <p className="text-blue-900/60 mb-6 md:mb-8 text-sm md:text-base">{mainSpeaker.church}</p>
                
                <p className="text-blue-900/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {mainSpeaker.bio}
                </p>
                
                <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Guest Speakers */}
        <div>
          <h3 className="text-center text-blue-950 mb-10 md:mb-12 text-2xl md:text-3xl px-4" data-aos="fade-up">Guest Ministers</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {guestSpeakers.map((speaker, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-blue-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={400 + idx * 100}
              >
                <div className="aspect-[4/5] overflow-hidden bg-blue-50">
                  <ImageWithFallback
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 md:p-8">
                  <h4 className="text-blue-950 mb-2 text-lg md:text-xl">{speaker.name}</h4>
                  <p className="text-amber-600 text-sm mb-2">{speaker.role}</p>
                  <p className="text-blue-900/50 text-sm mb-4 md:mb-5">{speaker.church}</p>
                  
                  <p className="text-blue-900/70 leading-relaxed text-sm md:text-base">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}