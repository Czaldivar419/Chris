import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  margin: 10px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  text-align: center;
`;