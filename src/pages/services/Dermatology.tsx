import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";

const Dermatology = () => {
  const { language, isRTL, t } = useLanguage();
  const ArrowBack = isRTL ? ArrowRight : ArrowLeft;

  const procedures = [
    {
      name: language === "en" ? "Botox & Fillers" : "البوتوكس والفيلر",
      description: language === "en" 
        ? "Smooth wrinkles and restore volume with our premium injectables."
        : "تنعيم التجاعيد واستعادة الحجم مع حقننا الفاخرة.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Chemical Peels" : "التقشير الكيميائي",
      description: language === "en" 
        ? "Reveal brighter, smoother skin with customized peel treatments."
        : "اكشف عن بشرة أكثر إشراقاً ونعومة مع علاجات التقشير المخصصة.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Laser Treatments" : "علاجات الليزر",
      description: language === "en" 
        ? "Advanced laser technology for skin resurfacing and rejuvenation."
        : "تقنية الليزر المتقدمة لتجديد سطح البشرة وتجديدها.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Acne Treatment" : "علاج حب الشباب",
      description: language === "en" 
        ? "Comprehensive solutions for clear, healthy skin."
        : "حلول شاملة لبشرة صافية وصحية.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "Skin Rejuvenation" : "تجديد البشرة",
      description: language === "en" 
        ? "Restore youthful glow with our advanced rejuvenation protocols."
        : "استعد توهج الشباب مع بروتوكولات التجديد المتقدمة لدينا.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: language === "en" ? "PRP Therapy" : "علاج البلازما",
      description: language === "en" 
        ? "Platelet-rich plasma therapy for natural skin healing and hair restoration."
        : "علاج البلازما الغنية بالصفائح الدموية للشفاء الطبيعي للبشرة واستعادة الشعر.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
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
              <span className="gold-text">{t.services.dermatology.title}</span>
            </h1>
            <p className="text-xl text-foreground/60">
              {t.services.dermatology.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
            {language === "en" ? "Our Treatments" : "علاجاتنا"}
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
              {language === "en" ? "Reveal Your Best Skin" : "اكشف عن أفضل بشرتك"}
            </h2>
            <p className="text-foreground/60 mb-6 max-w-xl mx-auto">
              {language === "en" 
                ? "Book a skin consultation with our dermatology experts today."
                : "احجز استشارة جلدية مع خبرائنا اليوم."
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

export default Dermatology;
