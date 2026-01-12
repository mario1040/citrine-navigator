import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const PlasticSurgery = () => {
  const { language, isRTL, t } = useLanguage();
  const ArrowBack = isRTL ? ArrowRight : ArrowLeft;

  const procedures = [
    {
      name: language === "en" ? "Rhinoplasty" : "تجميل الأنف",
      description: language === "en" 
        ? "Reshape and refine your nose for natural, harmonious results."
        : "إعادة تشكيل وتحسين أنفك للحصول على نتائج طبيعية ومتناغمة.",
    },
    {
      name: language === "en" ? "Facelift" : "شد الوجه",
      description: language === "en" 
        ? "Turn back the clock with our advanced facial rejuvenation techniques."
        : "ارجع بالزمن مع تقنيات تجديد الوجه المتقدمة لدينا.",
    },
    {
      name: language === "en" ? "Liposuction" : "شفط الدهون",
      description: language === "en" 
        ? "Sculpt your body with precise fat removal and contouring."
        : "نحت جسمك بإزالة الدهون والتحديد الدقيق.",
    },
    {
      name: language === "en" ? "Breast Surgery" : "جراحة الثدي",
      description: language === "en" 
        ? "Augmentation, reduction, and lift procedures for your ideal silhouette."
        : "إجراءات التكبير والتصغير والشد للحصول على صورتك المثالية.",
    },
    {
      name: language === "en" ? "Tummy Tuck" : "شد البطن",
      description: language === "en" 
        ? "Achieve a flatter, more toned abdomen with abdominoplasty."
        : "احصل على بطن مسطح ومشدود مع شد البطن.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowBack className="w-4 h-4" />
            <span>{language === "en" ? "Back to Services" : "العودة للخدمات"}</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="gold-text">{t.services.plasticSurgery.title}</span>
            </h1>
            <p className="text-xl text-foreground/60">
              {t.services.plasticSurgery.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
            {language === "en" ? "Our Procedures" : "إجراءاتنا"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {procedures.map((procedure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="luxury-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {procedure.name}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {procedure.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="luxury-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              {language === "en" ? "Ready to Transform?" : "مستعد للتحول؟"}
            </h2>
            <p className="text-foreground/60 mb-6 max-w-xl mx-auto">
              {language === "en" 
                ? "Schedule a consultation with our expert surgeons to discuss your goals."
                : "حدد موعداً للاستشارة مع جراحينا الخبراء لمناقشة أهدافك."
              }
            </p>
            <Link to="/contact-us" className="luxury-button inline-block">
              {language === "en" ? "Book Consultation" : "احجز استشارة"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlasticSurgery;
