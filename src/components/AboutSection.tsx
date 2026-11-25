import { Download } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export function AboutSection({ onOpenResume }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column: Section heading & resume trigger */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
              About Me
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
              {PORTFOLIO_PROFILE.about.heading}
            </h2>

            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Studio alias: <span className="text-zinc-800 dark:text-zinc-200 font-medium">{PORTFOLIO_PROFILE.displayName}</span>
              <span className="mx-2" aria-hidden="true">·</span>
              Crafted by <span className="text-zinc-800 dark:text-zinc-200 font-medium">{PORTFOLIO_PROFILE.realNameCredit}</span>
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-blue-600 dark:hover:border-blue-400 text-sm font-semibold text-zinc-900 dark:text-zinc-100 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right column: Biography & working philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              {PORTFOLIO_PROFILE.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Working Philosophy
              </h3>
              <ol className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {PORTFOLIO_PROFILE.about.principles.map((item) => (
                  <li key={item.index} className="py-4 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                    <span className="sm:col-span-1 text-xs font-mono-tabular text-blue-600 dark:text-blue-400 font-medium pt-0.5">
                      {item.index}.
                    </span>
                    <div className="sm:col-span-11">
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
