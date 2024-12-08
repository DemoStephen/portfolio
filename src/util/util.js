import figma from "../assets/Image/stacks/figma.png";
import photoshop from "../assets/Image/stacks/photoshop.png";
import react from "../assets/Image/stacks/react.png";
import tailwind from "../assets/Image/stacks/Tailwind.png";
import sass from "../assets/Image/stacks/sass.png";
import github from "../assets/Image/stacks/github.png";
import html from "../assets/Image/stacks/html.png";
import css from "../assets/Image/stacks/css.png";
import js from "../assets/Image/stacks/js.png";
import vscode from "../assets/Image/stacks/vscode.png";
import git from "../assets/Image/stacks/git.png";
import npm from "../assets/Image/stacks/npm.png";
import gpt from "../assets/Image/stacks/gpt.png";
import poe from "../assets/Image/stacks/poe.svg";
import slack from "../assets/Image/stacks/slack.png";

export const STACKS = [
  {
    title: "Frontend",
    stack: [
      {
        image: react,
        name: "React",
        about: "Javascript Library",
      },
      {
        image: tailwind,
        name: "Tailwind CSS",
        about: "CSS Framework",
      },
      {
        image: sass,
        name: "SASS",
        about: "CSS Preprocessor",
      },
      {
        image: html,
        name: "HTML",
        about: "Website Skelenton",
      },
      {
        image: css,
        name: "CSS",
        about: "Cascading Style Sheets",
      },
      {
        image: js,
        name: "Javascript",
        about: "Programming Language for the web",
      },
    ],
  },
  {
    title: "Development",
    stack: [
      {
        image: vscode,
        name: "VS Code",
        about: "Code Editor",
      },
      {
        image: git,
        name: "Git",
        about: "Version Control system",
      },
      {
        image: npm,
        name: "NPM",
        about: "Package Installer",
      },
    ],
  },
  {
    title: "Design",
    stack: [
      {
        image: figma,
        name: "Figma",
        about: "Design tool",
      },
      {
        image: photoshop,
        name: "Photoshop",
        about: "Image Editing Software",
      },
    ],
  },

  {
    title: "Productivity",
    stack: [
      {
        image: slack,
        name: "Slack",
        about: "Collaboration",
      },
      {
        image: github,
        name: "Github",
        about: "Collaboration",
      },
    ],
  },

  {
    title: "Artificial Intelligence",
    stack: [
      {
        image: gpt,
        name: "ChatGPT",
        about: "OpenAI",
      },
      {
        image: poe,
        name: "Poe",
        about: "Virtual Assistant",
      },
    ],
  },
];
