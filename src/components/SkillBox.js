import React from 'react';
import Skill from './Skill';

const skillBox = (props) => (
    <div>
        {props.skills.map((skill) => (
            <Skill key={skill} skill={skill} />
        ))}
        <h3> asdd in legend to separate language, framework and tools. demarkated by box with colors</h3>

    </div>
)

skillBox.defaultProps = {
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Node', 'React', 'Flask', 'MongoDB', 'Firebase', 'SQLite', 'SCSS', 'Git/Github', 'Jest']
}




export default skillBox;