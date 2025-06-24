
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { X, Download, Share2, Camera, Play } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const images = [
    {
      id: 1,
      src: '/placeholder.svg',
      alt: 'Owu Falls main cascade during peak season',
      category: 'waterfall',
      title: 'Main Cascade',
      description: 'The spectacular 120-meter main drop during peak water flow'
    },
    {
      id: 2,
      src: '/placeholder.svg',
      alt: 'Hiking trail through tropical rainforest',
      category: 'trails',
      title: 'Forest Trail',
      description: 'Ancient trees line the path to the falls'
    },
    {
      id: 3,
      src: '/placeholder.svg',
      alt: 'Natural pool at the base of Owu Falls',
      category: 'pools',
      title: 'Sacred Pool',
      description: 'Crystal clear waters at the base perfect for swimming'
    },
    {
      id: 4,
      src: '/placeholder.svg',
      alt: 'Colorful bird species native to the area',
      category: 'wildlife',
      title: 'Kingfisher',
      description: 'One of 50+ bird species found around the falls'
    },
    {
      id: 5,
      src: '/placeholder.svg',
      alt: 'Sunrise over Owu Falls',
      category: 'landscape',
      title: 'Dawn Light',
      description: 'Golden hour illuminating the mist and rocks'
    },
    {
      id: 6,
      src: '/placeholder.svg',
      alt: 'Traditional Yoruba ceremony at the falls',
      category: 'culture',
      title: 'Cultural Ceremony',
      description: 'Local spiritual traditions still practiced today'
    },
    {
      id: 7,
      src: '/placeholder.svg',
      alt: 'Rock formations and geological features',
      category: 'geology',
      title: 'Ancient Granite',
      description: 'Precambrian rock formations millions of years old'
    },
    {
      id: 8,
      src: '/placeholder.svg',
      alt: 'Visitors enjoying the falls',
      category: 'visitors',
      title: 'Happy Visitors',
      description: 'Families creating memories at Nigeria\'s tallest waterfall'
    },
    {
      id: 9,
      src: '/placeholder.svg',
      alt: 'Aerial view of Owu Falls and surrounding forest',
      category: 'aerial',
      title: 'Aerial View',
      description: 'The falls surrounded by pristine rainforest canopy'
    },
    {
      id: 10,
      src: '/placeholder.svg',
      alt: 'Seasonal flower blooms around the falls',
      category: 'flora',
      title: 'Wild Orchids',
      description: 'Rare orchid species bloom during the rainy season'
    },
    {
      id: 11,
      src: '/placeholder.svg',
      alt: 'Night view of the falls under starlight',
      category: 'night',
      title: 'Starlit Falls',
      description: 'The falls under a canopy of stars away from city lights'
    },
    {
      id: 12,
      src: '/placeholder.svg',
      alt: 'Adventure activities at Owu Falls',
      category: 'adventure',
      title: 'Rock Climbing',
      description: 'Adventure seekers scaling the granite cliffs'
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: '/placeholder.svg',
      title: 'Virtual Tour of Owu Falls',
      duration: '8:45',
      description: 'Complete guided tour from entrance to the main falls'
    },
    {
      id: 2,
      thumbnail: '/placeholder.svg',
      title: 'Wildlife Documentary',
      duration: '12:30',
      description: 'Discover the rich biodiversity around the falls'
    },
    {
      id: 3,
      thumbnail: '/placeholder.svg',
      title: 'Cultural Heritage Story',
      duration: '6:20',
      description: 'Learn about the cultural significance and local traditions'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', count: images.length },
    { id: 'waterfall', label: 'Waterfall', count: images.filter(img => img.category === 'waterfall').length },
    { id: 'wildlife', label: 'Wildlife', count: images.filter(img => img.category === 'wildlife').length },
    { id: 'trails', label: 'Trails', count: images.filter(img => img.category === 'trails').length },
    { id: 'culture', label: 'Culture', count: images.filter(img => img.category === 'culture').length },
    { id: 'landscape', label: 'Landscape', count: images.filter(img => img.category === 'landscape').length }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = images.find(img => img.id === selectedImage);

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
              Immerse yourself in the stunning beauty of Owu Falls through our curated collection of photos and videos
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-emerald-500 text-black font-semibold'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-on-scroll hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(image.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center animate-on-scroll">
              Video Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer animate-on-scroll hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                    <div className="bg-emerald-500 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{video.description}</p>
                    <span className="text-emerald-400 text-sm">{video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Virtual Tour CTA */}
          <section className="glassmorphism-card p-12 rounded-lg text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Experience Owu Falls Virtually</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't visit in person right now? Take our immersive virtual tour and experience 
              the beauty of Nigeria's tallest waterfall from anywhere in the world.
            </p>
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Start Virtual Tour
            </Button>
          </section>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative max-w-6xl max-h-full mx-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
            >
              <span className="text-white text-xl">‹</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
            >
              <span className="text-white text-xl">›</span>
            </button>

            {/* Image */}
            <img
              src={selectedImageData.src}
              alt={selectedImageData.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{selectedImageData.title}</h3>
                  <p className="text-gray-300">{selectedImageData.description}</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-emerald-500 hover:bg-emerald-600 rounded-full p-2 transition-colors">
                    <Download className="w-5 h-5 text-black" />
                  </button>
                  <button className="bg-emerald-500 hover:bg-emerald-600 rounded-full p-2 transition-colors">
                    <Share2 className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
