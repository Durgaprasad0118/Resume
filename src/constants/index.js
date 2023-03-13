import { n } from "maath/dist/index-43782085.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  learn,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  aws,
  c,
  xd,
  docker,
  meta,
  java,
  narayana,
  school,
  ecomm,
  donor,
  cnn,
  car,
  goo,
  carrent,
  jobit,
  tripguide,
  vit,
  threejs,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developing",
    icon: web,
  },
  {
    title: "Cloud Computing",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AbodeXD",
    icon: xd,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Dual Degree",
    company_name: "Vellore Institute Of Technology - AP",
    icon: vit,
    iconBg: "#383E56",
    date: "August 2019 - present",
    points: [
      "With CGPA Of 7.77/10",
      "Integrated M.Tech. Software Engineering is a five-year degree program that aims to provide students with a comprehensive understanding of software engineering principles and practices.",
      "The program typically covers a wide range of topics, including software development methodologies, programming languages, database design, software architecture, project management, and software testing and maintenance.",
    ],
  },
  {
    title: "secondary school education",
    company_name: "Narayana Junior College - Adibatla",
    icon: narayana,
    iconBg: "#E6DEDD",
    date: "May 2021 - Feb 2022",
    points: [
      "With percentage Of 88.8 %/100 %",
      "Intermediate MPC - refers to the two-year intermediate education program in Mathematics, Physics, and Chemistry offered by state boards of education.",
      "strong foundation in various subjects Like Maths, Physics & chemistry",
    ],
  },
  {
    title: "primary school education",
    company_name: "HARVEST PUBLIC SCHOOL - KHAMMAM",
    icon: school,
    iconBg: "#383E56",
    date: "Jan 2006 - March 2016",
    points: [
      "With CGPA of 9.6/10",
      "Primary education done with Central Board of Secondary Education (CBSE)",
      "CBSE schools emphasize proficiency in English as well as the student's mother tongue or a regional language. Students learn basic grammar, vocabulary, comprehension, and writing skills in both languages.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "V Shop",
    description:
      "Web-based Ecommerce platform that allows users to search, book, and manage Their Needs from various providers, providing a convenient and efficient solution for transportation needs.",

    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/Durgaprasad0118",
  },
  {
    name: "V Donor",
    description:
      "Web application that enables donors to donate consumable left over food who are in dire need , view estimated food ranges for positions, and locate available food based on their current location.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: donor,
    source_code_link: "https://github.com/Durgaprasad0118",
  },
  {
    name: "BuilD",
    description:
      "A comprehensive Elearning platform that allows users to book Courses, learn New technologies, and rental Courses, and offers curated recommendations for popular Courses.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: learn,
    source_code_link: "https://github.com/Durgaprasad0118",
  },
  {
    name: "Pneumonia Detection System",
    description:
      "This technology utilizes medical image analysis to accurately identify and classify instances of pneumonia in patient X-rays and  helps to patients ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "detection",
        color: "pink-text-gradient",
      },
    ],
    image: cnn,
    source_code_link: "https://github.com/Durgaprasad0118",
  },
  {
    name: "vHaGhAr",
    description:
      "A smart car with obstacle avoidance technology is designed to autonomously detect and avoid obstacles in its path, ensuring safe and efficient navigation and it was developed using Python and some hardware tools",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "detection",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/Durgaprasad0118",
  },
  {
    name: "Digital conferal",
    description:
      "using Google's media pipe With combination of open cv (01/2023 - Present) This solution uses Google's MediaPipe and OpenCV to provide realtime video conferencing with advanced features such as face detection, background blur, and virtual background.",
    tags: [
      {
        name: "Google mediapipe",
        color: "blue-text-gradient",
      },
      {
        name: "OPENCV",
        color: "green-text-gradient",
      },
    ],
    image: goo,
    source_code_link: "https://github.com/Durgaprasad0118",
  },
];

export { services, technologies, experiences, testimonials, projects };
