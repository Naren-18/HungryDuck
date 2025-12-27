import { CheckCircle2, Lightbulb, ShieldCheck, Award, Target } from 'lucide-react';

const About = () => {
  const values = [
    { Icon: Lightbulb, title: 'Innovation', desc: 'Pushing boundaries in hospitality design' },
    { Icon: ShieldCheck, title: 'Integrity', desc: 'Transparent and honest partnerships' },
    { Icon: Award, title: 'Quality', desc: 'Uncompromising attention to detail' },
    { Icon: Target, title: 'Excellence', desc: 'Operational mastery at every level' },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-terracotta font-medium text-sm uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Next-Generation Hospitality{' '}
              <span className="text-terracotta">Development</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              HungryDuck is a full-service hospitality solutions company specializing in 
              turnkey projects for hotels, restaurants, nightclubs, cafés, and resorts. 
              We bring every vision to life — from concept and design to execution, setup, 
              launch, and long-term maintenance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With deep industry expertise, a skilled technical team, and a 360-degree 
              delivery model, we ensure that every project is executed with precision, 
              functionality, and style. We help entrepreneurs and brands launch high-performing 
              hospitality spaces that stand out in experience, efficiency, and profitability.
            </p>

            {/* Checklist */}
            <div className="space-y-3">
              {[
                'Complete 360° hospitality solutions',
                'From concept to long-term maintenance',
                'On-time, on-budget project delivery',
                'Strong industry network & vendor partnerships',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-terracotta flex-shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`p-6 rounded-2xl bg-card border border-border hover:border-terracotta/30 hover:shadow-medium transition-all duration-300 ${
                  index === 1 || index === 2 ? 'lg:translate-y-8' : ''
                }`}
              >
                <div className="mb-4 p-3 bg-terracotta/10 rounded-xl w-fit">
                  <value.Icon className="text-terracotta" size={32} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
            <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              To empower hospitality entrepreneurs and brands by delivering innovative, 
              efficient, and sustainable turnkey solutions that transform ideas into 
              profitable, memorable experiences.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-accent text-accent-foreground">
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-accent-foreground/90 leading-relaxed">
              To be a global leader in turnkey hospitality development, known for 
              exceptional quality, creativity, and operational excellence in every 
              project we undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
