import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/uploads/project-1.jpg";
import Theme1 from "./assets/uploads/purple.png";
import Theme2 from "./assets/uploads/red.png";
import Theme3 from "./assets/uploads/blueviolet.png";
import Theme4 from "./assets/uploads/blue.png";
import Theme5 from "./assets/uploads/goldenrod.png";
import Theme6 from "./assets/uploads/magenta.png";
import Theme7 from "./assets/uploads/yellowgreen.png";
import Theme8 from "./assets/uploads/orange.png";
import Theme9 from "./assets/uploads/green.png";
import Theme10 from "./assets/uploads/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Hamid",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Nawaz",
  },

  {
    id: 3,
    title: "Age : ",
    description: "20 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Pakistani",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Pakistan",
  },

  {
    id: 7,
    title: "Watsapp : ",
    description: "+923145046367",
  },

  {
    id: 8,
    title: "Email : ",
    description: "you@mail.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Urdu, English, Punjabi",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - PRESENT",
    title: "Full Stack Developer <span> Codezac </span>",
    desc: "Full Stack Developer with a strong command of HTML, CSS, JavaScript, and expertise across frameworks like Next.js, React, Node.js, and Bootstrap. Skilled in building real-time applications with Socket.io and proficient in database solutions such as DynamoDB, PostgreSQL, and MySQL. Spearheaded responsive, high-performing web applications that enhance user experience and optimize performance, collaborating closely with cross-functional teams to deliver impactful solutions.",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018-2020",
    title: "Matriculation <span> Hira Secondary School </span>",
    desc: "Built a solid academic foundation with a focus on essential subjects such as Mathematics and Sciences. Demonstrated strong academic performance and active participation in school projects.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020-2022",
    title: "Intermediate <span> Fauji Foundation College </span>",
    desc: "Completed Intermediate with a focus on science subjects.",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "90",
  },

  {
    id: 2,
    title: "JavaScript",
    percentage: "85",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "90",
  },

  {
    id: 4,
    title: "PHP",
    percentage: "60",
  },

  {
    id: 5,
    title: "WordPress",
    percentage: "60",
  },

  {
    id: 6,
    title: "Bootstrap",
    percentage: "90",
  },
  {
    id: 7,
    title: "Next.js",
    percentage: "60",
  },
  {
    id: 8,
    title: "React",
    percentage: "85",
  },
  {
    id: 9,
    title: "Node.js",
    percentage: "90",
  },
  {
    id: 10,
    title: "Socket.io",
    percentage: "65",
  },
  {
    id: 11,
    title: "DynamoDB",
    percentage: "85",
  },
  {
    id: 12,
    title: "PostgreSQL",
    percentage: "90",
  },
  {
    id: 13,
    title: "MySQL",
    percentage: "90",
  },
];

export const portfolio = [
  {
    id: 6,
    img: Work1,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "BVADI",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
        link: "http://localhost:3000/",
      },
    ],
  },
  {
    id: 5,
    img: Work1,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "BVADI",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
        link: "http://localhost:3000/",
      },
    ],
  },
  {
    id: 4,
    img: Work1,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "BVADI",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
        link: "http://localhost:3000/",
      },
    ],
  },
  {
    id: 3,
    img: Work1,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "BVADI",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
        link: "http://localhost:3000/",
      },
    ],
  },
  {
    id: 2,
    img: Work1,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "BVADI",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
        link: "http://localhost:3000/",
      },
    ],
  },
  {
    id: 1,
    img: Work1,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "BVADI",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
        link: "http://localhost:3000/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
