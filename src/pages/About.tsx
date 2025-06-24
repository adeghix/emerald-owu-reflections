
import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Users, Leaf, Camera } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              About Owu Falls
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the rich history, cultural significance, and natural wonders of Nigeria's tallest waterfall
            </p>
          </div>

          {/* Main Story */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-on-scroll">
                <img 
                  src="/placeholder.svg" 
                  alt="Owu Falls in full glory during rainy season"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-6 text-emerald-400">The Crown Jewel of Kwara State</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Rising majestically 120 meters above the forest floor, Owu Falls stands as Nigeria's tallest waterfall, 
                  a natural monument that has captivated visitors for generations. Located in the Owa Kajola area of 
                  Ifelodun Local Government in Kwara State, this spectacular cascade represents the raw beauty and 
                  power of Nigerian nature at its finest.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  The waterfall was formed millions of years ago through geological processes that carved deep 
                  granite channels, creating the dramatic cliff face we see today. Fed by seasonal rains and 
                  underground springs, the falls are most spectacular between June and October when the water 
                  volume reaches its peak.
                </p>
              </div>
            </div>
          </section>

          {/* Cultural Significance */}
          <section className="mb-20 glassmorphism-card p-12 rounded-lg animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400 text-center">Cultural Heritage & Spiritual Significance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Sacred Traditions</h3>
                <p className="text-gray-300 mb-4">
                  For centuries, the Yoruba people have considered Owu Falls a sacred site imbued with spiritual power. 
                  Local traditions speak of Oshun, the river goddess, who blessed these waters with healing properties. 
                  Many visitors come seeking spiritual renewal and connection with nature.
                </p>
                <p className="text-gray-300">
                  Traditional ceremonies and festivals are still held at the falls, particularly during the rainy season 
                  when the water is at its most powerful. These gatherings celebrate the harmony between humanity and 
                  nature that has been central to Yoruba culture for millennia.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Local Community</h3>
                <p className="text-gray-300 mb-4">
                  The surrounding communities have been guardians of this natural treasure for generations. 
                  Local guides, many of whom are descendants of the area's original inhabitants, share stories 
                  passed down through oral tradition about the falls' creation and significance.
                </p>
                <p className="text-gray-300">
                  Tourism to Owu Falls provides vital income to local communities through guiding services, 
                  accommodation, and traditional crafts. This sustainable tourism model ensures that the 
                  falls remain protected while supporting local livelihoods.
                </p>
              </div>
            </div>
          </section>

          {/* Biodiversity */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center animate-on-scroll">Biodiversity & Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <Leaf className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Flora</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Ancient mahogany and iroko trees</li>
                  <li>• Rare orchid species</li>
                  <li>• Medicinal plants used in traditional healing</li>
                  <li>• Ferns and mosses unique to the microclimate</li>
                  <li>• Over 200 plant species documented</li>
                </ul>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <Users className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Fauna</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• 50+ bird species including kingfishers</li>
                  <li>• Forest monkeys and other primates</li>
                  <li>• Colorful butterflies and insects</li>
                  <li>• Native fish species in the pools</li>
                  <li>• Small mammals and reptiles</li>
                </ul>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <Camera className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Conservation</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Protected forest reserve status</li>
                  <li>• Sustainable tourism practices</li>
                  <li>• Community-led conservation efforts</li>
                  <li>• Research partnerships with universities</li>
                  <li>• Environmental education programs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Geological Formation */}
          <section className="mb-20 animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-emerald-400">Geological Marvel</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Owu Falls was formed through millions of years of geological processes. The waterfall cascades 
                  over ancient granite formations that date back to the Precambrian era, making them some of the 
                  oldest rocks in Nigeria.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  The dramatic 120-meter drop was created through a combination of tectonic activity and erosion. 
                  Water flowing over softer rock layers gradually carved out the deep gorge, while the harder 
                  granite remained, creating the cliff face we see today.
                </p>
                <p className="text-lg text-gray-300">
                  The surrounding landscape features unique rock formations, caves, and natural pools that offer 
                  insights into Nigeria's geological history. These formations provide habitat for specialized 
                  plants and animals adapted to the rocky environment.
                </p>
              </div>
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Geological formations around Owu Falls"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-20 glassmorphism-card p-12 rounded-lg animate-on-scroll">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center">Historical Timeline</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Pre-Colonial Era</h3>
                  <p className="text-gray-300">
                    Yoruba communities establish the falls as a sacred site. Traditional ceremonies and 
                    spiritual practices centered around the waterfall begin.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1960s</h3>
                  <p className="text-gray-300">
                    First documented scientific studies of the falls and surrounding ecosystem. 
                    Early conservation efforts begin.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1980s</h3>
                  <p className="text-gray-300">
                    Tourism infrastructure development begins. First hiking trails established 
                    with community involvement.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2000s</h3>
                  <p className="text-gray-300">
                    Recognition as Nigeria's tallest waterfall. Increased international attention 
                    and tourism development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Present Day</h3>
                  <p className="text-gray-300">
                    Sustainable tourism model in place. Ongoing conservation efforts and 
                    community development programs ensure the falls' protection for future generations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center glassmorphism-card p-12 rounded-lg animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Experience This Natural Wonder</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in preserving and celebrating this magnificent natural heritage while creating 
              unforgettable memories at Nigeria's tallest waterfall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link to="/booking">Plan Your Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                <Link to="/activities">Explore Activities</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
