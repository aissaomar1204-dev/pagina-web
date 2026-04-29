import { ArrowRight } from 'lucide-react';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

    {/* Dot-grid pattern */}
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />

    {/* Floating blue orbs — pure CSS, zero JS */}
    <div className="absolute top-[15%] left-[10%] w-[520px] h-[520px] rounded-full bg-blue-600/20 blur-[120px] animate-hero-float" />
    <div className="absolute bottom-[10%] right-[8%]  w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[100px] animate-hero-float-b" />
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] animate-hero-float-c" />

    {/* Edge fades so it blends into the white page below */}
    <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black to-transparent" />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 text-center pt-24 pb-16">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 border border-blue-300/20 rounded-full text-sm text-white/80 backdrop-blur-sm animate-fade-in opacity-0 [animation-fill-mode:forwards]">
          <span className="text-blue-400">✦</span>
          Especialistas en E-commerce — Tienda + Portal exclusivo + Agente IA
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white text-balance animate-fade-in-up opacity-0 [animation-delay:150ms] [animation-fill-mode:forwards]">
            Landing Pages que
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
            venden de verdad.
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto text-balance animate-fade-in-up opacity-0 [animation-delay:450ms] [animation-fill-mode:forwards]">
          Construimos tiendas de alto rendimiento con tu propio portal de control
          y un agente de IA que trabaja por ti 24/7.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
          <button
            onClick={() => scrollTo('pricing')}
            className="group flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
          >
            Ver planes y precios
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            Solicita una demo gratuita
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap justify-center gap-8 opacity-35 hover:opacity-65 transition-opacity duration-500 animate-fade-in-up opacity-0 [animation-delay:750ms] [animation-fill-mode:forwards]">
          {['Shopify', 'Meta Ads', 'Google Ads', 'Klaviyo', 'TikTok Ads'].map((t) => (
            <span key={t} className="text-xs font-bold text-white tracking-widest uppercase">
              {t}
            </span>
          ))}
        </div>

      </div>
    </div>
  </section>
);
