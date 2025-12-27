import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-main.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant hospitality space showcasing HungryDuck excellence"
          className="w-full h-full object-cover transition-transform duration-100"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="animate-fade-up opacity-0">
            <span className="inline-block px-4 py-2 bg-terracotta/20 backdrop-blur-sm rounded-full text-terracotta-light text-sm font-medium mb-6">
              Turnkey Hospitality Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-terracotta-light leading-tight mb-6 animate-fade-up opacity-0 delay-100">
            Envision. Evolve. Excel.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-sand-dark/90 leading-relaxed mb-10 max-w-2xl animate-fade-up opacity-0 delay-200">
            Creating world-class hotels, restaurants, nightclubs, and resorts — end to end.
            From concept to completion, we deliver exceptional hospitality experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-300">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2" size={18} />
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
