import React from 'react';
import styled from 'styled-components';
import myImage from '../assets/png/myImage.jpg';

import { GoDownload } from "react-icons/go";
import { IoCallOutline, IoLocationSharp } from "react-icons/io5";

const Home = ({ darkMode }) => {
  const phoneNumber = '+2348100973372';

  return (
    <Container darkMode={darkMode}>
      <Devl>
        <h1>Developer</h1>
      </Devl>
      <ImageContainer>
        <img src={myImage} alt="myImage" />
      </ImageContainer>
      <TextContainer>
        <p>Hi, I am</p>
        <h2>Olaide ADEYEMO</h2>
        <p>
          I am a frontend software developer with a passion for creating visually appealing and
          user-friendly websites. Specializing in HTML, CSS, JavaScript, and React.
        </p>
        <h4><IoLocationSharp /> Lagos, Nigeria.</h4>
        <MyBio>
          <CVButton href="my-cv.pdf" download="My_CV">Download CV <GoDownload /></CVButton>
          <CButton href={`tel:${phoneNumber}`}> <IoCallOutline /> Contact </CButton>
        </MyBio>
      </TextContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 40px;
  gap: 20px;
  background: ${({ darkMode }) => (darkMode ? '#333' : `#fcdada`)};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
  max-width: 1280px;
  margin: 50px auto;
  flex-wrap: wrap-reverse;
  position: relative;
  border-radius: 30px 0;
  box-shadow: rgba(0, 0, 0, 1) 0px 25px 50px -12px;
  

  @media (max-width: 1200px) {
    padding: 15px 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 20px;
    margin-top: 30px;
  
  }

  @media (max-width: 480px) {
    padding: 15px;
   p{
    
    margin-left: 10px;
   }
  }

 
`;

const Devl = styled.div`
  margin-right: 20px;

  h1 {
    transform: rotate(270deg);
    white-space: nowrap;
    color: #a39d9d;
    font-size: 30px;
    font-weight: bold;
    margin-left: -80px;
    letter-spacing: 25px;
    position: absolute;
    left: -40px;
    bottom: 170px;

    @media (max-width: 768px) {
      transform: rotate(0);
      position: static;
      margin: 0;
      letter-spacing: 10px;
      text-align: center;
      margin-left: -40px;

     
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  box-shadow: #eaacac 0px 25px 50px -12px;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-width: 350px;
    }

    @media (max-width: 480px) {
      max-width: 300px;
    }
  }
`;

const TextContainer = styled.div`
  flex: 2;
  margin-left: 100px;

  h2 {
    font-size: 28px;
    margin: 20px 0;
    color: tomato;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  h4 {
    margin-top: 10px;
    font-size: 18px;
    color: ${({ darkMode }) => (darkMode ? '#FFF' : '#333')};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }

    p, h4 {
      font-size: 16px;
    }
  }
`;

const MyBio = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CVButton = styled.a`
  padding: 8px 16px;
  border-radius: 0 15px;
  border: 2px solid white;
  background-color: tomato;
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #743126;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const CButton = styled.a`
  padding: 8px 16px;
  border-radius: 15px 0;
  border: 1px solid tomato;
  background-color: white;
  color: tomato;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #743126;
    color: white;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
