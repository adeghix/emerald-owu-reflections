
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User, ChevronDown } from 'lucide-react';
import WaterfallLogo from './WaterfallLogo';
import AuthModal from './AuthModal';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Visit Info', path: '/visit-info' },
    { name: 'Activities', path: '/activities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="transition-transform hover:scale-105">
              <WaterfallLogo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                    location.pathname === item.path ? 'text-emerald-400' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* User Profile & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* User Profile Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-white hover:text-emerald-400"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {user ? 'Profile' : 'Account'}
                  </span>
                  <ChevronDown className="w-3 h-3" />
                </Button>

                {isProfileOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 glassmorphism-card p-2 z-50">
                    {user ? (
                      <>
                        <div className="px-3 py-2 text-sm text-emerald-400">
                          Welcome back!
                        </div>
                        <hr className="border-white/10 my-2" />
                        <Link
                          to="/booking"
                          className="block px-3 py-2 text-sm hover:bg-white/10 rounded"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          My Bookings
                        </Link>
                        <button className="w-full text-left px-3 py-2 text-sm hover:bg-white/10 rounded">
                          Settings
                        </button>
                        <hr className="border-white/10 my-2" />
                        <button 
                          className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-white/10 rounded"
                          onClick={() => setUser(null)}
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setIsAuthModalOpen(true);
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm hover:bg-white/10 rounded"
                        >
                          Sign In
                        </button>
                        <button
                          onClick={() => {
                            setIsAuthModalOpen(true);
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm hover:bg-white/10 rounded"
                        >
                          Sign Up
                        </button>
                        <hr className="border-white/10 my-2" />
                        <button className="w-full text-left px-3 py-2 text-sm text-emerald-400 hover:bg-white/10 rounded">
                          Continue as Guest
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white hover:text-emerald-400"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 glassmorphism-card p-4 animate-slide-in-right">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-emerald-400 py-2 ${
                      location.pathname === item.path ? 'text-emerald-400' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={(userData) => setUser(userData)}
      />
    </>
  );
};

export default Navbar;
