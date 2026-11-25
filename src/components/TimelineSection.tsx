import { TIMELINE_ITEMS } from '../data/portfolioData';

export function TimelineSection() {
  return (
    <section id="experience" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
            Background
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
            Experience and academic foundation.
          </h2>
        </div>

        <ol className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
          {TIMELINE_ITEMS.map((entry) => (
            <li
              key={entry.id}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8"
            >
              {/* Left metadata column */}
              <div className="lg:col-span-4">
                <p className="text-xs font-mono-tabular font-medium text-blue-600 dark:text-blue-400">
                  {entry.period}
                </p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {entry.type}
                  <span className="mx-1.5" aria-hidden="true">·</span>
                  {entry.location}
                </p>
              </div>

              {/* Right details column */}
              <div className="lg:col-span-8">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {entry.organization}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 list-disc pl-5 marker:text-zinc-400 dark:marker:text-zinc-600">
                  {entry.highlights.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
