
import React from 'react';
import { MapPin, Clock, Calendar, Camera } from 'lucide-react';

const VisitInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Plan Your Visit
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know for an unforgettable experience at Owu Falls
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-fade-in">
              <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-sm text-gray-400">Kwara State, Nigeria</p>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-fade-in">
              <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Best Time</h3>
              <p className="text-sm text-gray-400">June - September</p>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-fade-in">
              <Calendar className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Duration</h3>
              <p className="text-sm text-gray-400">Half day to full day</p>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-fade-in">
              <Camera className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Photography</h3>
              <p className="text-sm text-gray-400">Excellent opportunities</p>
            </div>
          </div>

          {/* Directions Section */}
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400">Getting There</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glassmorphism-card p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">By Car</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <strong>From Lagos (4-5 hours):</strong>
                    <p>Take Lagos-Ibadan Expressway → Ibadan-Ilorin Expressway → Follow signs to Owu Falls</p>
                  </div>
                  <div>
                    <strong>From Abuja (3-4 hours):</strong>
                    <p>Take Abuja-Lokoja Road → Lokoja-Ilorin Road → Follow local signs to Owu Falls</p>
                  </div>
                  <div>
                    <strong>Parking:</strong>
                    <p>Secure parking available at the visitor center</p>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism-card p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Public Transport</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <strong>Bus Service:</strong>
                    <p>Regular buses from major cities to Ilorin, then local transport to falls</p>
                  </div>
                  <div>
                    <strong>Local Taxi:</strong>
                    <p>Available from Ilorin city center to Owu Falls entrance</p>
                  </div>
                  <div>
                    <strong>Tour Buses:</strong>
                    <p>Organized tours include transportation from major cities</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Times to Visit */}
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400">Best Times to Visit</h2>
            <div className="glassmorphism-card p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Seasonal Guide</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <strong className="text-emerald-400">Rainy Season (June - September)</strong>
                      <p className="text-gray-300 mt-1">
                        Peak flow period with the most spectacular waterfall display. 
                        Best for photography but trails may be muddy.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <strong className="text-blue-400">Dry Season (October - May)</strong>
                      <p className="text-gray-300 mt-1">
                        Reduced water flow but easier hiking conditions. 
                        Better weather for camping and outdoor activities.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Daily Schedule</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span><strong>Early Morning (6:00-9:00 AM)</strong></span>
                    </div>
                    <p className="text-sm mb-3">Cool temperatures, best lighting for photography, fewer crowds</p>
                    
                    <div className="flex justify-between">
                      <span><strong>Late Afternoon (4:00-6:00 PM)</strong></span>
                    </div>
                    <p className="text-sm mb-3">Golden hour lighting, comfortable temperatures for hiking</p>
                    
                    <div className="bg-yellow-900/20 p-3 rounded">
                      <strong className="text-yellow-400">Avoid midday (11:00 AM - 3:00 PM)</strong>
                      <p className="text-sm mt-1">Intense heat and harsh lighting conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What to Bring */}
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400">What to Bring</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glassmorphism-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Essential Items</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Comfortable hiking shoes</li>
                  <li>• Water bottles (2-3 liters)</li>
                  <li>• Sun protection (hat, sunscreen)</li>
                  <li>• Insect repellent</li>
                  <li>• First aid kit</li>
                  <li>• Portable charger</li>
                </ul>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Photography Gear</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Camera with extra batteries</li>
                  <li>• Waterproof case/bag</li>
                  <li>• Tripod for long exposures</li>
                  <li>• Lens cleaning kit</li>
                  <li>• Multiple memory cards</li>
                  <li>• Polarizing filter</li>
                </ul>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Optional Items</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Picnic lunch</li>
                  <li>• Binoculars for bird watching</li>
                  <li>• Notebook for journaling</li>
                  <li>• Portable chair</li>
                  <li>• Rain poncho</li>
                  <li>• Snacks and energy bars</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Safety Guidelines */}
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400">Safety Guidelines</h2>
            <div className="glassmorphism-card p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Important Safety Rules</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Never swim in the plunge pool - strong currents and hidden rocks
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Stay on marked trails to avoid dangerous cliff edges
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Don't climb on wet rocks near the waterfall
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Travel in groups, especially on remote trails
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Inform someone of your hiking plans and expected return
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Emergency Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <strong>Emergency Contacts:</strong>
                      <p>Local Emergency: 199</p>
                      <p>Tourist Police: +234 xxx xxx xxxx</p>
                    </div>
                    
                    <div>
                      <strong>Nearest Medical Facility:</strong>
                      <p>Ilorin General Hospital</p>
                      <p>30 minutes by car</p>
                    </div>
                    
                    <div>
                      <strong>On-Site Services:</strong>
                      <p>First aid station at visitor center</p>
                      <p>Trained guides available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Facilities */}
          <section className="animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400">Facilities & Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Visitor Center",
                  features: ["Information desk", "Restrooms", "Gift shop", "First aid station", "Lockers"]
                },
                {
                  title: "Dining",
                  features: ["Local restaurant", "Snack bar", "Picnic areas", "Drinking water", "Vending machines"]
                },
                {
                  title: "Accommodation",
                  features: ["Nearby guesthouses", "Camping areas", "Lodge facilities", "Booking assistance", "Transport links"]
                }
              ].map((facility, index) => (
                <div key={index} className="glassmorphism-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">{facility.title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {facility.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VisitInfo;
