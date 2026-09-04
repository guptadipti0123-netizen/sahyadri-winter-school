import Layout from "./layout" // Assuming root layout handles html/body
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/home/Hero"
import AboutSection from "@/components/home/AboutSection"
import GlimpsesSection from "@/components/home/GlimpsesSection"
import ProgramsSection from "@/components/home/ProgramsSection"
import Speakers from "@/components/home/SpeakersSection"
import Testimonials from "@/components/home/Testimonials"


export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full">
        <Hero />
        <AboutSection />
        <GlimpsesSection />
        <ProgramsSection />
        <Speakers />
        <Testimonials />
      </main>
    </>
  )
}