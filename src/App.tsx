import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeModal } from './components/ResumeModal';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TimelineSection } from './components/TimelineSection';
import type { PortfolioProject } from './data/portfolioData';
import {
  resolveThemePreference,
  type ThemeMode,
  toggleThemeValue,
} from './utils/portfolioLogic';

const THEME_STORAGE_KEY = 'alif_portfolio_theme';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    const systemDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return resolveThemePreference(saved, systemDark);
  });

  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage quota errors in restricted contexts
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => toggleThemeValue(prev));
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-200">
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      <main className="flex-1">
        <HeroSection />
        <AboutSection onOpenResume={() => setResumeOpen(true)} />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <TimelineSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
