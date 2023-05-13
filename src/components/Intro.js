import { 
    IntroductionContainer,
    IntroductionHeading,
    IntroductionText,
    IntroductionList,
    IntroductionListItem,
} 
from './styled/Intro.styled';


const Intro = () => {
    return (
      <IntroductionContainer>
        <IntroductionHeading>Hi, I'm Christian.</IntroductionHeading>
        <IntroductionText>I'm a passionate web developer with experience in building modern and responsive websites and applications. My expertise includes:</IntroductionText>
        <IntroductionList>
          <IntroductionListItem>HTML5, CSS3, and JavaScript</IntroductionListItem>
          <IntroductionListItem>React, Redux, and Node.js</IntroductionListItem>
          <IntroductionListItem>Responsive design and cross-browser compatibility</IntroductionListItem>
          <IntroductionListItem>Git, GitHub, and version control</IntroductionListItem>
        </IntroductionList>
        <IntroductionText>I believe in creating clean, efficient, and maintainable code that meets the highest standards of quality and usability. I'm always looking for new challenges and opportunities to learn and grow as a developer.</IntroductionText>
        <IntroductionText>Feel free to check out the rest of my portfolio, or get in touch to learn more about my work or discuss potential projects.</IntroductionText>
      </IntroductionContainer>
    );
  };
  
  export default Intro;