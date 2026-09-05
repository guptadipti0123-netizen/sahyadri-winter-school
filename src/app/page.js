import Hero from "@/components/home/Hero"
import AboutSection from "@/components/home/AboutSection"
import GlimpsesSection from "@/components/home/GlimpsesSection"
import ProgramsSection from "@/components/home/ProgramsSection"
import Speakers from "@/components/home/SpeakersSection"
import MentorsSection from "@/components/home/MentorsSection"
import BlogSection from "@/components/home/BlogSection"
import Testimonials from "@/components/home/Testimonials"

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full">
        <Hero />
        <AboutSection />
        <GlimpsesSection />
        <ProgramsSection />
        <MentorsSection />
        <Speakers />
        <BlogSection />
        <Testimonials />
      </main>
    </>
  )
}