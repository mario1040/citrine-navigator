import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  quoteEn: string;
  quoteAr: string;
  thumbnail: string;
  videoId: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    nameEn: "Sarah Johnson",
    nameAr: "سارة جونسون",
    roleEn: "Rhinoplasty Patient",
    roleAr: "مريضة تجميل الأنف",
    quoteEn: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    quoteAr: "من المعروف أن القارئ سيتشتت بالمحتوى المقروء للصفحة عند النظر إلى تخطيطها.",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "2",
    nameEn: "Dr. Ibrahim Dohina",
    nameAr: "د. إبراهيم دحينة",
    roleEn: "Dentist",
    roleAr: "طبيب أسنان",
    quoteEn: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    quoteAr: "من المعروف أن القارئ سيتشتت بالمحتوى المقروء للصفحة عند النظر إلى تخطيطها.",
    thumbnail: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    nameEn: "Dr. Yasmin Nabile",
    nameAr: "د. ياسمين نبيل",
    roleEn: "Plastic Surgeon",
    roleAr: "جراحة تجميل",
    quoteEn: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    quoteAr: "من المعروف أن القارئ سيتشتت بالمحتوى المقروء للصفحة عند النظر إلى تخطيطها.",
    thumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "4",
    nameEn: "Lora Smith",
    nameAr: "لورا سميث",
    roleEn: "Dermatology Patient",
    roleAr: "مريضة جلدية",
    quoteEn: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    quoteAr: "من المعروف أن القارئ سيتشتت بالمحتوى المقروء للصفحة عند النظر إلى تخطيطها.",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    videoId: "dQw4w9WgXcQ",
  },
];

const VideoGallery = () => {
  const { language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  return (
    <section className="py-20 bg-background">
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
            {language === "en" ? "Video Testimonials" : "شهادات بالفيديو"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Hear directly from our patients and doctors about their experiences"
              : "استمع مباشرة من مرضانا وأطبائنا عن تجاربهم"}
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(testimonial)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img
                  src={testimonial.thumbnail}
                  alt={language === "en" ? testimonial.nameEn : testimonial.nameAr}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full border-2 border-primary bg-background/20 backdrop-blur-sm flex items-center justify-center transition-colors group-hover:bg-primary group-hover:border-primary"
                  >
                    <Play className="w-6 h-6 text-primary group-hover:text-primary-foreground ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-primary font-serif font-semibold text-lg mb-1">
                  {language === "en" ? testimonial.nameEn : testimonial.nameAr}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {language === "en" ? testimonial.roleEn : testimonial.roleAr}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {language === "en" ? testimonial.quoteEn : testimonial.quoteAr}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-navy-dark border-border overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedVideo && (language === "en" ? selectedVideo.nameEn : selectedVideo.nameAr)}
          </DialogTitle>
          <div className="relative aspect-video">
            {selectedVideo && (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title="Video testimonial"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-50"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoGallery;
