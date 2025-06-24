
import React, { useState } from 'react';
import { Calendar, Clock, User, Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'travel-tips', name: 'Travel Tips' },
    { id: 'photography', name: 'Photography' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'culture', name: 'Culture' },
    { id: 'adventure', name: 'Adventure' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Photographing Owu Falls",
      excerpt: "Master the art of waterfall photography with tips from professional photographers who know the best angles, lighting, and equipment for capturing Owu Falls.",
      content: "Photographing Owu Falls requires careful planning and the right techniques...",
      author: "Sarah Johnson",
      date: "2024-07-15",
      readTime: "8 min read",
      category: "photography",
      image: "/placeholder.svg",
      tags: ["photography", "tips", "equipment", "techniques"],
      featured: true
    },
    {
      id: 2,
      title: "Best Hiking Trails Around Owu Falls",
      excerpt: "Discover the various hiking trails that lead to spectacular viewpoints of Nigeria's tallest waterfall, from easy family walks to challenging adventures.",
      content: "The trails around Owu Falls offer something for every fitness level...",
      author: "Michael Adebayo",
      date: "2024-07-10",
      readTime: "6 min read",
      category: "travel-tips",
      image: "/placeholder.svg",
      tags: ["hiking", "trails", "adventure", "fitness"]
    },
    {
      id: 3,
      title: "Wildlife Spotting: Birds of Owu Falls",
      excerpt: "Learn about the 50+ bird species that call the Owu Falls area home, including rare tropical birds and seasonal migrants.",
      content: "The rich ecosystem around Owu Falls supports an incredible diversity of bird life...",
      author: "Dr. Elizabeth Okoro",
      date: "2024-07-05",
      readTime: "10 min read",
      category: "wildlife",
      image: "/placeholder.svg",
      tags: ["birds", "wildlife", "conservation", "nature"]
    },
    {
      id: 4,
      title: "Cultural Significance of Owu Falls",
      excerpt: "Explore the deep cultural and spiritual importance of Owu Falls to local Yoruba communities and its role in traditional ceremonies.",
      content: "For centuries, Owu Falls has held profound spiritual significance...",
      author: "Professor Adunni Adebola",
      date: "2024-06-28",
      readTime: "12 min read",
      category: "culture",
      image: "/placeholder.svg",
      tags: ["culture", "history", "traditions", "yoruba"]
    },
    {
      id: 5,
      title: "Planning Your First Visit to Owu Falls",
      excerpt: "Everything first-time visitors need to know about planning the perfect trip to Nigeria's tallest waterfall, from what to pack to when to go.",
      content: "Planning your first visit to Owu Falls can seem overwhelming...",
      author: "James Okafor",
      date: "2024-06-20",
      readTime: "7 min read",
      category: "travel-tips",
      image: "/placeholder.svg",
      tags: ["planning", "first-visit", "tips", "preparation"]
    },
    {
      id: 6,
      title: "Adventure Activities for Thrill Seekers",
      excerpt: "From challenging rock climbing to overnight camping adventures, discover the most exciting activities for adrenaline junkies at Owu Falls.",
      content: "For those seeking adventure beyond the standard hiking trails...",
      author: "Adventure Team",
      date: "2024-06-15",
      readTime: "9 min read",
      category: "adventure",
      image: "/placeholder.svg",
      tags: ["adventure", "climbing", "camping", "extreme-sports"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Owu Falls Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stories, tips, and insights from visitors and experts who know Owu Falls best
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-12 animate-fade-in">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-white/20 text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-emerald-500 text-black'
                      : 'glassmorphism text-white hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'all' && !searchTerm && (
            <div className="mb-16 animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6 text-emerald-400">Featured Article</h2>
              <div className="glassmorphism-card p-8 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm capitalize">
                        {featuredPost.category.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-emerald-400 mb-4">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <Button className="bg-emerald-500 hover:bg-emerald-600">
                      Read Full Article
                    </Button>
                  </div>
                  
                  <div>
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regularPosts.map((post) => (
              <article key={post.id} className="glassmorphism-card p-6 rounded-lg hover:scale-105 transition-transform duration-300 animate-on-scroll">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="mb-3">
                  <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm capitalize">
                    {post.category.replace('-', ' ')}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-emerald-400 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-black/50 text-gray-400 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                  Read More
                </Button>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No Articles Found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or browse all categories.
              </p>
            </div>
          )}

          {/* Newsletter Signup */}
          <section className="glassmorphism-card p-8 rounded-lg text-center animate-on-scroll">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest travel tips, photography guides, 
              and stories from Owu Falls delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-white/20 text-white"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
