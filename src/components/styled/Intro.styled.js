import styled from 'styled-components';

export const IntroductionContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
  background-color: #f7f7f7;
`;

export const IntroductionHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
`;

export const IntroductionText = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const IntroductionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const IntroductionListItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  
  &:last-child {
    margin-right: 0;
  }
`;

export const IntroductionLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;