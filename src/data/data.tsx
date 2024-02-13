import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
  title: 'Kevin Lee\'s Personal Website',
  description: "Kevin Lee\'s Personal Website built with nextjs and tailwindcss",
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
        Hi! I'm <strong className="text-stone-100">Kevin</strong>, Computer Science Masters student at <strong className="text-stone-100">Purdue University</strong>. 
        <br></br>
        My interest areas are: <strong className="text-stone-100">AI/ML, NLP, and LLMs</strong>. 
        <br></br>
        I am currently looking for following jobs: 
        <br></br>
        <strong className="text-stone-100">AI/ML Engineer, Data Scientist, Software Engineer or Fullstack Developer</strong>.
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
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Nextjs',
        level: 8,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Spring',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 6,
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
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'August 2014 - May 2020',
    location: 'The Ohio State University, College of Engineering',
    title: 'Bachelor of Science in Computer Science and Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2020 - May 2023',
    location: 'Purdue University, Department of Computer Science',
    title: 'Graduate Teaching Assistant',
    content: (
      <div>
        <ul>
          <li>Assisted professor in a Software Development in C class with over 400 students.</li>
          <li>Designed homework and exam problems with the instruction team.</li>
          <li>Held lab sessions, office hours, and virtual help sessions to assist students who needed help.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'May 2019 - May 2020',
    location: 'Wexner Medical Center, Department of Obstetrics and Gynecology',
    title: 'Student Research Assistant',
    content: (
      <div>
        <ul>
          <li>Participated in Virtual Patient research, helping medical students to train for doctor-to-patient conversations.</li>
          <li>Updated and maintained Speech to Text and Text to Speech components of Virtual Patient applications using Unity, C#, and Java.</li>
          <li>Gained experience collaborating with a group of professionals from the medical field & natural language processing field.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'January 2019 - May 2019',
    location: 'The Ohio State University, Department of Computer Science and Engineering',
    title: 'Undergraduate Teaching Assistant',
    content: (
      <div>
        <ul>
          <li>Assisted professor in a Software Development Java class with 42 students.</li>
          <li>Explained and clarified questions students had during office hours and closed lab.</li>
          <li>Graded projects and homework; Successfully balanced student workload with teaching workload.</li>
        </ul>
      </div>
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
    location: 'Google',
    title: 'Machine Learning Bootcamp ',
    content: (
      <div>
        <ul>
          <li>Acquired skills in deep learning, computer vision, and natural language processing.</li>
          <li>Gained knowledge of TensorFlow and completed Kaggle competition with top 7%.</li>
          <li>Gained hands-on experience in ResNets, MobileNet, YOLO, U-Net, and Transformer Network.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'May 2022 - December 2022',
    location: 'En-core',
    title: 'Playdata Bootcamp',
    content: (
      <div>
        <ul>
          <li>Acquired skills in front end & back end development, and artificial intelligence applications.</li>
          <li>Gained knowledge of JavaScript, React, Next.js, Spring Boot, MySQL, and Python.</li>
          <li>Gained leadership experience through leading teams and project presentations</li>
        </ul>
      </div>
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
