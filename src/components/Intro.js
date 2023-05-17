import {
  AppContainer,
  IntroductionContainer,
  IntroductionHeading,
  IntroductionText,
  ProfilePhoto
} from './styled/Intro.styled';

const Intro = () => {
  return (
    <AppContainer>
      <IntroductionContainer>
        <IntroductionHeading>Hello,</IntroductionHeading>
        <IntroductionHeading>I'm Christian.</IntroductionHeading>
        <IntroductionText>Full Stack Web Developer.</IntroductionText>
        <ProfilePhoto src="PortfolioPic.jpg" alt="profilepic" />
      </IntroductionContainer>
    </AppContainer>
  );
};

export default Intro;