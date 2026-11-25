import { useEffect, useState } from 'react';
import { Check, Code2, ExternalLink, X } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolioData';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [linkNotice, setLinkNotice] = useState<string | null>(null);

  useEffect(() => {
    setLinkNotice(null);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="animate-modal-in relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl">
        {/* Top bar inside modal */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xs">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span className="font-mono-tabular">{project.year}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Media preview */}
        <div className="w-full h-56 sm:h-72 overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
          <img
            src={project.image}
            alt={project.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3
              id="project-modal-title"
              className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div>
              <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                The Challenge
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.challenge}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                The Solution
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Measured Outcome
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {project.outcome}
              </p>
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Stack: </span>
              {project.techStack.join(' · ')}
            </div>
          </div>

          {/* Placeholder Live & Repo action buttons */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setLinkNotice(`Live case study preview URL copied: ${project.liveUrl}`)
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Live Preview Link</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setLinkNotice(`Repository reference URL: ${project.repoUrl}`)
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Repository Link</span>
              </button>
            </div>

            {linkNotice && (
              <p
                role="status"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400"
              >
                <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{linkNotice}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
