import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export function HeroSection() {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section id="top" className="pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Split-screen editorial hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left column: Typography & primary actions */}
          <div className="lg:col-span-7 flex flex-col justify-center py-2">
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-5">
                {PORTFOLIO_PROFILE.roleHeadline}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-zinc-900 dark:text-zinc-50 text-balance">
                {PORTFOLIO_PROFILE.heroHeadline}
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl">
                {PORTFOLIO_PROFILE.heroBio}
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-900 dark:text-zinc-100 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Contact Me
                </a>
              </div>

              <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-400">
                {PORTFOLIO_PROFILE.location}
                <span className="mx-2" aria-hidden="true">·</span>
                <span>{PORTFOLIO_PROFILE.availability}</span>
              </p>
            </div>
          </div>

          {/* Right column: Editorial portrait container */}
          <div className="lg:col-span-5">
            <figure className="relative h-full min-h-[360px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
              {!portraitFailed ? (
                <img
                  src={PORTFOLIO_PROFILE.heroPortrait}
                  alt={PORTFOLIO_PROFILE.heroPortraitAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setPortraitFailed(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full min-h-[360px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
                  <span className="font-serif-editorial italic text-3xl text-zinc-700 dark:text-zinc-200">
                    {PORTFOLIO_PROFILE.displayName}
                  </span>
                  <span className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                    Creative Developer &amp; UI/UX Designer
                  </span>
                </div>
              )}
            </figure>
          </div>
        </div>

        {/* Full-width key metrics strip below the hero split */}
        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-y border-zinc-200 dark:border-zinc-800 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 dark:divide-zinc-800">
          {PORTFOLIO_PROFILE.stats.map((stat) => (
            <div key={stat.label} className="py-6 sm:px-6 first:pl-0 last:pr-0">
              <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </dt>
              <dd className="mt-1.5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-mono-tabular">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Subtle editorial marquee ribbon divider */}
      <div
        aria-hidden="true"
        className="mt-12 overflow-hidden border-b border-zinc-200 dark:border-zinc-800 py-3 bg-white/60 dark:bg-zinc-900/40"
      >
        <div className="animate-marquee-ribbon text-xs tracking-wide text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, idx) => (
            <span key={idx} className="mx-4">
              selected works · interface systems · frontend architecture · accessible design · creative tooling ·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
