import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Scissors, Sparkles, SmilePlus, ArrowRight, ArrowLeft } from "lucide-react";

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Scissors,
      title: t.services.plasticSurgery.title,
      description: t.services.plasticSurgery.description,
      href: "/services/plastic-surgery",
    },
    {
      icon: Sparkles,
      title: t.services.dermatology.title,
      description: t.services.dermatology.description,
      href: "/services/dermatology",
    },
    {
      icon: SmilePlus,
      title: t.services.dental.title,
      description: t.services.dental.description,
      href: "/services/dental",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="gold-text">{t.services.title}</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={service.href}
                className="group block h-full luxury-card p-8 hover:border-primary/50 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <span>{t.services.learnMore}</span>
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
