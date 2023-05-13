import { 
    SkillsContainer, 
    SkillsTitle,
    SkillsList,
    SkillItem }
 from "./styled/Skills.styled"

const Skills = () => {
    const skills = [
      'JavaScript',
      'React',
      'HTML5',
      'CSS3',
      'Node.js',
      'Express',
      'MongoDB',
      'Git',
      // Add more skills as needed
    ];
  
    return (
      <SkillsContainer>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </SkillsContainer>
    );
  };
  
  export default Skills;