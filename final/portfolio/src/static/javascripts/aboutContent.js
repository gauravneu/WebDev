import coder from '../images/coder.jpg';
import background from '../images/background.jpg';
import history from '../images/history.jpg';
import today from '../images/today.jpg';
import hobby from '../images/hobby.jpg';
import skills from '../images/skills.jpg';

const aboutSection = [
    {
        source: coder,
        alt: 'Image of coder to tell about coder',
        title: `About`,
        content: `Highly skilled and motivated software engineer with strong foundation
        in multiple programming languages and technologies. Proficient in developing
        and maintaining software applications, with a focus on delivering high-quality,
        reliable, and scalable solutions. Skilled in problem-solving and able to
        work effectively in both individual and team environments. Committed to
        staying up-to-date with the latest trends and technologies in software development.`,
        buttonRef: ``,
        buttonTitle: `Know More About Gaurav`
    },
    {
        source: background,
        alt: 'Image showing background of coder',
        title: `Background`,
        content: `7 years back, when I was graduating as Civil Engineer, I never thought I would
        ever say something like that but yeah, I love coding and I am passionate about
        writing programs and solving real-world problems with my coding skills. I believe
        that good programmers and their programs help to transform and improve the lives
        of people around the globe.`,
        buttonRef: `/education.html`,
        buttonTitle: `Know More About Gaurav`,
        ariaLabel: `Click here to know more about Gaurav`
    }, {
        source: history,
        alt: 'Image showing background of coder',
        title: `History`,
        content: `When I wrote my first “Hello World” program, it was the toughest yet most satisfying
        experience to realize the power of programming. My first assignment was with Infosys
        Limited working for a major telecom service provider in Australia and it was for
        developing middleware applications to simplify the complex issues for them. And
        from then for the last five and half years, I’ve worked on various technologies
        and understood and solved clients’ problems by using my technical and communication skills.`,
        buttonRef: ``,
        buttonTitle: `Know history of Gaurav`
    },
    {
        source: today,
        alt: 'Image showing present of coder',
        title: `Today`,
        content: `Currently, I am in first semester of Masters in information systems at Northeastern
        University and I am studying "Application Engineering and Development" and "Data
        Management and Database Design". The tentative date of program completion is Dec 2023.
        I am confident that my new skills would help me to better understand practical
        problems and provide a better solution for them.`,
        buttonRef: ``,
        buttonTitle: `Know present of Gaurav`
    },
    {
        source: hobby,
        alt: 'Image showing hobby',
        title: `Hobby`,
        content: `When I am not coding, I’m improvising my table tennis playing skills, learning a
        new language, building some muscles, and going on to meet old friends and spend some
        quality time with them. I love meeting new people and enjoy knowing their perspectives
        on various issues.`,
        buttonRef: ``,
        buttonTitle: `Know hobies of Gaurav`
    },
    {
        source: skills,
        alt: 'Image showing skills',
        title: `Skills`,
        content: `Languages: Java, Python, JavaScript\n
         Frameworks & APIs: Spring boot, Spring MVC, JMS, Hibernate, Junit, REST APIs, Servlets, JSP\n
          Databases: SQL Server, MySQL, MongoDB, Oracle, Redis, PL-SQL\n
           Software/Tool: Jira, Git, Jenkins, Maven, Tortoise SVN, IntelliJ, Docker, Visual Studio, Jupyter Notebook\n
            Certifications: SAFe 4 Practitioner (Scaled Agile), AWS S3 Basics (Coursera), Professional Scrum Master II`,
        buttonRef: ``,
        buttonTitle: `Know skills of Gaurav`
    },
]

export default aboutSection;   