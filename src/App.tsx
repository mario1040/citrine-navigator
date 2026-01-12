import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Doctors from "./pages/Doctors";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import PlasticSurgery from "./pages/services/PlasticSurgery";
import Dermatology from "./pages/services/Dermatology";
import Dental from "./pages/services/Dental";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/plastic-surgery" element={<PlasticSurgery />} />
            <Route path="/services/dermatology" element={<Dermatology />} />
            <Route path="/services/dental" element={<Dental />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
