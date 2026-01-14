import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";

const Dental = () => {
  const { language, isRTL, t } = useLanguage();
  const ArrowBack = isRTL ? ArrowRight : ArrowLeft;

  const procedures = [
    {
      name: language === "en" ? "Dental Implants" : "زراعة الأسنان",
      description: language === "en" 
        ? "Permanent tooth replacement with natural-looking results using titanium implants."
        : "استبدال دائم للأسنان بنتائج طبيعية المظهر باستخدام غرسات التيتانيوم.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Veneers" : "القشور",
      description: language === "en" 
        ? "Transform your smile with custom porcelain veneers for a flawless appearance."
        : "حوّل ابتسامتك مع قشور البورسلين المخصصة للحصول على مظهر مثالي.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Teeth Whitening" : "تبييض الأسنان",
      description: language === "en" 
        ? "Professional whitening treatments for a brighter, more confident smile."
        : "علاجات تبييض احترافية لابتسامة أكثر إشراقاً وثقة.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Orthodontics" : "تقويم الأسنان",
      description: language === "en" 
        ? "Straighten your teeth with modern braces and invisible aligners."
        : "قوّم أسنانك مع التقويم الحديث والمصففات الشفافة.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Root Canal" : "علاج الجذور",
      description: language === "en" 
        ? "Pain-free root canal therapy with advanced techniques and technology."
        : "علاج قناة الجذر بدون ألم مع تقنيات وتكنولوجيا متقدمة.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Dental Crowns" : "تيجان الأسنان",
      description: language === "en" 
        ? "Restore damaged teeth with premium quality dental crowns."
        : "استعد الأسنان التالفة بتيجان أسنان عالية الجودة.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
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
              <span className="gold-text">{t.services.dental.title}</span>
            </h1>
            <p className="text-xl text-foreground/60">
              {t.services.dental.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
            {language === "en" ? "Our Services" : "خدماتنا"}
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
              {language === "en" ? "Perfect Your Smile" : "كمّل ابتسامتك"}
            </h2>
            <p className="text-foreground/60 mb-6 max-w-xl mx-auto">
              {language === "en" 
                ? "Schedule a dental consultation for a comprehensive smile assessment."
                : "حدد موعداً لاستشارة الأسنان لتقييم شامل للابتسامة."
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

export default Dental;
