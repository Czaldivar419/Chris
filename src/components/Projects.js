import { 
    ProjectsContainer,
    ProjectCard,
    ProjectTitle,
    ProjectDescription
 } from "./styled/Projects.styled";

const Projects = () => {
    const projects = [
      {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: 'https://www.example.com/project1',
      },
      {
        title: 'Project 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        url: 'https://www.example.com/project2',
      },
    ];
return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <ProjectCard key={index} href={project.url} target="_blank" rel="noopener noreferrer">
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;