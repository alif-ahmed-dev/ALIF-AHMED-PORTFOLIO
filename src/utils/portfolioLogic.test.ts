import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS, SKILL_GROUPS, TIMELINE_ITEMS, PORTFOLIO_PROFILE } from '../data/portfolioData';
import {
  buildResumeText,
  filterProjects,
  getCategoryCounts,
  resolveThemePreference,
  toggleThemeValue,
  validateContactForm,
} from './portfolioLogic';

test('filterProjects returns all 6 projects for All and filters specific categories accurately', () => {
  assert.equal(filterProjects(PROJECTS, 'All').length, 6);
  assert.equal(filterProjects(PROJECTS, 'Web').length, 2);
  assert.equal(filterProjects(PROJECTS, 'UI/UX').length, 2);
  assert.equal(filterProjects(PROJECTS, 'Tools').length, 2);

  const webOnly = filterProjects(PROJECTS, 'Web');
  assert.ok(webOnly.every((p) => p.category === 'Web'));
});

test('getCategoryCounts computes exact totals per category', () => {
  const counts = getCategoryCounts(PROJECTS);
  assert.deepEqual(counts, {
    All: 6,
    Web: 2,
    'UI/UX': 2,
    Tools: 2,
  });
});

test('validateContactForm rejects empty or malformed inputs with specific errors', () => {
  const emptyResult = validateContactForm({ name: ' ', email: '', message: 'hi' });
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.message);

  const badEmailResult = validateContactForm({
    name: 'Samira',
    email: 'not-an-email',
    message: 'Looking to collaborate on a design system.',
  });
  assert.equal(badEmailResult.isValid, false);
  assert.equal(badEmailResult.errors.name, undefined);
  assert.ok(badEmailResult.errors.email);
  assert.equal(badEmailResult.errors.message, undefined);
});

test('validateContactForm accepts valid trimmed contact submissions', () => {
  const validResult = validateContactForm({
    name: 'Samira Khan',
    email: 'samira@studio.co',
    message: 'We would love to discuss a web product redesign.',
  });
  assert.equal(validResult.isValid, true);
  assert.deepEqual(validResult.errors, {});
});

test('resolveThemePreference and toggleThemeValue handle saved, system, and toggled states', () => {
  assert.equal(resolveThemePreference('dark', false), 'dark');
  assert.equal(resolveThemePreference('light', true), 'light');
  assert.equal(resolveThemePreference(null, true), 'dark');
  assert.equal(resolveThemePreference(null, false), 'light');
  assert.equal(toggleThemeValue('light'), 'dark');
  assert.equal(toggleThemeValue('dark'), 'light');
});

test('buildResumeText includes Alif Ahmed, Rayhan Uddin, skills, and timeline entries', () => {
  const text = buildResumeText({
    displayName: PORTFOLIO_PROFILE.displayName,
    realNameCredit: PORTFOLIO_PROFILE.realNameCredit,
    roleHeadline: PORTFOLIO_PROFILE.roleHeadline,
    email: PORTFOLIO_PROFILE.email,
    location: PORTFOLIO_PROFILE.location,
    bio: PORTFOLIO_PROFILE.heroBio,
    skills: SKILL_GROUPS,
    timeline: TIMELINE_ITEMS,
  });

  assert.ok(text.includes('ALIF AHMED (Rayhan Uddin)'));
  assert.ok(text.includes('Frontend & UI'));
  assert.ok(text.includes('Principal Creative Developer'));
});
