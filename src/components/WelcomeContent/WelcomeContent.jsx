import React from 'react';
import {
  PublicPageContainer,
  ContentWrapper,
  LogoWelcome,
  BgImage,
  WelcomeTitle,
  WelcomeText,
  RegistrationBtn,
  SignInBtnW,
} from 'components/WelcomeContent/WelcomeContent.styled';
import Logo from 'components/Logo/Logo';

const WelcomeContent = () => {
  return (
    <BgImage>
      <PublicPageContainer>
        <ContentWrapper>
          <LogoWelcome>
            <Logo width={'100%'} height={'100%'} />
          </LogoWelcome>

          <WelcomeTitle>Welcome to the app!</WelcomeTitle>
          <WelcomeText>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </WelcomeText>
          <RegistrationBtn to="/register">Registration</RegistrationBtn>
          <SignInBtnW to="/signin">Sign In</SignInBtnW>
        </ContentWrapper>
      </PublicPageContainer>
    </BgImage>
  );
};

export default WelcomeContent;
