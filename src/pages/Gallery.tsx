
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'waterfall', name: 'Waterfall Views' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'trails', name: 'Hiking Trails' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'aerial', name: 'Aerial Views' }
  ];

  const photos = [
    {
      id: 1,
      src: '/placeholder.svg',
      alt: 'Owu Falls main cascade',
      category: 'waterfall',
      title: 'Main Waterfall Cascade',
      description: 'The spectacular 120-meter drop of Owu Falls in full flow'
    },
    {
      id: 2,
      src: '/placeholder.svg',
      alt: 'Tropical birds near waterfall',
      category: 'wildlife',
      title: 'Local Bird Species',
      description: 'Colorful tropical birds found in the forest surrounding the falls'
    },
    {
      id: 3,
      src: '/placeholder.svg',
      alt: 'Hiking trail through forest',
      category: 'trails',
      title: 'Forest Trail',
      description: 'Well-maintained hiking trail leading to the waterfall viewpoints'
    },
    {
      id: 4,
      src: '/placeholder.svg',
      alt: 'Traditional cultural ceremony',
      category: 'cultural',
      title: 'Cultural Ceremony',
      description: 'Local community performing traditional rituals at the sacred site'
    },
    {
      id: 5,
      src: '/placeholder.svg',
      alt: 'Aerial view of waterfall',
      category: 'aerial',
      title: 'Aerial Perspective',
      description: 'Drone photography showcasing the falls from above'
    },
    {
      id: 6,
      src: '/placeholder.svg',
      alt: 'Rainbow over waterfall',
      category: 'waterfall',
      title: 'Rainbow at the Falls',
      description: 'Natural rainbow formed by the waterfall mist in sunlight'
    },
    {
      id: 7,
      src: '/placeholder.svg',
      alt: 'Butterfly on tropical flower',
      category: 'wildlife',
      title: 'Tropical Butterfly',
      description: 'Beautiful butterfly species native to the Owu Falls area'
    },
    {
      id: 8,
      src: '/placeholder.svg',
      alt: 'Rock formations and pools',
      category: 'waterfall',
      title: 'Natural Rock Pools',
      description: 'Ancient granite formations carved by centuries of water flow'
    },
    {
      id: 9,
      src: '/placeholder.svg',
      alt: 'Hikers on mountain trail',
      category: 'trails',
      title: 'Adventure Hikers',
      description: 'Visitors enjoying the challenging mountain trails'
    },
    {
      id: 10,
      src: '/placeholder.svg',
      alt: 'Sunset over forest canopy',
      category: 'aerial',
      title: 'Forest Canopy at Sunset',
      description: 'Golden hour view of the dense tropical forest canopy'
    },
    {
      id: 11,
      src: '/placeholder.svg',
      alt: 'Local guide explaining history',
      category: 'cultural',
      title: 'Cultural Guide',
      description: 'Knowledgeable local guide sharing the history of Owu Falls'
    },
    {
      id: 12,
      src: '/placeholder.svg',
      alt: 'Misty waterfall morning',
      category: 'waterfall',
      title: 'Morning Mist',
      description: 'Early morning mist rising from the base of the waterfall'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore the breathtaking beauty of Owu Falls through our curated collection of photographs
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-500 text-black font-semibold'
                    : 'glassmorphism text-white hover:bg-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="glassmorphism-card p-3 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer animate-on-scroll"
                onClick={() => setSelectedImage(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover rounded-lg mb-3"
                  loading="lazy"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-emerald-400 mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photography Tips */}
          <section className="glassmorphism-card p-8 rounded-lg animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Photography Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-emerald-400">Best Times</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Golden hour (6-8 AM, 5-7 PM)</li>
                  <li>• Overcast days for even lighting</li>
                  <li>• After rain for maximum water flow</li>
                  <li>• Avoid harsh midday sun</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-emerald-400">Equipment</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Tripod for long exposures</li>
                  <li>• Polarizing filter for water shots</li>
                  <li>• Waterproof camera protection</li>
                  <li>• Multiple batteries and memory cards</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-emerald-400">Techniques</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Use slow shutter for silky water</li>
                  <li>• Include foreground elements</li>
                  <li>• Capture the scale with people</li>
                  <li>• Look for unique perspectives</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-5xl max-h-full">
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-8 right-8 text-white text-4xl hover:text-emerald-400 transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
