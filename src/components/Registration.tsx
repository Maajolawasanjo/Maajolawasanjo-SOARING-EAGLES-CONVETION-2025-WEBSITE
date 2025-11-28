import { Users, CheckCircle, ExternalLink } from 'lucide-react';

// Google Form Registration Link
const EXTERNAL_REGISTRATION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSexsJPzLDztxSvJyXXiR93G97ZxzJI8m7x2NWRw2F-GIbbl4A/viewform?usp=publish-editor';

export function Registration() {
  const handleRegistrationClick = () => {
    window.open(EXTERNAL_REGISTRATION_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="register" className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block mb-6 px-5 py-2 bg-amber-50 text-amber-700 rounded-full text-sm tracking-wider border border-amber-100" data-aos="fade-up">
            FREE REGISTRATION
          </div>
          <h2 className="text-blue-950 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4" data-aos="fade-up" data-aos-delay="100">
            Register Now
            <span className="block mt-2 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              It's Completely Free
            </span>
          </h2>
          <p className="text-blue-900/70 max-w-2xl mx-auto text-base md:text-lg px-4" data-aos="fade-up" data-aos-delay="200">
            Secure your spot for this powerful gathering. No payment required - just register 
            to receive updates and fast-track your entry.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Registration Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-blue-100" data-aos="zoom-in" data-aos-delay="300">
            <div className="text-center">
              <div className="inline-flex w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl items-center justify-center mb-6 md:mb-8 shadow-2xl">
                <Users className="size-8 md:size-10 text-white" />
              </div>
              
              <h3 className="text-blue-950 text-2xl md:text-3xl mb-3 md:mb-4">Register for Free</h3>
              <p className="text-blue-900/70 text-base md:text-lg mb-8 md:mb-10 max-w-lg mx-auto leading-relaxed">
                Click the button below to complete your registration. You'll be redirected to our secure registration platform.
              </p>
              
              <button
                onClick={handleRegistrationClick}
                className="inline-flex items-center gap-3 px-10 md:px-12 py-5 md:py-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all rounded-full shadow-2xl text-base md:text-lg group transform hover:scale-105"
              >
                <span>Complete Registration</span>
                <ExternalLink className="size-5 md:size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-blue-900/60 text-xs md:text-sm mt-6 md:mt-8">
                ✓ No payment required • ✓ Free entry • ✓ All are welcome
              </p>
              
              {EXTERNAL_REGISTRATION_URL === 'YOUR_REGISTRATION_LINK_HERE' && (
                <div className="mt-8 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl">
                  <p className="text-amber-800 text-sm">
                    ⚠️ <strong>Developer Note:</strong> Update <code className="bg-amber-100 px-2 py-1 rounded">EXTERNAL_REGISTRATION_URL</code> in <code className="bg-amber-100 px-2 py-1 rounded">Registration.tsx</code>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-10">
            <div className="text-center p-5 md:p-6">
              <div className="inline-flex w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl items-center justify-center mb-4 shadow-lg">
                <CheckCircle className="size-6 md:size-7 text-white" />
              </div>
              <h4 className="text-blue-950 mb-2 text-base md:text-lg">Get Updates</h4>
              <p className="text-blue-900/60 text-xs md:text-sm">
                Receive event reminders and important information
              </p>
            </div>
            <div className="text-center p-5 md:p-6">
              <div className="inline-flex w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl items-center justify-center mb-4 shadow-lg">
                <CheckCircle className="size-6 md:size-7 text-white" />
              </div>
              <h4 className="text-blue-950 mb-2 text-base md:text-lg">Fast Check-in</h4>
              <p className="text-blue-900/60 text-xs md:text-sm">
                Skip the queue with pre-registration
              </p>
            </div>
            <div className="text-center p-5 md:p-6 sm:col-span-2 lg:col-span-1">
              <div className="inline-flex w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl items-center justify-center mb-4 shadow-lg">
                <CheckCircle className="size-6 md:size-7 text-white" />
              </div>
              <h4 className="text-blue-950 mb-2 text-base md:text-lg">Stream Access</h4>
              <p className="text-blue-900/60 text-xs md:text-sm">
                Get livestream links sent to your email
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}