// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import NTPCLogo from './assets/company_logo/NTPC_logo.png';
import WBLogo from './assets/company_logo/WB_logo.png';


// Education Section Logo's
import bsaLogo from './assets/education_logo/bsa_logo.png';
import XIILogo from './assets/education_logo/12th_logo.png';

// Project Section Logo's
import githubgapsapLogo from './assets/work_logo/wanderlust.png';
import Instagram from './assets/work_logo/Instagram.png';
import JobPortal from './assets/work_logo/JobPortal.png';
import medimeet from './assets/work_logo/medimeet.png';
import AiVoiceAssistant from './assets/work_logo/AIVA.png';
import simon from './assets/work_logo/simon.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },  
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },   
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },    
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },    
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: NTPCLogo,
      role: "Software Engineering Intern",
      company: "NTPC Limited",
      date: "June 2025 - July 2025",
      desc: "Completed an industrial internship at NTPC Limited, Talcher , gaining experience in software development, data workflows, databases, and industrial IT infrastructure, while enhancing technical problem-solving skills through collaboration with experienced mentors and professionals.",
       skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "MongoDb",
        "SQL",
        "RESTful APIs",
      ],
    },
    {
      id: 1,
      img: WBLogo,
      role: "Fullstack Engineer",
      company: "Web_Bocket Software Pvt Ltd.",
      date: "August 2023 - Nov 2024",
    desc: "Contributed to the development of dynamic, responsive web applications by building scalable UI components. Collaborated with cross-functional teams to translate designs into seamless user experiences, while ensuring code quality, maintainability, and performance. Gained hands-on experience in integrating frontend features with backend APIs, debugging complex issues, and implementing best practices for modern web development.",
    skills: [
        "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "React JS",
  "Express JS",
  "Node JS",
  "MongoDB",
  "SQL",

      ],
    },
  ];
  
  export const education = [
    
    {
      id: 1,
      img: bsaLogo,
      school: "Gandhi Engineering College, Bhubaneswar",
      date: "Sept 2022 - May 2026",
      grade: "8.4 CGPA",
   desc: "Final-year B.Tech student in Computer Science at Gandhi Engineering College, Bhubaneswar. Gained practical knowledge in Data Structures & Algorithms, Web Development, and Database Management Systems through coursework and academic projects that apply theoretical concepts to real-world problems."
,
     degree: " Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 2,
      img: XIILogo,
      school: "Renaissance Higher Secondary School, Jajpur",
      date: "July 2020 - June 2022",
      grade: "83.83%",
      desc: "Completed my Higher Secondary education at Renaissance Higher Secondary School, Jaraka, under the CHSE board, studying Physics, Chemistry, Mathematics, and Biology (PCMB). Built a strong foundation in science and mathematics, supporting my pursuit of a career in technology.",
      degree: "Higher Secondary (PCMB)",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: " INSTA CLONE! 🌟",
      description:
       "InstaClone is a full-stack social media application inspired by Instagram, featuring secure user authentication, dynamic post creation and deletion, and real-time chat between users. The app includes seamless media uploads via Cloudinary, efficient state management with Context API and React Hooks, and a responsive, user-friendly interface, delivering a cohesive and interactive social experience.",  
      image: Instagram,
      tags: ["MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Socket.IO",
  "JWT",
  "Bcrypt.js",
  "Cloudinary",
   "ShadCN UI",
   "Bootstrap"],
      github: " https://github.com/sproul2005/INSTAGRAM_CLONE.git",
      webapp: "https://instagram-clone-qobx.onrender.com/",
    },
     {
      id: 1,
      title: "MEDIMEET",
       description:
      "A full-stack Doctors Appointment application with video call functionality, connecting patients and doctors seamlessly. Features include secure user authentication, doctor onboarding, subscription plans, appointment booking, cancelation, notes management, and real-time video calls powered by Vonage. The app also includes an admin dashboard for managing users and appointments, offering a responsive and intuitive interface for a complete healthcare experience.",
      image: medimeet,
      tags: ["Next.js",
  "React.js",
  "Tailwind CSS",
  "ShadCN UI",
  "NeonDB",
  "Prisma",
  "Clerk Authentication",
  "Vonage API",
  "REST APIs",
  "Custom Hooks"],
      github: "https://github.com/sproul2005/MEDIMEET",
      webapp: "https://medimeet-d27fnqv8c-satya-prakash-rouls-projects.vercel.app/",
    },
    {
      id: 2,
      title: " Wanderlust 🌟",
      description:
      "Wanderlust is a full-stack platform that allows travelers to create, explore, and manage listings seamlessly. The app features secure user authentication, dynamic CRUD operations, intuitive navigation, and a responsive, user-friendly interface. Integrated with Cloudinary for efficient image handling, it provides a cohesive and practical web application experience.",
       image: githubgapsapLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","REACT.JS","EXPRESS.JS","NODE.JS","MONGODB"],
      github: "https://github.com/sproul2005/WANDERLUST.git",
      webapp: "https://wanderlust-i0mb.onrender.com ",
    },
    
    {
      id: 3,
      title: "Job Portal",
      description:
       "A MERN Stack Job Portal connecting job seekers and recruiters. Features secure signup/login with JWT, candidate profile management, job browsing and saving, application tracking, and a recruiter/admin dashboard for managing companies, job postings, and applicants. Provides a responsive and user-friendly interface for a seamless hiring experience.",
     image: JobPortal,
      tags: [  "HTML", "CSS", "JavaScript", "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "ShadCN UI",
  "Redux Toolkit",
  "Framer Motion",
  "JWT",
  "Multer",
  "REST APIs" ],
      github: "https://github.com/sproul2005/JOBPORTAL",
      webapp: "https://jobportal-as0d.onrender.com/",
    },
    {
      id: 4,
      title: "AI Virtual Assistant",
      description:
         "A full-stack Virtual Assistant application that interacts with users through voice and text. Features include user authentication, dynamic home page responses, Cloudinary integration for media handling, and seamless speech recognition and text-to-speech functionality. The app also supports customized assistant settings and optimized response handling, providing an intuitive and interactive user experience.",
     image: AiVoiceAssistant,
      tags: ["MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "JWT",
  "Cloudinary",
  "Multer",
  "Speech Recognition API",
  "Web Speech API",
  "REST APIs","HTML","CSS", "JavaScript"],
      github: "https://github.com/sproul2005/AI-Virtual-Assistant",
      webapp: "https://ai-virtual-assistant-qmf4.onrender.com",
    },

   
    {
      id: 5,
      title: "Simon Says Game",
      description:
       "A classic Simon Says memory game implemented purely on the frontend. Users follow color and sound patterns generated by the game, which increase in complexity with each round. The game features an interactive UI, responsive design, and visual/audio feedback to enhance the gameplay experience.",
      image: simon,
      tags: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/sproul2005/Simon_Says_Game",
      webapp: "https://sproul2005.github.io/Simon_Says_Game/",
    },
    
  ];  