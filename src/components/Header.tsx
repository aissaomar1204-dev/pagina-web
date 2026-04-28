import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const navLinks = [
    { name: 'Servicios', anchor: 'services' },
    { name: 'Precios',   anchor: 'pricing' },
    { name: 'Sectores',  anchor: 'sectors' },
    { name: 'Proceso',   anchor: 'process' },
    { name: 'Contacto',  anchor: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (isHome) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${anchor}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Anubis AI Logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-semibold tracking-tight hidden sm:block">
            Anubis<span className="text-primary">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isHome ? `#${link.anchor}` : `/#${link.anchor}`}
              onClick={(e) => handleNavClick(e, link.anchor)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="TU_ENLACE_GHL_AQUI"
            target="_blank"
            rel="noopener"
            className="px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
          >
            Acceso Clientes
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-border p-6 md:hidden animate-fade-in-up origin-top">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isHome ? `#${link.anchor}` : `/#${link.anchor}`}
                onClick={(e) => handleNavClick(e, link.anchor)}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="TU_ENLACE_GHL_AQUI"
              target="_blank"
              rel="noopener"
              className="px-4 py-3 bg-foreground text-background rounded-xl text-center font-medium hover:bg-foreground/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Acceso Clientes
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
