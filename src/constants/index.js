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
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    threejs,
    photoshop,
    unreal,
    srm,
    gdgps,
    jay,
    rish,
    ayushi,
    srcc,
    prsnl_web,
    opencv,
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
      title: "React Web Developer",
      icon: web,
    },
    {
      title: "Coder | Data-Analyst",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "Tennis Player",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "Unreal Engine 5.1",
      icon: unreal,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "SRM Institute of Science and Technology",
      company_name: "College",
      icon: srm,
      iconBg: "#f2f2f2",
      date: "May 2022 - Current",
      points: [
        "I'm currently enrolled in a B.Tech program, utilizing this opportunity to develop essential skills, shape my future, and establish valuable connections.",
        "The college experience is not only enhancing my academic knowledge but also allowing me to meet and network with diverse individuals.",
      ],
    },
    {
      title: "GD Goenka Public School",
      company_name: "10th and 12th",
      icon: gdgps,
      iconBg: "#E6DEDD",
      date: "till May 2022",
      points: [
        "Completing my 10th and 12th grades at this institution was instrumental in shaping my personality.",
        "Beyond academics, the diverse experiences and challenges offered here contributed significantly to my personal growth.",
        "The supportive environment, coupled with engaging extracurricular activities, provided a well-rounded foundation that has positively impacted both my academic and personal life.",
      ],
    },
    {
      title: "Tennis",
      company_name: "Professional Tennis Player",
      icon: gdgps,
      iconBg: "#E6DEDD",
      date: "2010 - current",
      points: [
        "Participated in 3rd World Soft Tennis Championships Suncheon, Korea November 18 – November 25 representing India as 3rd seed.",
        "Secured 14th Position in ASIAN JUNIOR U14 Ranking Tournament",
        "Secured bronze medal in Sub-Junior Nationals 2017 ",
        "Secured bronze medal and silver medal in Junior Nationals 2018 ",
        "Secured bronze medal in SGFI Nationals ",
        "Secured gold medal in Senior Nationals 2019 ",
        "Secured gold medal in CBSE North Zone Clusters ",
        "Given the sportsperson of the year award from my school for continuous years for both senior and junior category",
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I want to express my appreciation for Aman. His passion for his work is truly admirable, and he consistently demonstrates a strong work ethic. Beyond that, he willingly lends a helping hand to friends in need, making him not just a reliable ally but a genuine and supportive companion.",
      name: "Rishaan Yadav",
      designation: "Student",
      company: "SRM",
      image: rish,
    },
    {
      testimonial:
        "Aman Goel is not just a name; it's a journey of inspiration. His commitment to excellence, whether on the tennis court or in the intricate world of coding, unveils a narrative of passion, tenacity, and an unwavering love for the pursuit of greatness. Aman, you are a true inspiration to us all..",
      name: "Ayushi Mishra",
      designation: "Student",
      company: "SRM",
      image: ayushi,
    },
    {
      testimonial:
        "Aman, a brilliant mind whose intelligence dazzles, brings joy to every moment with an infectious spirit. In the realm of intellect, he stands out, making complexity seem effortless. His name resonates with warmth, symbolizing not just a person but a beacon of positivity. Aman, a joyful soul, illuminates the lives of those fortunate enough to know him.",
      name: "Jayanth Nair",
      designation: "Student",
      company: "SRM",
      image: jay,
    },
  ];
  
  const projects = [
    {
      name: "Personal Website V1",
      description:
        "Made a Personal Website featuring some of my most important projects and the work I have done all over my years. Coded a self-learning intelligent AI Bot that can interactively talk to you and answer all your questions regarding me",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: prsnl_web,
      source_code_link: "https://wolfie8935.github.io/My_Personal_Website/",
    },
    {
      name: "Screen Control Using Gestures",
      description:
        "This Program can control the entire laptop screen just by using gestures and have an easy-to-use GUI. It can move mouse, left/right-click, scroll, minimize, use keyboard and detect accurate hand gestures in real time using tensorflow - mediapipe and a neural network with custom dataset to detect accurate hand gestures for smooth typing.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: opencv,
      source_code_link: "https://github.com/Wolfie8935/Screen-Control-Using-Gestures",
    },
    {
      name: "SRCC Construction Project",
      description:
        "Developed a complete website with animations for a startup company SRCC Construction",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: srcc,
      source_code_link: "https://github.com/Wolfie8935/Website_with_costum_code",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  