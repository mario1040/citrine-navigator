import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";

const PlasticSurgery = () => {
  const { language, isRTL, t } = useLanguage();
  const ArrowBack = isRTL ? ArrowRight : ArrowLeft;

  const procedures = [
    {
      name: language === "en" ? "Rhinoplasty" : "تجميل الأنف",
      description: language === "en" 
        ? "Reshape and refine your nose for natural, harmonious results."
        : "إعادة تشكيل وتحسين أنفك للحصول على نتائج طبيعية ومتناغمة.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Facelift" : "شد الوجه",
      description: language === "en" 
        ? "Turn back the clock with our advanced facial rejuvenation techniques."
        : "ارجع بالزمن مع تقنيات تجديد الوجه المتقدمة لدينا.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Liposuction" : "شفط الدهون",
      description: language === "en" 
        ? "Sculpt your body with precise fat removal and contouring."
        : "نحت جسمك بإزالة الدهون والتحديد الدقيق.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Breast Surgery" : "جراحة الثدي",
      description: language === "en" 
        ? "Augmentation, reduction, and lift procedures for your ideal silhouette."
        : "إجراءات التكبير والتصغير والشد للحصول على صورتك المثالية.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Tummy Tuck" : "شد البطن",
      description: language === "en" 
        ? "Achieve a flatter, more toned abdomen with abdominoplasty."
        : "احصل على بطن مسطح ومشدود مع شد البطن.",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Blepharoplasty" : "جراحة الجفون",
      description: language === "en" 
        ? "Rejuvenate your eyes with eyelid surgery for a refreshed look."
        : "جدد عينيك مع جراحة الجفون للحصول على مظهر منتعش.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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

      {/* Service Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
            {language === "en" ? "Our Procedures" : "إجراءاتنا"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((procedure, index) => (
              <ServiceCard
                key={index}
                title={procedure.name}
                description={procedure.description}
                image={procedure.image}
                videoUrl={procedure.videoUrl}
              />
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
