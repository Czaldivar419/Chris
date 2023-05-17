import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AppContainer = styled.div`
  background-color: #e8ecef; 
  color: #9e9f9f;
`;

export const IntroductionContainer = styled.section`
  max-width: 95%;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
  animation: ${fadeIn} 1s ease;

  @media only screen and (max-width: 768px) {
    padding: 50px 10px;
  }

  @media only screen and (max-width: 480px) {
    padding: 50px 5px;
  }
`;

export const IntroductionHeading = styled.h1`
  text-align: left;
  margin-left: 200px;
  position: relative;
  top: 70px;
  font-size: 5.5rem;
  vertical-align: middle;
  line-height: .2;
  text-shadow: 1px 1px 0 #ffffff, 2px 2px 0 #eeeeee;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const IntroductionText = styled.p`
  font-size: 2.7rem;
  position: relative;
  top: 70px;
  text-align: left;
  line-height: .45;
  margin-left: 200px;

  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const IntroductionLink = styled.a`
  color: #6c5ce7;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 2px solid #6c5ce7;
  transition: border-bottom-color 0.2s ease;

  &:hover {
    border-bottom-color: #ff7675;
  }
`;

export const ProfilePhoto = styled.img`
  height: 500px;
  border-radius: 20px;
  position: relative;
  top: -300px;
  right: -350px
`;