import React from 'react';
import Skill from './Skill';
import '../styles/SkillBox.css'

const skillBox = (props) => (
    <div className='skillBox'>
        {props.skills.map((skill) => (
            <Skill key={skill} skill={skill} />
        ))}

    </div>
)

skillBox.defaultProps = {
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python', 'Flask', 'MongoDB', 'Firebase', 'SCSS', 'Git/Github', 'Jest']
}

export default skillBox;