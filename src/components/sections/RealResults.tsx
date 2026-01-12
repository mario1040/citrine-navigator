import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, Smile, Hand, CircleDot } from "lucide-react";

interface Category {
  id: string;
  labelEn: string;
  labelAr: string;
  icon: React.ReactNode;
  beforeImage: string;
  afterImage: string;
}

const categories: Category[] = [
  {
    id: "jawline",
    labelEn: "Jawline",
    labelAr: "خط الفك",
    icon: <Smile className="w-6 h-6" />,
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
  },
  {
    id: "hipDips",
    labelEn: "Hip Dips",
    labelAr: "تجويف الورك",
    icon: <CircleDot className="w-6 h-6" />,
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80",
  },
  {
    id: "buttocks",
    labelEn: "Buttocks Augmentation",
    labelAr: "تكبير الأرداف",
    icon: <CircleDot className="w-6 h-6" />,
    beforeImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    id: "hands",
    labelEn: "Hands Rejuvenation",
    labelAr: "تجديد اليدين",
    icon: <Hand className="w-6 h-6" />,
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&q=80",
  },
  {
    id: "lips",
    labelEn: "Lips",
    labelAr: "الشفاه",
    icon: <Smile className="w-6 h-6" />,
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
  },
];

const RealResults = () => {
  const { language, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    const currentIndex = categories.findIndex(c => c.id === activeCategory.id);
    const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    setActiveCategory(categories[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = categories.findIndex(c => c.id === activeCategory.id);
    const nextIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    setActiveCategory(categories[nextIndex]);
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {language === "en" ? "Real Results" : "نتائج حقيقية"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "See the transformations our specialists have achieved for our patients"
              : "شاهد التحولات التي حققها متخصصونا لمرضانا"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Before/After Display */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
              {/* Images Container */}
              <div className="relative aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 grid grid-cols-2"
                  >
                    {/* Before Image */}
                    <div className="relative">
                      <img
                        src={activeCategory.beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold uppercase tracking-wider">
                        {language === "en" ? "Before" : "قبل"}
                      </span>
                    </div>
                    {/* After Image */}
                    <div className="relative">
                      <img
                        src={activeCategory.afterImage}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold uppercase tracking-wider">
                        {language === "en" ? "After" : "بعد"}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Divider Line */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-primary -translate-x-1/2 z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 text-navy-dark" />
                    <ChevronRight className="w-4 h-4 text-navy-dark" />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {categories.map((cat, index) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeCategory.id === cat.id
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Category Grid */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                  activeCategory.id === category.id
                    ? "bg-navy-dark text-primary shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center transition-colors ${
                    activeCategory.id === category.id
                      ? "bg-primary/20"
                      : "bg-muted-foreground/10"
                  }`}
                >
                  {category.icon}
                </div>
                <span className="font-medium text-start">
                  {language === "en" ? category.labelEn : category.labelAr}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealResults;
