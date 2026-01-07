import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ValueProposition from "@/components/ValueProposition";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <ValueProposition />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
