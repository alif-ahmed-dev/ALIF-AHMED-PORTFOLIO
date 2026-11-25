import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            {PORTFOLIO_PROFILE.displayName}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} {PORTFOLIO_PROFILE.displayName}. Designed &amp; engineered by{' '}
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {PORTFOLIO_PROFILE.realNameCredit}
            </span>
            .
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
          <a
            href="#projects"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Contact
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1 font-medium text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
