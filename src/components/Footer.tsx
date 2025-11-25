import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'Quick Links': [
      { label: 'About', href: '#about' },
      { label: 'Speakers', href: '#speakers' },
      { label: 'Schedule', href: '#schedule' },
      { label: 'Location', href: '#location' }
    ],
    'Get Involved': [
      { label: 'Register', href: '#register' },
      { label: 'Donate', href: '#donate' },
      { label: 'Watch Live', href: '#watch' },
      { label: 'Media Gallery', href: '#media' }
    ],
    'Resources': [
      { label: 'Latest Updates', href: '#media' },
      { label: 'Contact Us', href: '#location' },
      { label: 'Social Media', href: '#' }
    ]
  };

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/ApostleChrisIgboko', 
      label: 'Facebook', 
      color: 'bg-blue-600 hover:bg-blue-700' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/apostle_chrisigboko/', 
      label: 'Instagram', 
      color: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90' 
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/results?search_query=chris+igboko', 
      label: 'YouTube', 
      color: 'bg-red-600 hover:bg-red-700' 
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white pt-16 md:pt-20 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div className="lg:col-span-2" data-aos="fade-up">
            <h3 className="text-white mb-3 md:mb-4 text-xl md:text-2xl">Soaring Eagles</h3>
            <p className="text-white/70 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
              A powerful Christian gathering bringing believers together for worship, 
              fellowship, and spiritual growth under the theme "I AM JESUS CHRIST".
            </p>
            
            <div className="space-y-2 md:space-y-3 mb-5 md:mb-6">
              <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                <MapPin className="size-4 text-amber-400 flex-shrink-0" />
                <span>Alhaji Sunmonu Street, Lekki Phase 1, Lagos</span>
              </div>
              <a 
                href="tel:+2348103070734"
                className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm hover:text-amber-400 transition-colors"
              >
                <Phone className="size-4 text-amber-400 flex-shrink-0" />
                <span>+234 810 307 0734 (Call/WhatsApp)</span>
              </a>
              <a 
                href="mailto:Streamsoflifeworldwide@gmail.com"
                className="flex items-start gap-2 md:gap-3 text-white/80 text-xs md:text-sm hover:text-amber-400 transition-colors"
              >
                <Mail className="size-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="break-all">Streamsoflifeworldwide@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <div key={title} data-aos="fade-up" data-aos-delay={100 + idx * 50}>
              <h4 className="text-white mb-3 md:mb-4 text-base md:text-lg">{title}</h4>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-amber-400 transition-colors text-xs md:text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/10 pt-10 md:pt-12 pb-6 md:pb-8">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-10 text-center shadow-2xl">
            <h3 className="text-white mb-2 md:mb-3 text-2xl md:text-3xl">Don't Miss Out!</h3>
            <p className="text-white/90 mb-5 md:mb-6 max-w-xl mx-auto text-base md:text-lg">
              Register now for Soaring Eagles Convention 2025 and be part of this 
              transformative spiritual gathering.
            </p>
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-8 md:px-10 py-3 md:py-4 bg-white text-blue-950 rounded-full hover:bg-blue-50 transition-colors shadow-xl text-base md:text-lg"
            >
              Register Now - Free
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-white/60">
          <p>© {new Date().getFullYear()} Streams of Life Nation. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Hosted by</span>
            <span className="text-amber-400">Apostle Chris Igboko</span>
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 md:mt-6 text-center text-white/50 text-xs">
          <p>Event schedule subject to change as led by the Holy Spirit</p>
        </div>
      </div>
    </footer>
  );
}