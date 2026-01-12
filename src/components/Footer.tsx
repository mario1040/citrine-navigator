import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about-us", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/doctors", label: t.nav.doctors },
    { href: "/contact-us", label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-navy-dark border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-serif font-bold text-primary">
                Citrine
              </span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{t.footer.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{t.footer.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              {t.footer.social}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
            <p>{t.footer.copyright}</p>
            <div className="flex items-center gap-6">
              <Link to="#" className="hover:text-primary transition-colors">
                {t.footer.privacy}
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
