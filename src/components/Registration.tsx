import { Users, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

export function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    church: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          {/* Registration Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-blue-100" data-aos="zoom-in" data-aos-delay="300">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Users className="size-6 md:size-7 text-white" />
              </div>
              <div>
                <h3 className="text-blue-950 text-xl md:text-2xl">Register for Free</h3>
                <p className="text-blue-900/60 text-sm md:text-base">No payment required • All are welcome</p>
              </div>
            </div>
            
            <form className="space-y-5 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block text-blue-950 mb-2 text-sm md:text-base">First Name *</label>
                  <Input
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="h-11 md:h-12 border-blue-200 focus:border-amber-400 rounded-xl text-base"
                  />
                </div>
                <div>
                  <label className="block text-blue-950 mb-2 text-sm md:text-base">Last Name *</label>
                  <Input
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="h-11 md:h-12 border-blue-200 focus:border-amber-400 rounded-xl text-base"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-blue-950 mb-2 text-sm md:text-base">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-11 md:h-12 border-blue-200 focus:border-amber-400 rounded-xl text-base"
                />
              </div>
              
              <div>
                <label className="block text-blue-950 mb-2 text-sm md:text-base">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-11 md:h-12 border-blue-200 focus:border-amber-400 rounded-xl text-base"
                />
              </div>
              
              <div>
                <label className="block text-blue-950 mb-2 text-sm md:text-base">Church / Ministry (Optional)</label>
                <Input
                  name="church"
                  placeholder="Your church name"
                  value={formData.church}
                  onChange={handleInputChange}
                  className="h-11 md:h-12 border-blue-200 focus:border-amber-400 rounded-xl text-base"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 md:h-14 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-xl rounded-xl text-base md:text-lg"
              >
                Complete Registration - Free
              </Button>

              <p className="text-blue-900/60 text-xs md:text-sm text-center">
                You'll receive confirmation and livestream details via email
              </p>
            </form>
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