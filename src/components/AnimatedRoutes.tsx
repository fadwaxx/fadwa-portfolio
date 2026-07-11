import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import Hero from './Hero';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import WhoIWorkWith from './WhoIWorkWith';
import WhyChooseMe from './WhyChooseMe';
import Projects from './Projects';
import Contact from './Contact';
import ProjectDetails from './ProjectDetails';
import PageTransition from './PageTransition';
import Process from './Process';

function Home() {
    return (
      <PageTransition>
        <Hero />
        <About />
        <Services />
        <Skills />
        <WhoIWorkWith />
        <WhyChooseMe />
        <Projects />
        <Process />
        <Contact />
      </PageTransition>
    );
  }

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/:slug"
          element={
            <PageTransition>
              <ProjectDetails />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}