import { ArrowUpRight, Wrench, Building2, UtensilsCrossed, Music, Settings } from 'lucide-react';
import hotelBedroomImg from '@/assets/hotel-bedroom.jpg';
import restaurantDiningImg from '@/assets/restaurant-dining.jpg';
import nightclubImg from '@/assets/service-nightclub.jpg';
import cafeImg from '@/assets/service-cafe.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      Icon: Wrench,
      title: '  Hospitality Projects',
      description: 'End-to-end execution: concept → design → build → setup → launch → maintenance.',
      features: [
        'Concept development',
        'Architecture & interior design',
        'MEP & civil work',
        'Licensing & compliance',
        'Staff hiring & training',
        'Go-live management',
      ],
      image: hotelBedroomImg,
    },
    {
      id: 2,
      Icon: Building2,
      title: 'Hotels & Resorts Development',
      description: 'Boutique hotels, business hotels, luxury resorts — built for comfort & operational excellence.',
      features: [
        'Space planning',
        'Room & facility design',
        'Guest experience engineering',
        'Pool, spa & landscape design',
      ],
      image: cafeImg,
    },
    {
      id: 3,
      Icon: UtensilsCrossed,
      title: 'Restaurants & Cafés Setup',
      description: 'High-performance dining spaces with optimized kitchens, modern interiors, and seamless workflows.',
      features: [
        'Kitchen workflow engineering',
        'F&B concept planning',
        'Interior design & ambiance',
        'Compliance and food safety',
      ],
      image: restaurantDiningImg,
    },
    {
      id: 4,
      Icon: Music,
      title: 'Nightclubs & Lounges',
      description: 'High-energy entertainment spaces with premium acoustics, lighting, and bar engineering.',
      features: [
        'Sound & acoustics engineering',
        'Lighting & visual design',
        'Bar engineering',
        'VIP zoning & crowd flow',
      ],
      image: nightclubImg,
    },
  ];

  return (
    <section id="services" className="py-24 bg-sand-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-terracotta font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Hospitality{' '}
            <span className="text-terracotta">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we handle the complete lifecycle of hospitality setup
            with our   delivery model.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-terracotta/30 hover:shadow-strong transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-6 left-6 p-3 bg-terracotta/90 rounded-xl backdrop-blur-sm">
                  <service.Icon className="text-terracotta-light" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-terracotta transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    className="text-muted-foreground group-hover:text-terracotta group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    size={24}
                  />
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operations Card - Full Width */}
        <div className="mt-8 p-8 md:p-12 bg-primary rounded-3xl text-primary-foreground">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4 p-3 bg-terracotta-light/20 rounded-xl w-fit">
                <Settings className="text-terracotta-light" size={40} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Operations & Maintenance
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Our partnership doesn't end at launch. We ensure smooth business operations
                even after go-live with comprehensive support services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Facility maintenance',
                'Staff management',
                'Menu engineering',
                'Vendor coordination',
                'Inventory oversight',
                'Revenue optimization',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-primary-foreground/90"
                >
                  <div className="w-2 h-2 bg-terracotta-light rounded-full" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
