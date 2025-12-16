import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProcessStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep = ({ number, icon, title, description, delay }: ProcessStepProps) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-accent transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>

        <div className="relative flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="text-accent">
                {icon}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-bold text-accent/60">STEP {number}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      icon: <Search size={40} />,
      title: 'Discovery',
      description:
        'Deep-dive on goals, existing portfolio, risk tolerance, and what matters most to you.',
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Design',
      description:
        'Propose holistic plan tailored to your objectives with clear asset allocation strategy.',
    },
    {
      icon: <Rocket size={40} />,
      title: 'Implementation',
      description:
        'Open accounts, execute allocations, set up reporting — making the plan a reality.',
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Monitor & Refine',
      description:
        'Quarterly reviews, tactical tilts, annual goal realignment to keep you on track.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm font-bold text-accent tracking-widest">HOW WE WORK</span>
              <div className="h-px w-12 bg-accent"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary">
            A Proven <span className="bg-gradient-to-r from-yellow-400 via-accent to-yellow-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Four strategic phases designed to transform your financial future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              number={(index + 1).toString()}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={index * 150}
            />
          ))}
        </div>

        <div className="flex flex-col items-center space-y-8 mt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full"></div>
            <div className="relative bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl px-10 py-5 inline-flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse delay-150"></div>
              </div>
              <span className="text-primary font-bold text-lg">
                99% client retention since inception
              </span>
            </div>
          </div>

          <Button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="group bg-accent hover:bg-accent/90 text-primary font-bold px-12 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/25"
          >
            <span className="flex items-center space-x-2">
              <span>Start Your Journey</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection