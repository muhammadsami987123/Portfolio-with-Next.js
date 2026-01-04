import Hero from '@/components/Hero';
import About from '@/app/About/page';
import Projects from '@/app/Projects/page';
import Skills from '@/app/Skills/page';
import Contact from '@/app/Contact/page';
import HackathonVictories from '@/components/HackathonVictories';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HackathonVictories />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}