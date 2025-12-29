import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading screen

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Helmet>
        <title>HungryDuck | Hospitality Solutions - Hotels, Restaurants, Nightclubs</title>
        <meta 
          name="description" 
          content="HungryDuck delivers end-to-end hospitality solutions. From concept to completion, we design, build, launch and maintain world-class hotels, restaurants, nightclubs and resorts." 
        />
        <meta name="keywords" content="hospitality solutions, hotel development, restaurant setup, nightclub design,   projects, hospitality consulting" />
        <link rel="canonical" href="https://hungryduck.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="HungryDuck |   Hospitality Solutions" />
        <meta property="og:description" content="We Design. We Build. We Launch. We Maintain. Creating world-class hospitality experiences end to end." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HungryDuck",
            "description": "Full-service hospitality solutions company specializing in   projects",
            "url": "https://hungryduck.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-234-567-890",
              "contactType": "customer service"
            },
            "sameAs": []
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
    </>
  );
};

export default Index;
