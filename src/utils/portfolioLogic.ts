import type {
  PortfolioProject,
  ProjectCategory,
  SkillGroup,
  TimelineEntry,
} from '../data/portfolioData';

export type ThemeMode = 'light' | 'dark';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: ContactFormErrors;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Filter portfolio projects by selected category.
 */
export function filterProjects(
  projects: PortfolioProject[],
  category: ProjectCategory
): PortfolioProject[] {
  if (category === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

/**
 * Compute per-category project counts for filter tab labels.
 */
export function getCategoryCounts(
  projects: PortfolioProject[]
): Record<ProjectCategory, number> {
  const counts: Record<ProjectCategory, number> = {
    All: projects.length,
    Web: 0,
    'UI/UX': 0,
    Tools: 0,
  };

  for (const project of projects) {
    counts[project.category] += 1;
  }

  return counts;
}

/**
 * Validate contact form inputs without substituting silent fallbacks.
 */
export function validateContactForm(
  values: ContactFormValues
): ContactValidationResult {
  const errors: ContactFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!trimmedEmail) {
    errors.email = 'Please provide an email address so I can reply.';
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@domain.com).';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please share a brief message (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Resolve initial color theme from saved localStorage value and OS preference.
 */
export function resolveThemePreference(
  savedValue: string | null,
  systemPrefersDark: boolean
): ThemeMode {
  if (savedValue === 'dark' || savedValue === 'light') {
    return savedValue;
  }
  return systemPrefersDark ? 'dark' : 'light';
}

/**
 * Flip between light and dark theme modes.
 */
export function toggleThemeValue(current: ThemeMode): ThemeMode {
  return current === 'dark' ? 'light' : 'dark';
}

/**
 * Build a clean plain-text resume document for download.
 */
export function buildResumeText(params: {
  displayName: string;
  realNameCredit: string;
  roleHeadline: string;
  email: string;
  location: string;
  bio: string;
  skills: SkillGroup[];
  timeline: TimelineEntry[];
}): string {
  const lines: string[] = [
    `${params.displayName.toUpperCase()} (${params.realNameCredit})`,
    params.roleHeadline,
    `${params.email}  |  ${params.location}`,
    '',
    'SUMMARY',
    '-------',
    params.bio,
    '',
    'CORE SKILLS',
    '-----------',
  ];

  for (const group of params.skills) {
    const names = group.items.map((item) => `${item.name} (${item.level}%)`).join(', ');
    lines.push(`${group.title}: ${names}`);
  }

  lines.push('', 'EXPERIENCE & EDUCATION', '----------------------');

  for (const entry of params.timeline) {
    lines.push(`${entry.role} — ${entry.organization} (${entry.period})`);
    for (const point of entry.highlights) {
      lines.push(`  • ${point}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}
