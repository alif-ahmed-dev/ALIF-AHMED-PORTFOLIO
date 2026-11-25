import { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import {
  PROJECTS,
  type PortfolioProject,
  type ProjectCategory,
} from '../data/portfolioData';
import { filterProjects, getCategoryCounts } from '../utils/portfolioLogic';

interface ProjectsSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'Web', 'UI/UX', 'Tools'];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects = filterProjects(PROJECTS, activeCategory);
  const categoryCounts = getCategoryCounts(PROJECTS);

  return (
    <section id="projects" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
              Case studies across web applications, design systems, and developer tools.
            </h2>
          </div>

          {/* Interactive filter segmented control */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900 self-start md:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {category}{' '}
                  <span className="font-mono-tabular text-zinc-400 dark:text-zinc-500 ml-1">
                    {categoryCounts[category]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div
          data-testid="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => {
            const hasFailed = Boolean(failedImages[project.id]);
            return (
              <article
                key={project.id}
                className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden flex flex-col justify-between transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div>
                  {/* 4:3 visual container with zero-broken-image fallback */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                    {!hasFailed ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                        }
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                        <Layers className="w-7 h-7 text-blue-600 dark:text-blue-400 mb-2" aria-hidden="true" />
                        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-6 pb-4">
                    {/* Clean unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="font-medium text-blue-600 dark:text-blue-400">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono-tabular">{project.year}</span>
                    </div>

                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card footer: unboxed tech stack & Preview button */}
                <div className="px-6 pb-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-4">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                    {project.techStack.join(' · ')}
                  </p>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`Preview ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 hover:bg-blue-600 dark:hover:bg-blue-500 text-white dark:text-zinc-900 dark:hover:text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <span>Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
