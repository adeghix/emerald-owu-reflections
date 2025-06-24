
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Search, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Best Photography Tips for Capturing Owu Falls',
      excerpt: 'Master the art of waterfall photography with our expert guide to shooting Nigeria\'s tallest cascade.',
      content: 'Complete guide to photographing waterfalls including camera settings, composition techniques, and the best times of day for stunning shots.',
      author: 'James Adebayo',
      date: '2024-01-15',
      category: 'Photography',
      readTime: '8 min read',
      image: '/placeholder.svg',
      featured: true,
      tags: ['Photography', 'Tips', 'Waterfall', 'Tutorial']
    },
    {
      id: 2,
      title: 'The Cultural Significance of Owu Falls in Yoruba Tradition',
      excerpt: 'Explore the rich spiritual heritage and traditional beliefs surrounding Nigeria\'s sacred waterfall.',
      content: 'Deep dive into the historical and cultural importance of Owu Falls in Yoruba spirituality and local traditions.',
      author: 'Dr. Folake Ogundimu',
      date: '2024-01-10',
      category: 'Culture',
      readTime: '12 min read',
      image: '/placeholder.svg',
      featured: false,
      tags: ['Culture', 'History', 'Yoruba', 'Tradition']
    },
    {
      id: 3,
      title: 'Planning Your First Visit: A Complete Guide',
      excerpt: 'Everything first-time visitors need to know for a safe and memorable trip to Owu Falls.',
      content: 'Comprehensive planning guide covering preparation, what to bring, safety tips, and making the most of your visit.',
      author: 'Sarah Johnson',
      date: '2024-01-08',
      category: 'Travel Tips',
      readTime: '15 min read',
      image: '/placeholder.svg',
      featured: false,
      tags: ['Travel', 'Planning', 'Guide', 'First Visit']
    },
    {
      id: 4,
      title: 'Wildlife Spotting: Birds and Animals Around Owu Falls',
      excerpt: 'Discover the incredible biodiversity in the pristine ecosystem surrounding the waterfall.',
      content: 'Detailed guide to the 50+ bird species and various animals that call the Owu Falls area home.',
      author: 'Prof. Michael Olaniyi',
      date: '2024-01-05',
      category: 'Wildlife',
      readTime: '10 min read',
      image: '/placeholder.svg',
      featured: false,
      tags: ['Wildlife', 'Birds', 'Nature', 'Conservation']
    },
    {
      id: 5,
      title: 'Local Stories: Legends and Myths of Owu Falls',
      excerpt: 'Traditional tales passed down through generations about the mystical powers of the sacred waterfall.',
      content: 'Collection of traditional stories and legends that have shaped the cultural landscape around Owu Falls.',
      author: 'Elder Taiwo Adeyemi',
      date: '2024-01-03',
      category: 'Culture',
      readTime: '7 min read',
      image: '/placeholder.svg',
      featured: false,
      tags: ['Stories', 'Legends', 'Culture', 'Oral History']
    },
    {
      id: 6,
      title: 'Seasonal Changes: When to Visit for the Best Experience',
      excerpt: 'Understanding how different seasons affect your Owu Falls experience and what to expect year-round.',
      content: 'Month-by-month breakdown of weather patterns, water flow, and optimal visiting conditions.',
      author: 'Weather Expert Team',
      date: '2024-01-01',
      category: 'Travel Tips',
      readTime: '9 min read',
      image: '/placeholder.svg',
      featured: false,
      tags: ['Seasons', 'Weather', 'Planning', 'Travel']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'Photography', label: 'Photography', count: blogPosts.filter(post => post.category === 'Photography').length },
    { id: 'Culture', label: 'Culture', count: blogPosts.filter(post => post.category === 'Culture').length },
    { id: 'Travel Tips', label: 'Travel Tips', count: blogPosts.filter(post => post.category === 'Travel Tips').length },
    { id: 'Wildlife', label: 'Wildlife', count: blogPosts.filter(post => post.category === 'Wildlife').length }
  ];

  const recentPosts = blogPosts.slice(0, 3);
  const popularTags = ['Photography', 'Culture', 'Travel', 'Wildlife', 'Tips', 'Nature', 'History', 'Adventure'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Blog & Stories
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover stories, tips, and insights about Owu Falls through the eyes of visitors, locals, and experts
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            <div className="lg:w-2/3">
              {/* Search Bar */}
              <div className="relative mb-8 animate-on-scroll">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles, tips, and stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-white/20 text-white h-12"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8 animate-on-scroll">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-emerald-500 text-black font-semibold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>

              {/* Featured Post */}
              {featuredPost && selectedCategory === 'all' && !searchTerm && (
                <div className="glassmorphism-card p-8 rounded-lg mb-12 animate-on-scroll">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-emerald-500 text-black text-sm font-semibold rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-emerald-400 text-sm rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                      <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <Button className="bg-emerald-500 hover:bg-emerald-600 w-fit">
                        Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Blog Posts Grid */}
              <div className="space-y-8">
                {filteredPosts.filter(post => !post.featured || selectedCategory !== 'all' || searchTerm).map((post, index) => (
                  <article key={post.id} className="glassmorphism-card p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300 animate-on-scroll">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-sm">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 hover:text-emerald-400 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                            Read More
                          </Button>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12 animate-on-scroll">
                  <h3 className="text-xl font-bold text-gray-400 mb-4">No articles found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search terms or category filter</p>
                  <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} variant="outline" className="border-emerald-500 text-emerald-400">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Recent Posts */}
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold text-emerald-400 mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-4 group cursor-pointer">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold text-emerald-400 mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-emerald-500 hover:text-black transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Stay Updated</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest stories, tips, and updates about Owu Falls delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 border-white/20 text-white"
                  />
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  No spam, unsubscribe anytime.
                </p>
              </div>

              {/* Quick Links */}
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/visit-info" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Planning Your Visit
                  </Link>
                  <Link to="/activities" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Activities & Tours
                  </Link>
                  <Link to="/gallery" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Photo Gallery
                  </Link>
                  <Link to="/booking" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Book Your Tour
                  </Link>
                  <Link to="/contact" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="glassmorphism-card p-12 rounded-lg text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Share Your Story</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Have you visited Owu Falls? We'd love to hear about your experience and share your story with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link to="/contact">Submit Your Story</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                <Link to="/booking">Plan Your Visit</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
