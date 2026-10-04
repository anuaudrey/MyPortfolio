import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import hopelink from "../assets/images/hopelink.png";
import realtor from "../assets/images/realtor.png";
import retailDatabase from "../assets/images/retailDatabase.png";
import frontend from "../assets/images/frontend.png";
import fullStack from "../assets/images/fullStack.png";
import ui from "../assets/images/ui.png";
import bdd from "../assets/images/bdd.png"; 
import resume from "../assets/documents/resume.pdf";

const portfolioData = {
  personal: {
    name: "Audrey Anulegeh",
    role: "Software Engineering Student",
    location: "Toronto, Canada",
    email: "aanulege@my.centennialcollege.ca",
    phone: "+1 (123) 456-7890",
    github: "https://github.com/anuaudrey",
    linkedin: "https://www.linkedin.com/in/audrey-anulegeh",
    introduction:
      "I build clean, intuitive and purposeful digital experiences where thoughtful design meets meaningful technology.",
    mission:
      "I believe great software should be functional, intuitive and thoughtfully designed.",
      bio: [
        "I’m Audrey Anulegeh, a Software Engineering student based in Toronto with a strong interest in building digital experiences that are both technically sound and genuinely intuitive to use. I enjoy turning ideas and real-world problems into thoughtful software solutions, combining full-stack development with a strong appreciation for UI/UX and the details that make technology easier to understand and use.",

        "My experience spans frontend and full-stack development, database design, and collaborative software projects. Through projects such as HopeLink, a full-stack platform created to connect victims of social injustice with relevant support services, I’ve gained hands-on experience developing functional applications while thinking carefully about accessibility, usability, and the people behind the technology. I’ve also led a team database project, strengthening my ability to communicate ideas, organize technical work, and contribute effectively in a collaborative environment.",

        "What sets me apart is the way I approach software development: I don’t just want to make something work, I want to understand why it should exist, who it is serving, and how it can be made better. I bring curiosity, analytical thinking, attention to detail, and a willingness to keep learning to every project I take on. My goal is to grow as a software developer while creating technology that is purposeful, polished, and meaningful."
    ],
    profileImage: profile,
    resume: resume,
    logo: logo,
  },

  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Services", path: "/services" },
    { label: "References", path: "/references" },
    { label: "Contact", path: "/contact" },
  ],

  projects: [
    {
      id: 1,
      title: "HopeLink",
      description:
        "A full-stack support platform designed to connect victims of social injustice with relevant support services.",
      role: "Full-Stack Developer",
      outcome:
        "Developed a functional platform for submitting reports, sharing testimonies and connecting users with support services.",
      completionDate: "July 2025",
      image: hopelink,
      technologies: ["Next.js", "JavaScript", "Laravel", "MySQL"],
    },

    {
      id: 2,
      title: "Realtor Website",
      description:
        "A responsive real-estate website focused on clean layouts, intuitive navigation and responsive user interfaces.",
      role: "Frontend Developer",
      outcome:
        "Created a responsive interface with structured layouts and navigation designed for a smooth browsing experience.",
      completionDate: "December 2025",
      image: realtor,
      technologies: ["HTML", "CSS", "JavaScript"],
    },

    {
      id: 3,
      title: "Retail Database System",
      description:
        "A relational database project designed to manage retail operations and business data.",
      role: "Project Lead",
      outcome:
        "Led a team of four in designing and implementing a structured SQL database based on business requirements and data relationships.",
      completionDate: "2026",
      image: retailDatabase,
      technologies: ["SQL", "ERD", "Database Design"],
    },
  ],

  services: [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and accessible interfaces with a focus on usability, visual hierarchy, and clean user experiences.",
    image: frontend,
  },

  {
    id: 2,
    title: "Full-Stack Development",
    description:
      "Developing complete web applications that connect intuitive interfaces with reliable backend systems and structured data.",
    image: fullStack,
  },

  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing thoughtful digital experiences with attention to user needs, interaction, accessibility, and visual consistency.",
    image: ui,
  },

  {
    id: 4,
    title: "Database Design",
    description:
      "Designing structured relational databases and data models that support organized, reliable, and scalable applications.",
    image: bdd,
  },
  ],


  testimonials: [
    { id: 1, name: "Jordan Lee", company: "Northwind Labs", position: "Senior Developer", testimonial: "Reliable, curious, and a pleasure to collaborate with." },
    { id: 2, name: "Sam Patel", company: "Maple University", position: "Course Instructor", testimonial: "Consistently delivered clean, well-documented work." },
    { id: 3, name: "Alex Chen", company: "Bright Studio", position: "Product Designer", testimonial: "Brought our designs to life with real care for detail." },
  ],
  technologies: [
  {
    id: 1,
    name: "HTML",
    icon: htmlIcon,
  },
  {
    id: 2,
    name: "CSS",
    icon: cssIcon,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascriptIcon,
  },
  {
    id: 4,
    name: "React",
    icon: reactIcon,
  },
  {
    id: 5,
    name: "Next.js",
    icon: nextjsIcon,
  },
  {
    id: 6,
    name: "Python",
    icon: pythonIcon,
  },
  {
    id: 7,
    name: "C#",
    icon: csharpIcon,
  },
  {
    id: 8,
    name: "C++",
    icon: cppIcon,
  },
  {
    id: 9,
    name: "SQL",
    icon: sqlIcon,
  },
  {
    id: 10,
    name: "Git",
    icon: gitIcon,
  },
  {
    id: 11,
    name: "Postman",
    icon: postmanIcon,
  },
  {
    id: 12,
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  ],
};

export default portfolioData;