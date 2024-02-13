import {FC, memo} from 'react';

// import {education, experience, projects, publications, involvement, skill, SectionId, skills} from '../../../data/data';
import {education, experience, projects, publications, involvement, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <div className="flex flex-col divide-y-2 px-40 bg-neutral-100 divide-neutral-300">
      {/* <Section className="bg-neutral-100" sectionId={SectionId.Education}>
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <ResumeSection title="Education">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Experience">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Project">
            {project.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Skills">
            <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((skillgroup, index) => (
                <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
              ))}
            </div>
          </ResumeSection>
        </div>
      </Section> */}
      <Section className="bg-neutral-100" sectionId={SectionId.Education}>
          <ResumeSection title="Education">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
      </Section>
      <Section className="bg-neutral-100" sectionId={SectionId.Experience}>
          <ResumeSection title="Experience">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
      </Section>
      <Section className="bg-neutral-100" sectionId={SectionId.Projects}>
          <ResumeSection title="Projects">
            {projects.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
      </Section>
      <Section className="bg-neutral-100" sectionId={SectionId.Publications}>
          <ResumeSection title="Publications">
            {publications.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
      </Section>
      <Section className="bg-neutral-100" sectionId={SectionId.Involvement}>
          <ResumeSection title="Involvement">
            {involvement.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
      </Section>
      {/* <Section className="bg-neutral-100" sectionId={SectionId.Skill}>
          <ResumeSection title="Skill">
            {skill.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
      </Section> */}
      <Section className="bg-neutral-100" sectionId={SectionId.Skills}>
        <ResumeSection title="Skills">
          <p className="grid grid-cols-1 gap-4 my-2 md:grid-cols-5">
              <img className="h-5" alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=plastic&logo=react&logoColor=white" /> 
              <img className="h-5" src="https://img.shields.io/badge/Material UI-007FFF?style=plastic&logo=Material UI&logoColor=white" /> 
              <img className="h-5" alt="Google Cloud Platform" src="https://img.shields.io/badge/-Google_Cloud-1a73e8?style=plastic&logo=google-cloud&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/Microsoft_Azure-%230072C6.svg?style=plastic&logo=microsoft-azure&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=plastic&logo=css3&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/C-%2300599C.svg?style=plastic&logo=c&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/MySQL-005C84?style=plastic&logo=mysql&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/Latex-%23008080.svg?style=plastic&logo=latex&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=plastic&logo=tailwind-css&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/Neo4j-008CC1?style=plastic&logo=neo4j&logoColor=white" /> 
          </p>
          {/* <br></br> */} 
          <p className="grid grid-cols-1 gap-4 my-2 md:grid-cols-5">
              <img className="h-5" alt="git" src="https://img.shields.io/badge/-Git-F05032?style=plastic&logo=git&logoColor=white" />
              <img className="h-5" alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=plastic&logo=html5&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=plastic&logo=PyTorch&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=plastic&logo=TensorFlow&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=plastic&logo=scikit-learn&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=plastic&logo=openjdk&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/Keras-%23D00000.svg?style=plastic&logo=Keras&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=plastic&logo=ruby-on-rails&logoColor=white" />
              <img className="h-5" alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=plastic&logo=npm&logoColor=white" />
              <img className="h-5" alt="Sass" src="https://img.shields.io/badge/-Sass-CC6699?style=plastic&logo=sass&logoColor=white" />
          </p>
          {/* <br></br> */}
          <p className="grid grid-cols-1 gap-4 my-2 md:grid-cols-5">
              <img className="h-5" src="https://img.shields.io/badge/Spring-%236DB33F.svg?style=plastic&logo=spring&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/SpringBoot-6DB33F?style=plastic&logo=SpringBoot&logoColor=white" />  
              <img className="h-5" alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=plastic&logo=Node.js&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/Javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E" />
              <img className="h-5" src="https://img.shields.io/badge/Python-14354C?style=plastic&logo=python&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/Numpy-%23013243.svg?style=plastic&logo=numpy&logoColor=white" />
              <img className="h-5" src="https://img.shields.io/badge/Pandas-%23150458.svg?style=plastic&logo=pandas&logoColor=white"/>
              <img className="h-5" alt="Next.js" src="https://img.shields.io/badge/Nextjs-black?style=plastic&logo=next.js&logoColor=white" />
          </p>
          <br></br>
          <br></br>
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </Section>
    </div>
    
    
  );
});

Resume.displayName = 'Resume';
export default Resume;
