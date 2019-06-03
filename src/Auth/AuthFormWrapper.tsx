import React from 'react';
import Logo from '../assets/logo-light.png';
import { AuthWrapper, BottomContainer, FormContainer, FormWrapper, Separator, TopContainer, TopSentence, VioletField } from './Auth.components';



interface Props {
  footer: JSX.Element;
}


const AuthFormWrapper: React.FC<Props> = ({children, footer}) => (
  <AuthWrapper>
  <VioletField />
  <FormWrapper>
  <TopContainer>
  <TopSentence>Share your ideas. Get instant feedback. <b>Have fun!</b></TopSentence>

  <Separator />
  </TopContainer>
  <FormContainer>
  
    <h2>Welcome to</h2>
    <img src={Logo} />
    {children}
    </FormContainer>
      <BottomContainer>
      <Separator />
      {footer}
      </BottomContainer>
    </FormWrapper>

    </AuthWrapper>
)

export default AuthFormWrapper;