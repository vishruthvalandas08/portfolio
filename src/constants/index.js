import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
   python,
    langchain,
    springboot,
    sklearn,
    docker,
    Hitachi,
    tensorflow,
    java,
    aws,
   
    threejs,
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
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "Deep Learning",
    icon: creator,
  },
  {
    title: "Generative AI",
    icon: backend,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "langchain",
      icon: langchain,
    },
    {
      name: "sklearn",
      icon: sklearn,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "springboot",
      icon: springboot,
    },
    {
      name: "aws",
      icon: aws,
    },
    


    
  ];
  
  const experiences = [
    {
      title: "Fullstack development Intern",
      company_name: "Hitachi Vantara",
      icon: Hitachi,
      iconBg: "#383E56",
      date: "November 2022 - July 2023 ",
      points: [
        "Developed and maintained a React.js front-end for the Employee Skill Management System, crafting reusable components with Tailwind CSS to ensure a consistent, responsive UI",
        "Integrated the React UI with Spring Boot back-end REST APIs—designing API contracts, handling error states, and optimizing data fetching with Axios",
        "Collaborated closely with back-end engineers to define endpoints for CRUD operations on employee skill profiles, performance ratings, and manager feedback",
        "Implemented client-side routing and state management using React Router and Context API (or Redux), reducing page-load times by 30% through code-splitting and lazy loading"
      ],
    }
  ];
  
 
  
  const projects = [
  {
    name: "Employee Skill Management System",
    description:
      "Full-stack application enabling employees to enter skill ratings and managers to review and update ratings, built with React.js front-end and Spring Boot back-end.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Docker", color: "white-text-gradient" },
    ],
    image: Hitachi,
    source_code_link: "https://github.com/yourusername/skill-management",
  },
  {
    name: "Skin Cancer Detection",
    description:
      "Developed an ensemble transfer learning model using ResNet50, EfficientNet, and DenseNet on the HAM10000 dataset to classify skin lesions into seven classes.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "Deep Learning", color: "pink-text-gradient" },
      { name: "Ensemble", color: "white-text-gradient" },
    ],
    image: Hitachi,
    source_code_link: "https://github.com/yourusername/skin-cancer-detection",
  },
  {
    name: "Sentiment Analysis with LLaMA3",
    description:
      "Implemented sentiment analysis by fine-tuning a LLaMA3 model on custom dataset, achieving high accuracy for positive/negative classification.",
    tags: [
      { name: "LLaMA3", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
      { name: "PyTorch", color: "pink-text-gradient" },
    ],
    image: Hitachi,
    source_code_link: "https://github.com/yourusername/llama3-sentiment-analysis",
  },
];
  
  export { services, technologies, experiences, projects };