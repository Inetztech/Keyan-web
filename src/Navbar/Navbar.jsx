import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../aessts/Photos/logo.png';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/expertise' },
  { name: 'Industries', path: '/industries' },
  { name: 'Products', path: '/products' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans bg-white ${
        scrolled ? 'border-b border-slate-200/80 shadow-sm' : 'border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center no-underline focus:outline-none">
            <div className="bg-[#0b1329] px-3 py-2 rounded-lg flex items-center justify-center">
              <img
                src={Logo}
                alt="Keyan Logo"
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center px-3.5 py-2 text-[14px] font-medium transition-colors rounded-md !no-underline ${
                    active
                      ? '!text-blue-600 !font-semibold'
                      : '!text-slate-700 !hover:text-slate-900 !hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0b1329] hover:bg-blue-600 text-white font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-lg transition-all duration-200 shadow-sm no-underline group"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2.5 px-3 text-sm font-medium rounded-lg no-underline ${
                isActive(link.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#0b1329] text-white font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-lg no-underline w-full"
            >
              Let's Talk
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;