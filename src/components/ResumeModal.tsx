import { useEffect, useState } from 'react';
import { Check, Download, FileText, X } from 'lucide-react';
import {
  PORTFOLIO_PROFILE,
  SKILL_GROUPS,
  TIMELINE_ITEMS,
} from '../data/portfolioData';
import { buildResumeText } from '../utils/portfolioLogic';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (!open) {
      setDownloaded(false);
      return;
    }
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
  }, [open, onClose]);

  if (!open) return null;

  const handleDownloadFile = () => {
    const content = buildResumeText({
      displayName: PORTFOLIO_PROFILE.displayName,
      realNameCredit: PORTFOLIO_PROFILE.realNameCredit,
      roleHeadline: PORTFOLIO_PROFILE.roleHeadline,
      email: PORTFOLIO_PROFILE.email,
      location: PORTFOLIO_PROFILE.location,
      bio: PORTFOLIO_PROFILE.heroBio,
      skills: SKILL_GROUPS,
      timeline: TIMELINE_ITEMS,
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Alif-Ahmed-Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="animate-modal-in relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xs">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span id="resume-modal-title">Curriculum Vitae — {PORTFOLIO_PROFILE.displayName}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume modal"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-sm text-zinc-700 dark:text-zinc-300">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              {PORTFOLIO_PROFILE.displayName}
            </h3>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {PORTFOLIO_PROFILE.roleHeadline} · Portfolio by {PORTFOLIO_PROFILE.realNameCredit}
            </p>
            <p className="mt-2 text-xs font-mono-tabular text-zinc-500 dark:text-zinc-400">
              {PORTFOLIO_PROFILE.email} · {PORTFOLIO_PROFILE.location}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Experience Summary
            </h4>
            <ul className="space-y-3">
              {TIMELINE_ITEMS.map((item) => (
                <li key={item.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.role}
                    </span>{' '}
                    <span className="text-zinc-500 dark:text-zinc-400">
                      — {item.organization}
                    </span>
                  </div>
                  <span className="text-xs font-mono-tabular text-zinc-500 dark:text-zinc-400 shrink-0">
                    {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleDownloadFile}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Save Resume (.TXT)</span>
            </button>

            {downloaded && (
              <span
                role="status"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400"
              >
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>Downloaded Alif-Ahmed-Resume.txt</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
