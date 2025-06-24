
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              About Owu Falls
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the rich history, cultural significance, and natural wonder 
              of Nigeria's tallest waterfall
            </p>
          </div>

          {/* Main Image */}
          <div className="glassmorphism-card p-4 rounded-2xl mb-16 animate-fade-in">
            <img 
              src="/placeholder.svg" 
              alt="Owu Falls panoramic view"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* History */}
            <section className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Natural History</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-300 mb-4">
                    Owu Falls was formed millions of years ago through the erosive power of water 
                    flowing over ancient granite formations. The waterfall's impressive 120-meter 
                    height makes it the tallest in Nigeria, carved through geological processes 
                    that span millennia.
                  </p>
                  <p className="text-lg text-gray-300 mb-4">
                    The granite bedrock, formed during the Precambrian era, provides the stable 
                    foundation that allows the falls to maintain their dramatic vertical drop. 
                    The constant flow of water has created a series of pools and terraces below 
                    the main fall.
                  </p>
                </div>
                <div className="glassmorphism-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Geological Facts</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Height: 120 meters (394 feet)</li>
                    <li>• Rock type: Precambrian granite</li>
                    <li>• Age: Over 500 million years</li>
                    <li>• Water source: Seasonal rainfall</li>
                    <li>• Flow rate: Varies with season</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cultural Significance */}
            <section className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Cultural Heritage</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="glassmorphism-card p-6 rounded-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Local cultural ceremony"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-3 text-emerald-400">Sacred Traditions</h3>
                  <p className="text-gray-300">
                    Local communities have revered Owu Falls for generations, 
                    considering it a sacred site with spiritual significance.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-300 mb-4">
                    For the local Yoruba communities, Owu Falls has long been considered a sacred 
                    site where the spirits of ancestors reside. Traditional ceremonies and rituals 
                    have been performed here for centuries, connecting people to their cultural roots.
                  </p>
                  <p className="text-lg text-gray-300 mb-4">
                    The name "Owu" itself carries deep cultural meaning, referring to the ancient 
                    Owu kingdom that once flourished in this region. Local folklore tells stories 
                    of brave warriors and wise leaders who sought guidance from the falls.
                  </p>
                  <p className="text-lg text-gray-300">
                    Today, the falls continue to serve as a gathering place for cultural festivals 
                    and traditional celebrations, preserving the rich heritage of the area for 
                    future generations.
                  </p>
                </div>
              </div>
            </section>

            {/* Biodiversity */}
            <section className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Biodiversity & Ecosystem</h2>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  The area surrounding Owu Falls supports a rich ecosystem with diverse flora and fauna, 
                  making it an important habitat for numerous species.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glassmorphism-card p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">🦅</div>
                  <h3 className="text-xl font-bold mb-3 text-emerald-400">Bird Life</h3>
                  <p className="text-gray-300">
                    Over 50 species of birds call this area home, including rare tropical species 
                    and migratory birds.
                  </p>
                </div>
                
                <div className="glassmorphism-card p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="text-xl font-bold mb-3 text-emerald-400">Flora</h3>
                  <p className="text-gray-300">
                    Dense tropical forest with ancient trees, ferns, and numerous plant species 
                    adapted to the humid environment.
                  </p>
                </div>
                
                <div className="glassmorphism-card p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">🦋</div>
                  <h3 className="text-xl font-bold mb-3 text-emerald-400">Insects</h3>
                  <p className="text-gray-300">
                    Colorful butterflies, unique beetles, and other insects contribute to the 
                    area's rich biodiversity.
                  </p>
                </div>
              </div>
            </section>

            {/* Conservation */}
            <section className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Conservation Efforts</h2>
              <div className="glassmorphism-card p-8 rounded-lg">
                <p className="text-lg text-gray-300 mb-6">
                  Recognizing the importance of preserving this natural wonder, local authorities 
                  and conservation organizations work together to protect Owu Falls and its 
                  surrounding ecosystem. These efforts ensure that future generations can continue 
                  to enjoy and learn from this remarkable site.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">Current Initiatives</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Trail maintenance and improvement</li>
                      <li>• Wildlife monitoring programs</li>
                      <li>• Community education initiatives</li>
                      <li>• Sustainable tourism practices</li>
                      <li>• Water quality monitoring</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">How You Can Help</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Follow Leave No Trace principles</li>
                      <li>• Stay on designated trails</li>
                      <li>• Support local conservation efforts</li>
                      <li>• Respect wildlife and vegetation</li>
                      <li>• Participate in guided tours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
