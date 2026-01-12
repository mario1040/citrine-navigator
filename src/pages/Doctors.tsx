import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Doctors = () => {
  const { t, language } = useLanguage();

  const doctors = [
    {
      name: language === "en" ? "Dr. Sarah Al-Rashid" : "د. سارة الراشد",
      specialty: language === "en" ? "Plastic & Reconstructive Surgery" : "الجراحة التجميلية والترميمية",
      credentials: language === "en" ? "MD, FACS, Board Certified" : "دكتوراه في الطب، معتمدة",
      bio: language === "en" 
        ? "With over 15 years of experience, Dr. Al-Rashid specializes in facial rejuvenation and body contouring procedures."
        : "مع أكثر من 15 عاماً من الخبرة، تتخصص الدكتورة الراشد في تجديد الوجه وإجراءات نحت الجسم.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
    },
    {
      name: language === "en" ? "Dr. Ahmed Hassan" : "د. أحمد حسن",
      specialty: language === "en" ? "Dermatology & Aesthetic Medicine" : "طب الجلدية والتجميل",
      credentials: language === "en" ? "MD, PhD in Dermatology" : "دكتوراه في طب الجلدية",
      bio: language === "en" 
        ? "A pioneer in non-invasive treatments, Dr. Hassan brings innovative solutions for skin health and beauty."
        : "رائد في العلاجات غير الجراحية، يقدم الدكتور حسن حلولاً مبتكرة لصحة البشرة وجمالها.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
    },
    {
      name: language === "en" ? "Dr. Layla Mahmoud" : "د. ليلى محمود",
      specialty: language === "en" ? "Cosmetic & Restorative Dentistry" : "طب الأسنان التجميلي والترميمي",
      credentials: language === "en" ? "DDS, MSc Prosthodontics" : "ماجستير طب الأسنان",
      bio: language === "en" 
        ? "Dr. Mahmoud creates stunning smile transformations using the latest in dental technology and artistry."
        : "تخلق الدكتورة محمود تحولات ابتسامة مذهلة باستخدام أحدث تقنيات طب الأسنان والفن.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
    },
    {
      name: language === "en" ? "Dr. Omar Khalil" : "د. عمر خليل",
      specialty: language === "en" ? "Plastic Surgery" : "الجراحة التجميلية",
      credentials: language === "en" ? "MD, FRCS (Plast)" : "دكتوراه في الجراحة",
      bio: language === "en" 
        ? "Specializing in rhinoplasty and breast surgery, Dr. Khalil is known for his natural-looking results."
        : "متخصص في تجميل الأنف وجراحة الثدي، يشتهر الدكتور خليل بنتائجه الطبيعية.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop",
    },
    {
      name: language === "en" ? "Dr. Fatima Al-Noor" : "د. فاطمة النور",
      specialty: language === "en" ? "Laser & Skin Treatments" : "الليزر وعلاجات البشرة",
      credentials: language === "en" ? "MD, Laser Medicine" : "دكتوراه في طب الليزر",
      bio: language === "en" 
        ? "An expert in laser technologies, Dr. Al-Noor provides cutting-edge treatments for all skin types."
        : "خبيرة في تقنيات الليزر، تقدم الدكتورة النور علاجات متطورة لجميع أنواع البشرة.",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop",
    },
    {
      name: language === "en" ? "Dr. Youssef Kareem" : "د. يوسف كريم",
      specialty: language === "en" ? "Orthodontics & Dental Implants" : "تقويم الأسنان وزراعتها",
      credentials: language === "en" ? "DDS, MSc Orthodontics" : "ماجستير تقويم الأسنان",
      bio: language === "en" 
        ? "Dr. Kareem combines precision with artistry to create perfect smiles through advanced orthodontic care."
        : "يجمع الدكتور كريم بين الدقة والفن لخلق ابتسامات مثالية من خلال رعاية تقويم الأسنان المتقدمة.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop",
    },
  ];

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
              <span className="gold-text">{t.doctors.title}</span>
            </h1>
            <p className="text-xl text-foreground/60">
              {t.doctors.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="luxury-card overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-1">
                      {doctor.specialty}
                    </p>
                    <p className="text-foreground/50 text-xs mb-3">
                      {doctor.credentials}
                    </p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {doctor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
