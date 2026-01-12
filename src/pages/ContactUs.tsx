import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs = () => {
  const { t, language } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    toast.success(language === "en" ? "Message sent successfully!" : "تم إرسال الرسالة بنجاح!");
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === "en" ? "Visit Us" : "زورونا",
      content: t.footer.address,
    },
    {
      icon: Phone,
      title: language === "en" ? "Call Us" : "اتصل بنا",
      content: t.footer.phone,
    },
    {
      icon: Mail,
      title: language === "en" ? "Email Us" : "راسلنا",
      content: t.footer.email,
    },
    {
      icon: Clock,
      title: language === "en" ? "Working Hours" : "ساعات العمل",
      content: language === "en" ? "Sun - Thu: 9AM - 8PM" : "الأحد - الخميس: 9 ص - 8 م",
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
              <span className="gold-text">{t.contact.title}</span>
            </h1>
            <p className="text-xl text-foreground/60">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="luxury-card p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.name}
                    </label>
                    <Input
                      {...register("name", { required: true })}
                      className="bg-input border-border focus:border-primary"
                      placeholder={t.contact.form.name}
                    />
                    {errors.name && (
                      <span className="text-destructive text-sm mt-1">
                        {language === "en" ? "Required" : "مطلوب"}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.email}
                    </label>
                    <Input
                      type="email"
                      {...register("email", { required: true })}
                      className="bg-input border-border focus:border-primary"
                      placeholder={t.contact.form.email}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.phone}
                    </label>
                    <Input
                      {...register("phone")}
                      className="bg-input border-border focus:border-primary"
                      placeholder={t.contact.form.phone}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.message}
                    </label>
                    <Textarea
                      {...register("message", { required: true })}
                      rows={5}
                      className="bg-input border-border focus:border-primary resize-none"
                      placeholder={t.contact.form.message}
                    />
                  </div>

                  <Button type="submit" className="w-full luxury-button">
                    {t.contact.form.submit}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="luxury-card p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-foreground/60 text-sm">{item.content}</p>
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="luxury-card h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5866270682983!2d55.27194!3d25.20484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjQiTiA1NcKwMTYnMTkuMCJF!5e0!3m2!1sen!2sae!4v1623456789"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
