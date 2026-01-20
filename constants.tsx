
import React from 'react';
import { Project, SkillCategory, ValueProp } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTrack Pro',
    problem: 'SaaS companies often struggle with fragmented financial tracking across multiple payment gateways.',
    solution: 'Engineered a unified dashboard that aggregates real-time data from Stripe and PayPal API, providing actionable churn and LTV insights.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    imageUrl: 'https://picsum.photos/seed/fintrack/800/600',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'EduStream Platform',
    problem: 'Existing LMS solutions were too complex for individual creators and lacked real-time student engagement tools.',
    solution: 'Developed a streamlined platform using Socket.io for live Q&A and a custom-built video processing pipeline using AWS Lambda.',
    techStack: ['Next.js', 'Express', 'Firebase', 'Socket.io'],
    imageUrl: 'https://picsum.photos/seed/edustream/800/600',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'MarketMaster CRM',
    problem: 'Small real estate agencies were losing leads due to a lack of automated follow-up and task management.',
    solution: 'Built a custom CRM with automated email drip campaigns and an intuitive drag-and-drop kanban board for lead tracking.',
    techStack: ['React', 'Tailwind', 'Redux', 'MongoDB'],
    imageUrl: 'https://picsum.photos/seed/crm/800/600',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: ['React (Hooks, Context API)', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'Framer Motion']
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express', 'MongoDB (Mongoose)', 'PostgreSQL', 'RESTful APIs', 'JWT Auth']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git / GitHub', 'Docker', 'Vercel / Heroku', 'Postman', 'AWS (S3, Lambda)', 'CI/CD Pipelines']
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Business-First Logic',
    description: 'I write code to solve business problems, not just for the sake of technology.',
    icon: 'briefcase'
  },
  {
    title: 'Reliable Delivery',
    description: 'I prioritize clear communication and meeting deadlines to keep projects on track.',
    icon: 'clock'
  },
  {
    title: 'Clean, Scalable Code',
    description: 'Maintainable codebases that grow with your company, reducing technical debt.',
    icon: 'code'
  },
  {
    title: 'Proactive Problem Solver',
    description: 'I identify potential roadblocks before they impact your business goals.',
    icon: 'search'
  }
];
