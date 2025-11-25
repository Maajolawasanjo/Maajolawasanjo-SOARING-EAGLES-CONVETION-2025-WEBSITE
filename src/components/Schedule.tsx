import { Clock } from 'lucide-react';

const schedule = [
  {
    day: 'Day 1',
    date: 'Saturday, November 29, 2025',
    sessions: [
      { time: '5:30 PM', title: 'Doors Open & Registration', type: 'info' },
      { time: '6:00 PM', title: 'Praise & Worship', speaker: 'Worship Team', type: 'worship' },
      { time: '6:45 PM', title: 'Opening Prayer & Welcome', type: 'prayer' },
      { time: '7:00 PM', title: 'Word Session: "Who Is Jesus Christ?"', speaker: 'Apostle Chris Igboko', type: 'teaching' },
      { time: '8:15 PM', title: 'Ministry Time & Altar Call', type: 'ministry' },
      { time: '9:00 PM', title: 'Closing Prayer & Announcements', type: 'prayer' },
    ]
  },
  {
    day: 'Day 2',
    date: 'Sunday, November 30, 2025',
    sessions: [
      { time: '5:30 PM', title: 'Doors Open & Fellowship', type: 'info' },
      { time: '6:00 PM', title: 'High Praise & Worship', speaker: 'Worship Team', type: 'worship' },
      { time: '6:45 PM', title: 'Testimonies & Offering', type: 'prayer' },
      { time: '7:00 PM', title: 'Guest Ministers', speaker: 'Special Guest Speakers', type: 'teaching' },
      { time: '7:45 PM', title: 'Main Message: "Living in Christ"', speaker: 'Apostle Chris Igboko', type: 'teaching' },
      { time: '8:45 PM', title: 'Healing & Deliverance Service', type: 'ministry' },
      { time: '9:30 PM', title: 'Closing & Benediction', type: 'prayer' },
    ]
  }
];

const getSessionColor = (type: string) => {
  switch (type) {
    case 'worship':
      return 'border-l-purple-400 bg-purple-50/50';
    case 'teaching':
      return 'border-l-blue-400 bg-blue-50/50';
    case 'ministry':
      return 'border-l-amber-400 bg-amber-50/50';
    case 'prayer':
      return 'border-l-teal-400 bg-teal-50/50';
    default:
      return 'border-l-gray-300 bg-gray-50/50';
  }
};

export function Schedule() {
  return (
    <section id="schedule" className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block mb-6 px-5 py-2 bg-amber-50 text-amber-700 rounded-full text-sm tracking-wider border border-amber-100" data-aos="fade-up">
            EVENT SCHEDULE
          </div>
          <h2 className="text-blue-950 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4" data-aos="fade-up" data-aos-delay="100">
            Two Nights of
            <span className="block mt-2 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Glory & Power
            </span>
          </h2>
          <p className="text-blue-900/70 max-w-2xl mx-auto text-base md:text-lg px-4" data-aos="fade-up" data-aos-delay="200">
            Join us each evening at 6:00 PM for powerful worship, teachings, and supernatural ministry
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {schedule.map((day, idx) => (
            <div key={idx} className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white p-6 md:p-8 rounded-3xl shadow-2xl" data-aos="fade-up" data-aos-delay={300 + idx * 100}>
                <h3 className="mb-2 text-2xl md:text-3xl">{day.day}</h3>
                <p className="text-white/70 text-base md:text-lg">{day.date}</p>
                <div className="mt-4 md:mt-6 h-1 w-20 md:w-24 bg-amber-400 rounded-full" />
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {day.sessions.map((session, sessionIdx) => (
                  <div 
                    key={sessionIdx}
                    className={`group p-5 md:p-6 rounded-2xl border-l-4 transition-all hover:shadow-lg ${getSessionColor(session.type)}`}
                    data-aos="slide-up"
                    data-aos-delay={500 + idx * 100 + sessionIdx * 50}
                  >
                    <div className="flex items-start gap-3 md:gap-4 flex-col sm:flex-row">
                      <div className="flex items-center gap-2 md:gap-3 min-w-[90px] md:min-w-[100px] flex-shrink-0">
                        <Clock className="size-4 text-blue-900/70" />
                        <span className="text-blue-950 text-sm md:text-base">{session.time}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-blue-950 mb-1 text-base md:text-lg">
                          {session.title}
                        </h4>
                        {session.speaker && (
                          <p className="text-blue-900/60 text-xs md:text-sm">{session.speaker}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Info */}
        <div className="mt-12 md:mt-16 bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-200 rounded-3xl p-8 md:p-10">
          <h3 className="text-blue-950 mb-6 text-center text-xl md:text-2xl">Important Information</h3>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 text-blue-900/80 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
              <span>Doors open 30 minutes before service. Arrive early for best seats!</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
              <span>Dress modestly and appropriately for a holy gathering</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
              <span>Live streaming available for remote attendees</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
              <span>Schedule subject to change as led by the Holy Spirit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}