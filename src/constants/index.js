import herDay from "../assets/projects/herDay.png";
import portfolioRutika from "../assets/projects/portfolio-rutika1.jpg";
import chatboxDashbord from "../assets/projects/chatbox_dashboard.jpg";
import weatherDashboard from "../assets/projects/weather_dashboard.jpg";

export const HERO_CONTENT = `I craft high-performance, scalable UIs with React, TypeScript, Redux, Context API, and GraphQL—built for speed, efficiency, and seamless user experiences. With Framer Motion, I transform static interfaces into fluid, interactive designs that captivate and engage. Powered by Tailwind, SCSS, and optimized API handling, I build fast, responsive, and future-proof front-end solutions.`;

export const ABOUT_TEXT = `I am a passionate Front-End Developer with a knack for crafting robust, high-performance, and user-centric web applications. With 6+ years of hands-on experience, I have honed my skills in modern front-end technologies like React, TypeScript, Redux, Context API, and GraphQL, along with styling frameworks such as Tailwind CSS, SCSS, and Material-UI. I specialize in building scalable, maintainable, and accessible UI components, optimizing performance, and ensuring seamless API integrations. Additionally, I bring interfaces to life with Framer Motion, creating smooth, interactive, and visually appealing animations that enhance user experience. I am dedicated to leveraging my skills to create engaging, responsive, and visually stunning digital experiences that enhance user satisfaction and drive business growth.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Technology Lead – Front End Developer",
    company: "Infosys Ltd. (Verizon)",
    description: `Leading React.js 18 and Angular development for high-performance applications, optimizing Ordering, Account Inquiry, and Quoting modules to accelerate API processing by 40%. Designed and deployed a secure government quoting-to-ordering system, streamlining workflows by 35% while modernizing legacy class-based React components with Hooks such as useMemo for performance optimization, useCallback for efficient function handling, and useContext for state management without prop drilling. Integrated GraphQL to eliminate over-fetching, enhance API efficiency, and collaborated on Angular dashboards, leveraging NgRx for state management and RxJS for reactive data streams to ensure seamless cross-framework interoperability. Additionally, mentoring junior developers and enforcing Git best practices, code reviews, and Agile development workflows to ensure high-quality, scalable, and maintainable code.`,
    technologies: ["ReactJS", "Angular", "TypeScript", "GraphQL", "REST API", "Redux", "Context API", "TailwindCSS", "Github-CoPilot", "Jest" ],
  },
  {
    year: "2020 - 2023",
    role: "Technology Lead(2022 to 2023) & Technology Analyst(2020 to 2022) - Front End Developer",
    company: "Infosys Ltd. (DirecTV)",
    description: `Optimized high-volume content delivery systems using React.js 16, reducing page load times by 30% and increasing user engagement through performance-driven enhancements. Led the React.js CMS platform customization, improving editorial workflows by 40% through headless CMS integration with AEM (Adobe Experience Manager) and Storyblok, server-side rendering (SSR), and Storybook documentation for UI consistency. Managed AEM Admin tasks, including content updates, workflow optimizations, and publishing processes, ensuring smooth content delivery and efficient editorial operations. Implemented unit and integration testing using Jest and React Testing Library, improving test coverage and reducing production issues by 40%. Enhanced application performance using lazy loading (React.lazy()), Suspense, and efficient API handling. Collaborated with DevOps teams to streamline deployments, optimize content management workflows, and ensure seamless pre- and post-production releases while maintaining high-performance UI standards.`,
    technologies: ["ReactJs", "CSS3", "Material-UI", "JavaScript", "TypeScript", "AEM", "Storyblok", "Jest", "React Testing Library",],
  },
  {
    year: "2019 - 2020",
    role: "Junior Front End Developer",
    company: "Infosys Ltd. (Verizon)",
    description: `Started my career as a Junior Front-End Developer, building interactive and responsive web applications using JavaScript. Focused on writing clean, maintainable code while improving API integration and data handling for smoother user interactions. Gained experience in DOM manipulation, event handling, and optimizing front-end performance to enhance page speed and responsiveness. Worked closely with senior developers and UX teams, translating wireframes into pixel-perfect, cross-browser-compatible applications while debugging and improving front-end workflows.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Event-Handling", "RESTful API & Fetch API", "Chrome DevTools", "GitLab"],
  },
  {
    year: "2018 - 2019",
    role: "Intern - Front End Developer",
    company: "Tuutkia LLC",
    description: `Gained hands-on experience in front-end development using Angular, focusing on building dynamic and responsive web applications. Assisted in developing reusable Angular components, optimizing data binding and state management for better performance. Worked closely with senior developers to implement RxJS-based asynchronous operations and ensure seamless API integration. Conducted testing and debugging using Chrome DevTools, improving application stability and performance`,
    technologies: ["HTML5 & CSS3", "TypeScript", "Angular 6+", "RxJS", "Angular Material" ,"RESTful APIs", "Chrome DevTools", "GitHub"],
  },
];

export const PROJECTS = [
  {
    title: "HerDay – Smart Planner App for Modern Motherhood (Coming Soon)",
    image: herDay,
    description:"HerDay is a mobile-first productivity app designed to simplify scheduling, task management, and daily routines for busy mothers. It features a smart in-built planner and a fully customizable layout, enabling moms to personalize their planning experience—whether it's organizing grocery runs, tracking family activities, or managing self-care. Built with Flutter for iOS and Android, and powered by a robust backend using Node.js, Apollo Server, GraphQL, Prisma ORM, and PostgreSQL, HerDay ensures speed, flexibility, and scalability. Currently in development, HerDay emphasizes user-centered design, seamless UX, and strong data privacy. Future updates will include AI-driven smart suggestions, intelligent reminders, and voice-assisted task input.",
    technologies: ["MongoDB", "ExpressJs", "React", "Node.js", "Framer Motion", "Tailwind CSS", "OpenAI Codex"],
  },
  {
    title: "Portfolio",
    image: portfolioRutika,
    description:
      "Built with React.js, Tailwind CSS, and Framer Motion, this project delivers a seamless and dynamic user experience with smooth animations and responsive design. Combining modern UI principles with optimized performance, it ensures an interactive and visually appealing interface.",
    technologies: ["ReactJS", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "PatroHex AI chat",
    image: chatboxDashbord,
    description:"I designed and developed a sleek, dark-themed AI chatbot featuring OpenAI integration, responsive design, and a modern user interface. The application demonstrates my skills in React, TypeScript, and API integration while delivering a professional chat experience with real-time responses.",
    technologies: ["React", "TypeScript", "Vite 6", "OpenAI API"],
  },
  {
    title: "Weather Dashboard",
    image: weatherDashboard,
    description:
      "A moThe Weather Dashboard is a responsive web app that provides real-time weather updates using the OpenWeather API, featuring city-based search, hourly and daily forecasts, a weather map, and an integrated calendar for date-based weather tracking. It also includes temperature unit toggling between Fahrenheit and Celsius, along with dark mode support for a smooth user experience.",
    technologies: ["ReactJS", "CSS3", "Openweather API", "Vite", "Vercel"],
  },
];

export const CONTACT = {
  address: "137 Barnosky Court, South Plainfield, NJ 07080",
  phoneNo: "+1 (551) 229-5382 ",
  email: "rutikap0619@gmail.com/rutika.patel202@gmail.com",
};
