import { SKILL_GROUPS } from '../data/portfolioData';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
            Capabilities
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
            Technical craft across interface design and frontend engineering.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {group.summary}
                </p>

                <ul className="mt-6 space-y-5">
                  {group.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono-tabular text-zinc-500 dark:text-zinc-400 shrink-0">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="mt-2 h-1.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <div
                          className="h-full rounded-full bg-blue-600 dark:bg-blue-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                        {skill.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
