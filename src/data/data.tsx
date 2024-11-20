import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  // CalendarIcon,
  // FlagIcon,
  // MapIcon,
  SparklesIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import project1pic from '../images/project1.png';
import project2pic from '../images/project2.gif';
import project3pic from '../images/project3.png';
// import involvement1pic from '../images/involvement1.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Kevin Lee's Personal Website",
  description: "Kevin Lee's Personal Website built with nextjs and tailwindcss",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Education: 'education',
  Experience: 'experience',
  Projects: 'projects',
  Publications: 'publications',
  Involvement: 'involvement',
  Skill: 'skills',
  Skills: 'skills',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Kevin Lee`,
  description: (
    <>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p> */}
      <p className="prose-sm text-stone-200 mx-10 sm:prose-base lg:prose-lg">
        Hi! I'm <strong className="text-stone-100">Kevin</strong>, a recent Computer Science Masters graduate from <strong className="text-stone-100">Purdue University</strong>. 
        <br></br>
        I completed my undergraduate studies at Ohio State University, majoring in Computer Science and Engineering.
        <br></br>
        My research interests include <strong className="text-stone-100">AI/ML, Health Informatics, Natural Language Processing, and Large Language Models</strong>.
        {/* <br></br>
        I am currently looking for following jobs: 
        <br></br>
        <strong className="text-stone-100">AI/ML Engineer, Data Scientist, Software Engineer or Fullstack Developer</strong>. */}
      </p> 
    </>
  ),
  actions: [
    {
      href: '/CV (Kevin Lee).pdf',
      text: 'Download CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
      target: "_blank", 
      rel: "noopener noreferrer",
      locale: false,
    },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Email', text: 'kevindclee@gmail.com', Icon: EnvelopeIcon},
    {label: 'Phone', text: '(380) 997-8856', Icon: PhoneIcon},
    {label: 'Nationality', text: 'American / Korean', Icon: GlobeAmericasIcon},
    {label: 'Interests', text: 'AI/ML, NLP, LLMs', Icon: SparklesIcon},
    {label: 'Study', text: 'Purdue Univ., The Ohio State Univ.', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Purdue Univ., Wexner Medical Center', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Korean',
        level: 10,
      },
      {
        name: 'Japanese',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Nextjs',
        level: 10,
      },
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Spring',
        level: 10,
      },
      {
        name: 'Node.js',
        level: 10,
      },
    ],
  },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2020 - May 2023',
    location: 'Purdue University, College of Science',
    title: 'Master of Science in Computer Science',
    content: <p></p>,
  },
  {
    date: 'August 2014 - May 2020',
    location: 'The Ohio State University, College of Engineering',
    title: 'Bachelor of Science in Computer Science and Engineering',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2020 - May 2023',
    location: 'Purdue University, Department of Computer Science',
    title: 'Graduate Teaching Assistant',
    content: (
      <p>
        As a Graduate Teaching Assistant at Purdue University's Department of Computer Science, responsibilities included assisting the professor in a Software Development in C class with over 400 students. 
        Collaboration with the instructional team led to the design of homework and exam problems, ensuring alignment with course objectives. 
        Additionally, lab sessions, office hours, and virtual help sessions were conducted to provide personalized support and guidance to students in need.
      </p>
    ),
  },
  {
    date: 'May 2019 - May 2020',
    location: 'Wexner Medical Center, Department of Obstetrics and Gynecology',
    title: 'Research Assistant',
    content: (
      <p>
        As a Research Assistant at Wexner Medical Center's Department of Obstetrics and Gynecology, I contributed to Virtual Patient research aimed at enhancing medical students' training for doctor-to-patient conversations. 
        This role involved updating and maintaining Speech to Text and Text to Speech components of Virtual Patient applications utilizing Unity, C#, and Java. 
        Through collaboration with professionals from both the medical field and natural language processing field, I was able to gain valuable experience and insights into interdisciplinary teamwork and research methodologies.
      </p>
    ),
  },
  {
    date: 'January 2019 - May 2019',
    location: 'The Ohio State University, Department of Computer Science and Engineering',
    title: 'Undergraduate Teaching Assistant',
    content: (
      <p>
        As an Undergraduate Teaching Assistant at The Ohio State University's Department of Computer Science and Engineering, I supported the professor in a Software Development Java class comprising 42 students. 
        Duties included providing explanations and clarifications to students during office hours and closed lab sessions. 
        Additionally, I was responsible for grading projects and homework, successfully managing student workload while fulfilling teaching responsibilities.
      </p>
    ),
  },
];

export const projects: TimelineItem[] = [
  {
    date: 'May 2019 - May 2020',
    location: 'Wexner Medical Center',
    title: 'Virtual Patient Project',
    content: (
      <p>
        Participated in Virtual Patient research, helping OSU medical students to train for doctor-to-patient conversations. The program was built using Unity 3D, Speech to Text, Neural Networks (CNN, RNN), and Text to Speech. 
        Updated and maintained Speech to Text and Text to Speech components of Virtual Patient applications using Unity, C#, and Java.
        <br></br>
        <br></br>
        <a className="hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 sm:hover:text-teal-400" href="https://accad.osu.edu/research-gallery/virtual-patient-project" target="_blank" rel="noopener noreferrer">
          <i>https://accad.osu.edu/research-gallery/virtual-patient-project</i>
        </a>
      </p>
    ),
    itemImage: project1pic,
  },
  {
    date: 'February 2023 - May 2023',
    location: 'Purdue University',
    title: 'Backdoor Attack on Language Model Code Generators ',
    content: (
      <p>
        Participated in a project, which aimed to investigate whether inserting trigger words into these models could lead to the generation of malicious code, potentially resulting in a backdoor attack on the user's computer. 
        Performed writing web scraping code, collecting train set data for GPT-2 code generator model, and implemented trigger insertion code using Python.
        <br></br>
        <br></br>
        <a className="hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 sm:hover:text-teal-400" href="https://github.com/kevindclee/Backdoor-Attack-on-Language-Model-Code-Generators" target="_blank" rel="noopener noreferrer">
          <i>https://github.com/kevindclee/Backdoor-Attack-on-Language-Model-Code-Generators</i>
        </a>
      </p>
    ),
  },
  {
    date: 'December 2022 - January 2023',
    location: 'En-core Playdata Bootcamp',
    title: 'MyTraview',
    content: (
      <p>
        MyTraview is a web application where users can leave reviews on everything related to travel (food, transportation, accommodation, tourist attractions, themed routes, etc.). It is built with Spring Boot, Tailwind CSS, and Material UI.   
        The name "My Traview" was made by combining "My Travel" and "Review", meaning that it contains individual user's insightful and exciting travel reviews.
        <br></br>
        <br></br>
        <a className="hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 sm:hover:text-teal-400" href="https://github.com/kevindclee/MyTraview" target="_blank" rel="noopener noreferrer">
          <i>https://github.com/kevindclee/MyTraview</i>
        </a>
      </p>
    ),
    itemImage: project2pic,
  },
  {
    date: 'April 2020',
    location: 'The Ohio State University',
    title: 'GameBot',
    content: (
      <p>
        This project was Ohio State University Capstone Project for CSE 5914 (Knowledge-Based Systems) class. GameBot is a full stack web-based chatbot application that makes simultaneous game recommendations after each Q&A queries.  
        Adopted IBM Watson Assistant platform and game data is provided from Giant Bomb database.  
        <br></br>
        <br></br>
        <a className="hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 sm:hover:text-teal-400" href="https://github.com/kevindclee/GameBot" target="_blank" rel="noopener noreferrer">
          <i>https://github.com/kevindclee/GameBot</i>
        </a>
      </p>
    ),
    itemImage: project3pic,
  },
];

export const publications: TimelineItem[] = [
  {
    date: 'November 8th, 2022',
    // location: '',
    title: 'Artificial intelligence in virtual standardized patients: Combining natural language understanding and rule based dialogue management to improve conversational fidelity',
    content: (
      <p>
        Maicher, K. R., Stiff, A., Scholl, M., White, M., Fosler-Lussier, E., Schuler, W., Lee, K., & Danforth, D. R. et al. (2022). Medical teacher, 1-7. Advance online publication.
        <br></br>
        <br></br>
        This research paper shows development of an artificial intelligence (AI) system for Virtual Standardized Patients (VSPs) aimed at enhancing students' history-taking skills. 
        The system integrates Automated Speech Recognition (ASR), hybrid AI for question identification, a classifier to select between ASR and AI systems, and automated speech generation. 
        Analysis involving 620 first-year medical students from 2018 to 2021 showed that system accuracy improved significantly, reaching approximately 90% by 2021. 
        Positive student feedback indicated the value of practicing with VSPs, suggesting a worthwhile learning experience. 
        Overall, the novel hybrid dialogue system enables AI-driven VSPs to effectively respond to student questions, providing a valuable tool for trainees to refine their skills before engaging with human patients.
        <br></br>
        <br></br>
        <a className="hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 sm:hover:text-teal-400" href="https://doi.org/10.1080/0142159X.2022.2130216" target="_blank" rel="noopener noreferrer">
          <i>https://doi.org/10.1080/0142159X.2022.2130216</i>
        </a>
      </p>
    ),
  },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

export const involvement: TimelineItem[] = [
  {
    date: 'September 2023 - December 2023',
    // location: 'Google',
    title: 'Google Machine Learning Bootcamp ',
    content: (
      <p>
        Participated in Google's Machine Learning Bootcamp, acquiring skills in deep learning, computer vision, and natural language processing. 
        Demonstrated proficiency in TensorFlow and achieved notable success by finishing within the top 7% in a Kaggle competition. 
        Gained practical experience with advanced models including ResNets, MobileNet, YOLO, U-Net, and Transformer Network, further expanding knowledge of machine learning techniques and applications.
        {/* <br></br>
        <br></br>
        <a className="hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 sm:hover:text-teal-400" href="https://youtu.be/XVrksI7EmiQ?si=9JkC7826hVsjFFLA" target="_blank" rel="noopener noreferrer">
          <i>https://youtu.be/XVrksI7EmiQ?si=9JkC7826hVsjFFLA</i>
        </a> */}
      </p>
    ),
    // itemImage: involvement1pic,
  },
  {
    date: 'May 2022 - December 2022',
    // location: 'En-core',
    title: 'En-core Playdata Bootcamp',
    content: (
      <p>
        During my enrollment in the En-core Playdata Bootcamp at En-core, I acquired a comprehensive skill set encompassing front end and back end development, as well as artificial intelligence applications. 
        This included proficiency in JavaScript, React, Next.js, Spring Boot, MySQL, and Python. 
        Additionally, I gained valuable leadership experience by leading teams and delivering project presentations, further enhancing my ability to collaborate effectively and communicate technical concepts.
      </p>
    ),
  },
];

export const skill: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kevindclee', target: "_blank", rel: "noopener noreferrer",},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kevindclee/', target: "_blank", rel: "noopener noreferrer",},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
