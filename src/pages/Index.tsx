import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 lg:ml-[250px]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <PortfolioSection />
        <ContactSection />
        <footer className="py-6 text-center text-muted-foreground text-xs border-t border-border">
          © 2026 Sonaksh Nandan. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Index;
