import { Play, Image as ImageIcon, Calendar, ExternalLink, Facebook, Instagram, Youtube, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import Slider from 'react-slick';

const mediaContent = [
  {
    type: 'video',
    title: 'Soaring Eagles 2024 Highlights',
    date: 'December 2024',
    thumbnail: 'https://images.unsplash.com/photo-1642307063044-b47294fbfe87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBnYXRoZXJpbmclMjB3b3JzaGlwfGVufDF8fHx8MTc2Mzk5NzQyMHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    type: 'image',
    title: 'Worship & Praise Session',
    date: 'November 2024',
    thumbnail: 'https://images.unsplash.com/photo-1667068114532-97a1ce6d0a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWR8ZW58MXx8fHwxNjM5MTg3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    type: 'image',
    title: 'Fellowship & Community',
    date: 'November 2024',
    thumbnail: 'https://images.unsplash.com/photo-1551327420-4b280d52cc68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBmZWxsb3dzaGlwfGVufDF8fHx8MTc2Mzk5NzQyMHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    type: 'video',
    title: 'Powerful Ministry Moments',
    date: 'October 2024',
    thumbnail: 'https://images.unsplash.com/photo-1721523362544-7a9fc6876f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBzcGlyaXR1YWwlMjBsaWdodxlbnwxfHx8fDE3NjM5OTc0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    type: 'image',
    title: 'Past Convention Memories',
    date: 'September 2024',
    thumbnail: 'https://images.unsplash.com/photo-1759419048791-80d13700e15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwc2t5JTIwc3Vuc2V0JTIwd29yc2hpcHxlbnwxfHx8fDE3NjM5OTgwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    type: 'video',
    title: 'Testimonies & Miracles',
    date: 'August 2024',
    thumbnail: 'https://images.unsplash.com/photo-1625325994084-0ac660cdeeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYWdsZSUyMGZsaWdodCUyMGNsb3Vkc3xlbnwxfHx8fDE3NjM5OTgwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const updates = [
  {
    date: 'November 20, 2025',
    title: 'Registration Now Open!',
    description: 'Secure your spot for Soaring Eagles Convention 2025. Register now to receive event updates and reminders.',
    badge: 'New'
  },
  {
    date: 'November 15, 2025',
    title: 'Guest Speakers Announced',
    description: 'We\'re excited to announce our powerful lineup of guest ministers joining Apostle Chris Igboko.',
    badge: null
  },
  {
    date: 'November 10, 2025',
    title: 'Live Streaming Confirmed',
    description: 'Can\'t make it in person? Join us online via YouTube for both nights of powerful ministry.',
    badge: null
  }
];

const socialFeed = [
  { 
    platform: 'Facebook', 
    handle: '@ApostleChrisIgboko', 
    color: 'text-blue-400',
    bgColor: 'bg-blue-600',
    icon: Facebook,
    url: 'https://www.facebook.com/ApostleChrisIgboko'
  },
  { 
    platform: 'Instagram', 
    handle: '@apostle_chrisigboko', 
    color: 'text-pink-400',
    bgColor: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500',
    icon: Instagram,
    url: 'https://www.instagram.com/apostle_chrisigboko/'
  },
  { 
    platform: 'YouTube', 
    handle: 'Chris Igboko', 
    color: 'text-red-400',
    bgColor: 'bg-red-600',
    icon: Youtube,
    url: 'https://www.youtube.com/results?search_query=chris+igboko'
  }
];

export function Media() {
  const [activeTab, setActiveTab] = useState<'media' | 'updates'>('media');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState<{ type: string; src: string; title: string } | null>(null);

  // Custom arrow components for the slider
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 group border border-blue-100"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5 md:size-6 text-blue-950/70 group-hover:text-amber-600 transition-colors" strokeWidth={1.5} />
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 group border border-blue-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5 md:size-6 text-blue-950/70 group-hover:text-amber-600 transition-colors" strokeWidth={1.5} />
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
          arrows: false,
        }
      }
    ],
    appendDots: (dots: any) => (
      <div className="mt-12 md:mt-16">
        <ul className="flex items-center justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-2.5 h-2.5 bg-white/30 hover:bg-amber-400 rounded-full transition-all duration-300" aria-label="Go to slide" />
    ),
  };

  const openLightbox = (item: typeof mediaContent[0]) => {
    setLightboxContent({
      type: item.type,
      src: item.thumbnail,
      title: item.title
    });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setLightboxContent(null), 300);
  };

  return (
    <section id="media" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block mb-6 px-5 py-2 bg-amber-50 text-amber-700 rounded-full text-sm tracking-wider border border-amber-100" data-aos="fade-up">
            MEDIA & UPDATES
          </div>
          <h2 className="text-blue-950 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4" data-aos="fade-up" data-aos-delay="100">
            Stay
            <span className="block mt-2 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Connected
            </span>
          </h2>
          <p className="text-blue-900/70 max-w-2xl mx-auto text-base md:text-lg px-4" data-aos="fade-up" data-aos-delay="200">
            Browse highlights from previous events and stay updated with the latest news
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-12 px-4" data-aos="fade-in" data-aos-delay="300">
          <div className="inline-flex bg-white rounded-full p-1.5 md:p-2 border-2 border-blue-100 shadow-lg w-full max-w-md">
            <button
              onClick={() => setActiveTab('media')}
              className={`flex-1 px-6 md:px-10 py-3 md:py-4 rounded-full transition-all text-sm md:text-lg ${
                activeTab === 'media'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                  : 'text-blue-900 hover:text-amber-600'
              }`}
            >
              Media Gallery
            </button>
            <button
              onClick={() => setActiveTab('updates')}
              className={`flex-1 px-6 md:px-10 py-3 md:py-4 rounded-full transition-all text-sm md:text-lg ${
                activeTab === 'updates'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                  : 'text-blue-900 hover:text-amber-600'
              }`}
            >
              Latest Updates
            </button>
          </div>
        </div>

        {/* Media Gallery Tab */}
        {activeTab === 'media' && (
          <div>
            {/* Swipeable Carousel - Full Width */}
            <div className="mb-10 md:mb-12 relative -mx-4 md:-mx-8 lg:-mx-12 py-12 md:py-20 lg:py-28 min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
              <Slider {...sliderSettings} className="media-slider relative z-10">
                {mediaContent.map((item, idx) => (
                  <div key={idx}>
                    <div 
                      onClick={() => openLightbox(item)}
                      className="relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
                    >
                      <div className="relative h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden bg-blue-950">
                        <ImageWithFallback
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Play/Image icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {item.type === 'video' ? (
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                              <Play className="size-7 md:size-9 text-white ml-1" fill="white" />
                            </div>
                          ) : (
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                              <ImageIcon className="size-7 md:size-9 text-blue-950" />
                            </div>
                          )}
                        </div>
                        
                        {/* Bottom overlay with title and description */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                          <h3 className="text-white mb-2 text-xl md:text-2xl lg:text-4xl">{item.title}</h3>
                          <p className="text-white/80 text-sm md:text-base lg:text-lg">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Swipe Hint for Mobile */}
            <div className="text-center mb-10 md:mb-12 sm:hidden">
              <p className="text-blue-900/50 text-sm flex items-center justify-center gap-2">
                <span>👆 Swipe to explore more</span>
              </p>
            </div>

            {/* Social Media Feed */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-center mb-2 text-2xl md:text-3xl">Follow Us on Social Media</h3>
              <p className="text-center text-white/70 mb-8 md:mb-10 text-base md:text-lg">#SoaringEagles2025</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {socialFeed.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 md:p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 group"
                    data-aos="fade-up"
                    data-aos-delay={500 + idx * 100}
                  >
                    <div className={`w-12 h-12 ${social.bgColor} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <social.icon className="size-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white mb-1 text-base md:text-lg">{social.platform}</p>
                      <p className="text-white/70 text-xs md:text-sm truncate">{social.handle}</p>
                    </div>
                    <ExternalLink className="size-5 text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Updates Tab */}
        {activeTab === 'updates' && (
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-6">
            {updates.map((update, idx) => (
              <div
                key={idx}
                className="bg-white p-6 md:p-8 rounded-3xl border-2 border-blue-100 hover:border-amber-200 hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-start gap-4 md:gap-5 flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="size-5 md:size-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3 flex-col sm:flex-row gap-2">
                      <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                        <h3 className="text-blue-950 text-lg md:text-xl">{update.title}</h3>
                        {update.badge && (
                          <span className="px-2 md:px-3 py-1 bg-amber-500 text-white text-xs rounded-full flex-shrink-0">
                            {update.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-blue-900/50 text-xs md:text-sm whitespace-nowrap">
                        {update.date}
                      </span>
                    </div>
                    <p className="text-blue-900/70 leading-relaxed text-sm md:text-base">{update.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && lightboxContent && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-4xl w-full h-full">
            {lightboxContent.type === 'video' ? (
              <video
                src={lightboxContent.src}
                controls
                className="w-full h-full object-contain"
                autoPlay
                muted
              />
            ) : (
              <ImageWithFallback
                src={lightboxContent.src}
                alt={lightboxContent.title}
                className="w-full h-full object-contain"
              />
            )}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 group border border-blue-100"
              aria-label="Close lightbox"
            >
              <X className="size-5 md:size-6 text-blue-950/70 group-hover:text-amber-600 transition-colors" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}