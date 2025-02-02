import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiCocos, SiGit, SiNextdotjs, SiReactivex, SiTailwindcss, SiYaml, SiMysql, SiPostgresql, SiVercel, SiGooglecloud } from 'react-icons/si';
import { FaUnity } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscAzureDevops } from 'react-icons/vsc';

export const experiences = {
    icon: '',
    title: 'My experience',
    description: 'Here is my experience.',
    items: [
        {
            company: 'Ota Information College',
            position: 'Engineering School Student',
            duration: '2020 - 2023',
        },
        {
            company: 'Proceed Inc.',
            position: 'Full Stack Developer',
            duration: '2023 - 2024',
        },
        {
            company: 'KMS Inc.',
            position: 'Front-End Developer',
            duration: '2024 - Present',
        },
    ]
};

export const skills = {
    title: 'My skills',
    description: 'Here are some of the skills I can use.\nHe has extensive knowledge of the back end and CICD.',
    skillList: [
        {
            icon: <FaUnity />,
            name: 'Unity',
        },
        {
            icon: <SiCocos />,
            name: 'CocosCreator',
        },
        {
            icon: <SiGit />,
            name: 'git',
        },
        {
            icon: <TbBrandCSharp />,
            name: 'C#',
        },
        {
            icon: <FaHtml5 />,
            name: 'HTML 5',
        },
        {
            icon: <FaCss3Alt />,
            name: 'CSS 3',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
        },
        {
            icon: <SiTypescript />,
            name: 'TypeScript',
        },
        {
            icon: <FaNodeJs />,
            name: 'Node.js',
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next.js',
        },
        {
            icon: <FaReact />,
            name: 'React',
        },
        {
            icon: <FaVuejs />,
            name: 'Vue.js',
        },
        {
            icon: <SiReactivex />,
            name: 'ReactiveX',
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS',
        },
        {
            icon: <SiYaml />,
            name: 'YAML',
        },
        {
            icon: <SiMysql />,
            name: 'MySQL',
        },
        {
            icon: <SiPostgresql />,
            name: 'PostgreSQL',
        },
        {
            icon: <SiVercel />,
            name: 'Vercel',
        },
        {
            icon: <VscAzureDevops />,
            name: 'Azure DevOps',
        },
        {
            icon: <SiGooglecloud />,
            name: 'Google Cloud',
        },
    ]
};

export const about = {
    title: 'About me',
    description: 'Here is my profile.\nTo contact me, please visit the contact page.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'amagami.',
        },
        {
            fieldName: 'Email',
            fieldValue: 'amagami.dev@gmail.com',
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+81) 90 6862 7902',
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Japan',
        },
        {
            fieldName: 'Experience',
            fieldValue: '5+ Years',
        },
        {
            fieldName: 'Languages',
            fieldValue: 'Japanese, English',
        },
    ]
};