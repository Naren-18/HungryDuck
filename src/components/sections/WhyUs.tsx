import { 
  Layers, 
  Target, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users 
} from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: Layers,
      title: 'One-Stop Solution',
      description: 'Complete hospitality development under one roof — from design to maintenance.',
    },
    {
      icon: Target,
      title: 'Customized Designs',
      description: 'Every project crafted to match your brand identity, audience, and business goals.',
    },
    {
      icon: Shield,
      title: 'Quality & Compliance',
      description: 'Projects meeting the highest standards of safety, hygiene, and regulations.',
    },
    {
      icon: TrendingUp,
      title: 'Operational Excellence',
      description: 'We don\'t just build — we help you run spaces efficiently and profitably.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Transparent communication and reporting with guaranteed timelines.',
    },
    {
      icon: Users,
      title: 'Strong Network',
      description: 'Deep industry knowledge and extensive vendor partnerships worldwide.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-terracotta font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            The HungryDuck{' '}
            <span className="text-terracotta">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Partner with a team that understands hospitality from every angle — 
            design, engineering, operations, and business success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-terracotta/40 hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-terracotta/10 flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:scale-110 transition-all duration-300">
                <reason.icon 
                  className="text-terracotta group-hover:text-primary-foreground transition-colors" 
                  size={28} 
                />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-terracotta to-terracotta-dark p-12 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Build Your Dream Hospitality Space?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together.
              Your success story starts here.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-terracotta font-semibold rounded-xl hover:bg-sand-light hover:scale-105 transition-all duration-300 shadow-strong"
            >
              Get in Touch
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
