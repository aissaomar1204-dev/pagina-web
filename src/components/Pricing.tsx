import { Check, ArrowRight, Store, Clock } from 'lucide-react';

interface Plan {
  name: string;
  setup: string;
  stores: string;
  priceOld?: string;
  priceNow?: string;
  priceCustom?: string;
  period?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  enterprise?: boolean;
  launch?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Junior',
    setup: '150€ setup único',
    stores: '1 tienda/mes',
    priceOld: '67.99€',
    priceNow: '37.99€',
    period: '/mes',
    launch: true,
    features: [
      'Landing page de producto optimizada',
      'Agente IA de soporte básico',
      'Portal de control con métricas esenciales',
      'Soporte por email',
    ],
    cta: 'Empezar ahora',
    ctaHref: '#contact',
  },
  {
    name: 'Advanced',
    setup: '250€ setup único',
    stores: '5 tiendas/mes',
    priceOld: '97€',
    priceNow: '67.99€',
    period: '/mes',
    launch: true,
    features: [
      'Landing page premium + páginas de colección',
      'Agente IA con recuperación de carritos',
      'Portal de control completo (ventas, leads, campañas)',
      'Automatizaciones email y SMS',
      'Seguimiento de conversiones',
      'Soporte prioritario',
    ],
    cta: 'Empezar ahora',
    ctaHref: '#contact',
    featured: true,
    badge: 'Best Seller',
  },
  {
    name: 'Titan',
    setup: '500€ setup único',
    stores: '10 tiendas/mes',
    priceOld: '297€',
    priceNow: '147€',
    period: '/mes',
    launch: true,
    features: [
      'Funnel completo multi-página',
      'Agente IA avanzado con pipelines de ventas',
      'Portal con CRM, pipelines y reportes custom',
      'Integración Meta & Google Ads',
      'Dashboard de métricas en tiempo real',
      'Soporte dedicado WhatsApp',
    ],
    cta: 'Empezar ahora',
    ctaHref: '#contact',
  },
  {
    name: 'Enterprise',
    setup: 'Para marcas escalando a +100k/mes',
    stores: 'Volumen personalizado',
    priceCustom: 'Custom Quote',
    features: [
      'Infraestructura Shopify Plus',
      'Portal white-label con tu marca',
      'Equipo dedicado de ingeniería',
      'Integraciones ERP / 3PL',
      'SLA garantizado 99.9%',
      'Account Manager exclusivo',
    ],
    cta: 'Contactar',
    ctaHref: '#contact',
    enterprise: true,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Planes y <span className="text-primary">precios.</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance mb-6">
            Elige el plan que se adapta a la etapa de tu negocio. Sin permanencia.
          </p>
          {/* Launch banner */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 border border-amber-400/30 rounded-full text-sm font-medium text-amber-700 dark:text-amber-400">
            <Clock size={14} className="shrink-0" />
            Precios de lanzamiento para primeros clientes — rebajados de por vida mientras dure esta oferta
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? 'bg-primary/5 border-2 border-primary shadow-xl shadow-primary/10'
                  : plan.enterprise
                  ? 'bg-secondary/20 border border-border/50'
                  : 'bg-secondary/20 border border-border/50 hover:border-primary/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{plan.setup}</p>

                {plan.priceCustom ? (
                  <div className="text-3xl font-bold text-foreground">{plan.priceCustom}</div>
                ) : (
                  <div>
                    {plan.priceOld && (
                      <span className="text-sm text-muted-foreground line-through mr-2">
                        {plan.priceOld}
                      </span>
                    )}
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-bold ${plan.featured ? 'text-primary' : 'text-foreground'}`}>
                        {plan.priceNow}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground text-sm mb-1">{plan.period}</span>
                      )}
                    </div>
                    {plan.launch && (
                      <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 border border-amber-400/25 rounded-full">
                        <Clock size={11} className="text-amber-600 dark:text-amber-400 shrink-0" />
                        <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">Precio de lanzamiento</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Tiendas por mes — highlighted */}
              <div className={`flex items-center gap-2 px-3 py-2.5 rounded-xl mb-6 ${
                plan.featured ? 'bg-primary/10' : 'bg-foreground/5'
              }`}>
                <Store
                  size={15}
                  className={`shrink-0 ${plan.featured ? 'text-primary' : 'text-foreground/60'}`}
                />
                <span className={`text-sm font-semibold ${plan.featured ? 'text-primary' : 'text-foreground'}`}>
                  {plan.stores}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${plan.featured ? 'text-primary' : 'text-foreground'}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  plan.featured
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25'
                    : plan.enterprise
                    ? 'border border-border text-foreground hover:border-primary/30 hover:text-primary'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
