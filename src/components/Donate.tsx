import { Heart, Gift, CheckCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function Donate() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    naira: {
      bankName: 'Access Bank',
      accountName: 'Streams of Life Nation',
      accountNumber: '1769239254'
    },
    dollar: {
      bankName: 'Access Bank',
      accountName: 'Streams of Life Nation',
      accountNumber: '1706521941'
    },
    foreignCurrencies: 'https://bit.ly/givetostreamsoflifechurch'
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="donate" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block mb-6 px-5 py-2 bg-amber-50 text-amber-700 rounded-full text-sm tracking-wider border border-amber-100" data-aos="fade-up">
            SUPPORT THE MINISTRY
          </div>
          <h2 className="text-blue-950 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4" data-aos="fade-up" data-aos-delay="100">
            Sow Your
            <span className="block mt-2 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Seeds & Offerings
            </span>
          </h2>
          <p className="text-blue-900/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-4" data-aos="fade-up" data-aos-delay="200">
            Your generous donations, tithes, and offerings help us cover venue costs, enable free livestreaming, 
            and expand our Kingdom outreach. The event is completely free, but your support makes it possible.
          </p>
        </div>

        {/* Info Banner */}
        <div className="max-w-4xl mx-auto mb-10 md:mb-12">
          <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6 flex-col sm:flex-row text-center sm:text-left">
              <Heart className="size-8 md:size-10 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-white text-xl md:text-2xl mb-2">Give with a Cheerful Heart</h3>
                <p className="text-white/80 text-sm italic">"For the Lord blesses a cheerful giver"</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 md:mt-8">
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircle className="size-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm">Support event operations</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircle className="size-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm">Enable free livestreaming</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircle className="size-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm">Expand Kingdom outreach</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Accounts Side by Side */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Naira Account */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-amber-200" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Gift className="size-6 md:size-7 text-white" />
              </div>
              <div>
                <h3 className="text-blue-950 text-xl md:text-2xl">Naira Account</h3>
                <p className="text-blue-900/60 text-sm">Nigerian Naira (₦)</p>
              </div>
            </div>
            
            <div className="space-y-5 md:space-y-6">
              <div>
                <label className="block text-blue-900/60 text-sm mb-2">Bank Name</label>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex-1 px-4 py-3 md:py-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-blue-950 font-medium text-sm md:text-base">{bankDetails.naira.bankName}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.naira.bankName, 'naira-bank')}
                    className="px-3 md:px-4 py-3 md:py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition-all shadow-md flex-shrink-0"
                    title="Copy bank name"
                  >
                    {copiedField === 'naira-bank' ? <Check className="size-5" /> : <Copy className="size-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-blue-900/60 text-sm mb-2">Account Name</label>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex-1 px-4 py-3 md:py-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-blue-950 font-medium text-sm md:text-base">{bankDetails.naira.accountName}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.naira.accountName, 'naira-name')}
                    className="px-3 md:px-4 py-3 md:py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition-all shadow-md flex-shrink-0"
                    title="Copy account name"
                  >
                    {copiedField === 'naira-name' ? <Check className="size-5" /> : <Copy className="size-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-blue-900/60 text-sm mb-2">Account Number</label>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex-1 px-4 py-3 md:py-4 bg-amber-50 rounded-xl border-2 border-amber-300">
                    <p className="text-blue-950 text-xl md:text-2xl tracking-wider font-semibold">{bankDetails.naira.accountNumber}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.naira.accountNumber, 'naira-account')}
                    className="px-3 md:px-4 py-3 md:py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition-all shadow-md flex-shrink-0"
                    title="Copy account number"
                  >
                    {copiedField === 'naira-account' ? <Check className="size-5" /> : <Copy className="size-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dollar Account */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-green-200" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Gift className="size-6 md:size-7 text-white" />
              </div>
              <div>
                <h3 className="text-blue-950 text-xl md:text-2xl">Dollar Account</h3>
                <p className="text-blue-900/60 text-sm">US Dollars ($)</p>
              </div>
            </div>
            
            <div className="space-y-5 md:space-y-6">
              <div>
                <label className="block text-blue-900/60 text-sm mb-2">Bank Name</label>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex-1 px-4 py-3 md:py-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-blue-950 font-medium text-sm md:text-base">{bankDetails.dollar.bankName}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.dollar.bankName, 'dollar-bank')}
                    className="px-3 md:px-4 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-md flex-shrink-0"
                    title="Copy bank name"
                  >
                    {copiedField === 'dollar-bank' ? <Check className="size-5" /> : <Copy className="size-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-blue-900/60 text-sm mb-2">Account Name</label>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex-1 px-4 py-3 md:py-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-blue-950 font-medium text-sm md:text-base">{bankDetails.dollar.accountName}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.dollar.accountName, 'dollar-name')}
                    className="px-3 md:px-4 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-md flex-shrink-0"
                    title="Copy account name"
                  >
                    {copiedField === 'dollar-name' ? <Check className="size-5" /> : <Copy className="size-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-blue-900/60 text-sm mb-2">Account Number</label>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex-1 px-4 py-3 md:py-4 bg-green-50 rounded-xl border-2 border-green-300">
                    <p className="text-blue-950 text-xl md:text-2xl tracking-wider font-semibold">{bankDetails.dollar.accountNumber}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.dollar.accountNumber, 'dollar-account')}
                    className="px-3 md:px-4 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-md flex-shrink-0"
                    title="Copy account number"
                  >
                    {copiedField === 'dollar-account' ? <Check className="size-5" /> : <Copy className="size-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Foreign Currencies */}
        <div className="max-w-2xl mx-auto mb-6 md:mb-8">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl text-center">
            <Gift className="size-10 md:size-12 text-white mx-auto mb-4" />
            <h4 className="text-white mb-3 text-xl md:text-2xl">Other Currencies</h4>
            <p className="text-white/90 mb-6 text-base md:text-lg">
              For giving in other foreign currencies, visit our secure giving portal
            </p>
            <a
              href={bankDetails.foreignCurrencies}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-amber-600 rounded-full hover:bg-amber-50 transition-all shadow-xl text-base md:text-lg group"
            >
              <ExternalLink className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Visit Giving Portal</span>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-blue-900/60 text-center mt-6 md:mt-8 text-sm md:text-lg px-4">
          Click the copy button to easily transfer funds • God loves a cheerful giver
        </p>
      </div>
    </section>
  );
}