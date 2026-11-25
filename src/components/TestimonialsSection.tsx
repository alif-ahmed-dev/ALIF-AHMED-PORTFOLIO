import { TESTIMONIALS } from '../data/portfolioData';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
            Endorsements
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
            Words from product leaders and engineering partners.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between"
            >
              <blockquote className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 font-serif-editorial">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.author}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                  {item.role}
                  <span className="mx-1.5" aria-hidden="true">·</span>
                  {item.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
