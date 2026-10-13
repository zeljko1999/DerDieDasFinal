import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import { pageMeta } from "../seo/pages";
import { localBusinessSchema } from "../seo/structuredData";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import ContactCta from "../components/ContactCta";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import WhyUsSection from "../components/WhyUsSection";
import ProgramsSection from "../components/ProgramsSection";
import ExamPrepSection from "../components/ExamPrepSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import TestCta from "../components/TestCta";

const Home = () => (
  <div className="min-h-screen bg-white">
    <Seo
      meta={pageMeta.home}
      schemas={[localBusinessSchema]}
    />
    <Navbar />
    <div className="pt-20">
      <HeroSlider />
      <AboutSection />
      <WhyUsSection />
      <ProgramsSection />
      <ExamPrepSection />
      <TestCta />
      <TestimonialsSection />
      <ContactCta />
      <div id="contact" />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </div>
  </div>
);

export default Home;
