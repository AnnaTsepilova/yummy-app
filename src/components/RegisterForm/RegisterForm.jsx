import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import iconUser from 'images/AuthImages/icon-user-mob.svg';
import iconMail from 'images/AuthImages/icon-mail-mob.svg';
import iconLock from 'images/AuthImages/icon-lock-mob.svg';
import {
  FormContainer,
  FormWrapper,
  FormTitle,
  Form,
  FormInput,
  FormButton,
  FormSwitch,
  FormLink,
  InputWrap,
} from './registerForm.styled';

const RegisterForm = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === '/signin';
  const [isRegistration, setIsRegistration] = useState(!isLogin);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (isRegistration) {
      axios
        .post('http://localhost:5000/api/auth/signup', formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      axios
        .post('http://localhost:5000/api/auth/signin', formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <FormContainer>
        <FormWrapper>
          <FormTitle>{isLogin ? 'Sign In' : 'Registration'}</FormTitle>
          <Form className={isLogin ? 'signin' : ''} onSubmit={handleSubmit}>
            {!isLogin && (
              <InputWrap iconUrl={iconUser}>
                <FormInput
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </InputWrap>
            )}
            <InputWrap iconUrl={iconMail}>
              <FormInput
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </InputWrap>
            <InputWrap iconUrl={iconLock}>
              <FormInput
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </InputWrap>
            <FormButton>{isRegistration ? 'Sign up' : 'Sign in'}</FormButton>
          </Form>
        </FormWrapper>
        <FormSwitch>
          <FormLink
            exact
            to={isLogin ? '/register' : '/signin'}
            onClick={() => setIsRegistration(!isRegistration)}
          >
            {isRegistration ? 'Sign in' : 'Registration'}
          </FormLink>
        </FormSwitch>
      </FormContainer>
    </>
  );
};

export default RegisterForm;
