import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: 'Servicios', href: '#services' },
      { label: 'Precios', href: '#pricing' },
      { label: 'Sectores', href: '#sectors' },
      { label: 'Proceso', href: '#process' },
      { label: 'Contacto', href: '#contact' },
    ],
    legal: [
      { label: 'Términos', href: '/terminos' },
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Cookies', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-6 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-semibold tracking-tight">Anubis AI</span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Tu tienda, tu portal de control
              <br />
              y tu agente de IA — todo en uno.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Compañía</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="#contact" className="hover:text-foreground transition-colors">
                  contacto@anubisaiagency.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+34602382912" className="hover:text-foreground transition-colors">
                  +34 602 38 29 12
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Málaga, ES</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Anubis AI Agency. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/aissa-omar-el-hammouti-chachoui-78a965255/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/anubisaiagency/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
