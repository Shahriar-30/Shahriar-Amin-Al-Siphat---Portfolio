import React from "react";
import { Project, SkillCategory, ValueProp } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "QuriarBox",
    problem:
      "A trusted provider of courier services. We deliver your products safely to your home in a reasonable time.",
    solution: "",
    techStack: [],
    imageUrl: "/3.png",
    liveUrl: "https://shahriar-30.github.io/Quriarbox-Courier-Service/",
    githubUrl: "https://github.com/Shahriar-30/Quriarbox-Courier-Service",
  },
  {
    id: "2",
    title: "Creative",
    problem:
      "We Are Digital Product Design Agency. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    solution: "",
    techStack: [],
    imageUrl: "/4.png",
    liveUrl: "https://shahriar-30.github.io/Creative-Agency/",
    githubUrl: "https://github.com/Shahriar-30/Creative-Agency",
  },

  {
    id: "3",
    title: "Online Education-Web-Design",
    problem:
      "An Online Education Web Design project focusing solely on a React frontend with a fixed (non-responsive) layout.",
    solution: "",
    techStack: [],
    imageUrl: "/1.png",
    liveUrl: "https://monumental-buttercream-9861be.netlify.app/",
    githubUrl: "https://github.com/Shahriar-30/Online-Education-Web-Design",
  },
  {
    id: "4",
    title: "TransPia",
    problem:
      "This is Language Translation app. A Language Translation App is a digital tool that converts text from one language to another in real-time.",
    solution: "",
    techStack: [],
    imageUrl: "/2.png",
    liveUrl: "transpia.netlify.app",
    githubUrl: "https://github.com/Shahriar-30/TransPia",
  },

  {
    id: "5",
    title: "Bazar List",
    problem: "This is a cost calculator for your daily shopping",
    solution: "",
    techStack: [],
    imageUrl: "/5.png",
    liveUrl: "https://bazar-list.netlify.app/",
    githubUrl: "https://github.com/Shahriar-30/Bazar-List",
  },
  {
    id: "5",
    title: "Qwery- holiday time",
    problem:
      "You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.",
    solution: "",
    techStack: [],
    imageUrl: "/6.png",
    liveUrl: "https://shahriar-30.github.io/Qwery-holiday-time/",
    githubUrl: "https://github.com/Shahriar-30/Bazar-List",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      "React (Hooks, Context API)",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux / Zustand",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express",
      "MongoDB (Mongoose)",
      "RESTful APIs",
      "JWT Auth",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git / GitHub", "Vercel", "Postman", "CI/CD Pipelines"],
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Business-First Logic",
    description:
      "I write code to solve business problems, not just for the sake of technology.",
    icon: "briefcase",
  },
  {
    title: "Reliable Delivery",
    description:
      "I prioritize clear communication and meeting deadlines to keep projects on track.",
    icon: "clock",
  },
  {
    title: "Clean, Scalable Code",
    description:
      "Maintainable codebases that grow with your company, reducing technical debt.",
    icon: "code",
  },
  {
    title: "Proactive Problem Solver",
    description:
      "I identify potential roadblocks before they impact your business goals.",
    icon: "search",
  },
];
