import { BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from './LanguageContext';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <SmoothScroll />
        <ScrollProgress />
        <CursorGlow />

        <main className="min-h-screen bg-background">
          <AnimatedRoutes />
        </main>
      </BrowserRouter>
    </LanguageProvider>
  );
}