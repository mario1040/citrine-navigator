import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Scissors, Sparkles, SmilePlus, ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import PaymentModal from "@/components/payment/PaymentModal";

interface ServiceItem {
  id: string;
  name: string;
  nameAr: string;
  price: number;
}

const Services = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { t, language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      id: 'plastic-surgery',
      icon: Scissors,
      title: t.services.plasticSurgery.title,
      titleAr: 'جراحة التجميل',
      description: t.services.plasticSurgery.description,
      href: "/services/plastic-surgery",
      price: 15000,
      procedures: language === "en" 
        ? ["Rhinoplasty", "Facelift", "Liposuction", "Breast Surgery", "Tummy Tuck"]
        : ["تجميل الأنف", "شد الوجه", "شفط الدهون", "جراحة الثدي", "شد البطن"],
    },
    {
      id: 'dermatology',
      icon: Sparkles,
      title: t.services.dermatology.title,
      titleAr: 'الأمراض الجلدية',
      description: t.services.dermatology.description,
      href: "/services/dermatology",
      price: 2500,
      procedures: language === "en" 
        ? ["Botox & Fillers", "Chemical Peels", "Laser Treatments", "Acne Treatment", "Skin Rejuvenation"]
        : ["البوتوكس والفيلر", "التقشير الكيميائي", "علاجات الليزر", "علاج حب الشباب", "تجديد البشرة"],
    },
    {
      id: 'dental',
      icon: SmilePlus,
      title: t.services.dental.title,
      titleAr: 'طب الأسنان',
      description: t.services.dental.description,
      href: "/services/dental",
      price: 3500,
      procedures: language === "en" 
        ? ["Dental Implants", "Veneers", "Teeth Whitening", "Orthodontics", "Root Canal"]
        : ["زراعة الأسنان", "القشور", "تبييض الأسنان", "تقويم الأسنان", "علاج الجذور"],
    },
  ];

  const handleBookNow = (service: typeof services[0], e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedService({
      id: service.id,
      name: service.title,
      nameAr: service.titleAr,
      price: service.price,
    });
    setPaymentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="gold-text">{t.services.title}</span>
            </h1>
            <p className="text-xl text-foreground/60">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block luxury-card p-8 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h2>
                        <span className="px-3 py-1 text-sm font-semibold bg-primary/20 text-primary rounded-full">
                          {language === 'ar' ? 'من' : 'From'} {service.price.toLocaleString()} {language === 'ar' ? 'ج.م' : 'EGP'}
                        </span>
                      </div>
                      <p className="text-foreground/60 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.procedures.map((procedure, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-secondary rounded-full text-foreground/70"
                          >
                            {procedure}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                      <Button
                        onClick={(e) => handleBookNow(service, e)}
                        className="luxury-button"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                      </Button>
                      <div className="flex items-center gap-2 text-primary justify-center">
                        <span className="text-sm font-medium">
                          {t.services.learnMore}
                        </span>
                        <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Payment Modal */}
      {selectedService && (
        <PaymentModal
          isOpen={paymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default Services;
