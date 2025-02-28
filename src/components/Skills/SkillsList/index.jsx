import { List } from './styles';
import { SkillCard } from '../SkillCard';

import { FaReact, FaNodeJs, FaJava, FaAngular, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiStyledcomponents, SiSpring, SiMongodb, SiMysql, SiPostgresql,SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const SkillsList = () => {
    const skills = [
        { icon: FaHtml5 },
        { icon: FaCss3Alt },
        { icon: FaJs },
        { icon: SiTypescript },
        { icon: FaReact },
        { icon: RiNextjsFill },
        { icon: FaNodeJs },    
        { icon: SiStyledcomponents },
        { icon: SiTailwindcss },
        { icon: FaJava },
        { icon: SiSpring },
        { icon: FaAngular },
        { icon: SiExpress },
        { icon: SiMongodb },
        { icon: SiMysql },
        { icon: SiPostgresql },
    ];

    return (
        <List>
            {skills.map((skill, index) => (
                <SkillCard key={index} icon={skill.icon} />
            ))}
        </List>
    );
};