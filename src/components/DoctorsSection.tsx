import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const DoctorsSection = () => {
  const { t, language } = useLanguage();

  const doctors = [
    {
      name: language === "en" ? "Dr. Sarah Al-Rashid" : "د. سارة الراشد",
      specialty: language === "en" ? "Plastic Surgery" : "الجراحة التجميلية",
      credentials: language === "en" ? "MD, FACS" : "دكتوراه في الطب",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
    },
    {
      name: language === "en" ? "Dr. Ahmed Hassan" : "د. أحمد حسن",
      specialty: language === "en" ? "Dermatology" : "طب الجلدية",
      credentials: language === "en" ? "MD, PhD" : "دكتوراه في الطب",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
    },
    {
      name: language === "en" ? "Dr. Layla Mahmoud" : "د. ليلى محمود",
      specialty: language === "en" ? "Dental Excellence" : "طب الأسنان",
      credentials: language === "en" ? "DDS, MSc" : "ماجستير طب أسنان",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
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
            <span className="gold-text">{t.doctors.title}</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t.doctors.subtitle}
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="luxury-card overflow-hidden">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 -mt-12 relative">
                  <div className="bg-card border border-border/50 rounded-lg p-4">
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-1">
                      {doctor.specialty}
                    </p>
                    <p className="text-foreground/50 text-xs">
                      {doctor.credentials}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
