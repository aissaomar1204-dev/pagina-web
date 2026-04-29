import AnimatedShaderHero from '@/components/ui/animated-shader-hero';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const socialProof = (
  <div className="flex flex-wrap justify-center gap-8 opacity-60 hover:opacity-90 transition-opacity duration-500">
    {['Shopify', 'Meta Ads', 'Google Ads', 'Klaviyo', 'TikTok Ads'].map((tool) => (
      <span key={tool} className="text-base font-bold text-white/70 tracking-wide">
        {tool}
      </span>
    ))}
  </div>
);

export const Hero = () => (
  <AnimatedShaderHero
    trustBadge={{
      text: 'Especialistas en E-commerce — Tienda + Portal exclusivo + Agente IA',
      icons: ['✦'],
    }}
    headline={{
      line1: 'Landing Pages que',
      line2: 'venden de verdad.',
    }}
    subtitle="Construimos tiendas de alto rendimiento con tu propio portal de control y un agente de IA que trabaja por ti 24/7."
    buttons={{
      primary: {
        text: 'Ver planes y precios',
        onClick: () => scrollTo('pricing'),
      },
      secondary: {
        text: 'Solicita una demo gratuita',
        onClick: () => scrollTo('contact'),
      },
    }}
    footerContent={socialProof}
  />
);
