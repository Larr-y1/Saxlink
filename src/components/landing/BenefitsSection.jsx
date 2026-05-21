
import { motion } from 'framer-motion';
import { Users, Music, Zap, Shield, TrendingUp, Globe, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    category: "For Clients",
    description: "SaxLink benefits clients by making live music booking easier, faster, and more reliable.",
    color: "primary",
    items: [
      { icon: Zap, text: "Faster booking process" },
      { icon: Shield, text: "Reliable and verified performers" },
      { icon: Users, text: "Easy management of events" },
      { icon: CheckCircle2, text: "Structured and convenient" }
    ]
  },
  {
    category: "For Musicians",
    description: "Helping musicians gain fair access to opportunities, visibility, and professional growth.",
    color: "accent",
    items: [
      { icon: Globe, text: "Increased visibility" },
      { icon: Music, text: "Fair access to opportunities" },
      { icon: TrendingUp, text: "Professional growth tools" },
      { icon: CheckCircle2, text: "Managed bookings & schedules" }
    ]
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black text-primary uppercase tracking-[0.6em] mb-4 block"
          >
            The SaxLink Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-black mb-6 text-foreground dark:text-white"
          >
            Empowering the <br />
            <span className="italic font-light text-primary/80">Live Music Ecosystem.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.category}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative flex flex-col bg-white dark:bg-card/40 backdrop-blur-xl border border-primary/10 rounded-[3.5rem] p-10 md:p-14 premium-shadow hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-grow bg-primary/20" />
                  <h3 className="text-2xl font-bold text-primary whitespace-nowrap">{benefit.category}</h3>
                </div>
                
                <p className="text-xl md:text-2xl mb-12 text-foreground/90 leading-relaxed font-medium md:font-light italic">
                  "{benefit.description}"
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-auto">
                  {benefit.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-secondary dark:bg-white/5 flex items-center justify-center group-hover/item:bg-primary/10 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm md:text-base font-semibold text-foreground/70 group-hover/item:text-primary transition-colors">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative side number */}
              <div className="absolute top-10 right-10 text-9xl font-black text-primary/[0.03] pointer-events-none select-none">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
