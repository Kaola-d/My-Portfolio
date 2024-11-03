import React from 'react';
import { GoArrowRight } from "react-icons/go";
import styled from 'styled-components';

import html from "../assets/png/html.png";
import css from "../assets/png/css.png";
import javascript from "../assets/png/javascript.png";
import react from "../assets/png/react.png";
import github from "../assets/png/github.png";
import gitcontrol from "../assets/png/gitcontrol.png";
import vscode from "../assets/png/vscode.png";
import styledcomponents from "../assets/png/styledcomponents.png";
import api from "../assets/png/api.png";
import expressjs from "../assets/png/expressjs.png";
import mongo from "../assets/png/mongo.png";

const About = ({ darkMode }) => {
  return (
    <AboutMe darkMode={darkMode}>
      <AboutContainer>
        <h1>About Me <GoArrowRight /></h1>
        <p>
        👋 Hi, I’m Olaide, a passionate software developer specializing in crafting clean, modern, and user-friendly websites that prioritize real value for the end-user. With a knack for combining sleek design with seamless functionality, I deliver projects on time, within budget, and always tailored to client needs.<br></br>Driven by my commitment to quality, I create solutions that leave a lasting impact—taking pride in each line of code that brings ideas to life. Let’s build something amazing together!
        </p>
      </AboutContainer>

      <LocationContainer>
        <NameCon>
          <p>Name:</p>
          <h3>Olaide Adeyemo</h3>
        </NameCon>
        <EmailCon>
          <p>Email:</p>
          <h3>olaideadeyemok@gmail.com</h3>
        </EmailCon>
        <FromCon>
          <p>From:</p>
          <h3>Lagos, Nigeria</h3>
        </FromCon>
      </LocationContainer>

      <Skillscont>
        <Skillsdetails>
          <Detailskills>
            <h1>Skills</h1>
            <h2>USING NOW:</h2>
            <Skillsicon>
              <p><img src={html} alt="" />HTML5</p>
              <p><img src={css} alt="" />CSS3</p>
              <p><img src={javascript} alt="" />JavaScript</p>
              <p><img src={react} alt="" />React</p>
              <p><img src={github} alt="" />GitHub</p>
              <p><img src={gitcontrol} alt="" />Version Control</p>
              <p><img src={vscode} alt="" />VS Code</p>
              <p><img src={styledcomponents} alt="" />Styled Components</p>
              <p><img src={api} alt="" />Context API</p>
            </Skillsicon>

            <h2>LEARNING:</h2>
            <Skillsicon>
              <p><img src={expressjs} alt="" />Express.js</p>
              <p><img src={mongo} alt="" />MongoDB</p>
            </Skillsicon>
          </Detailskills>
        </Skillsdetails>
      </Skillscont>
    </AboutMe>
  );
};

export default About;

const AboutMe = styled.div`
  max-width: 1280px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ darkMode }) => (darkMode ? '#333' : '#FFF8F3')};
  color: ${({ darkMode }) => (darkMode ? '#FFF' : '#333')};
  padding: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  justify-content: space-around;
  margin-top: 50px;
  /* flex-wrap: wrap; */
  text-align: center;

  h1 {
    width: 100%;
    font-size: 1.8rem;
  }

  p {
    width: 100%;
    border-radius: 30px 0px;
    border: 2px solid white;
    padding: 15px;
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    h1 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

const LocationContainer = styled.div`
  background-color: #f1d4cf;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px;
  border-radius: 20px;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NameCon = styled.div`
  text-align: center;
  margin-bottom: 10px;

  h3 {
    margin-top: 10px;
  }
`;

const EmailCon = styled.div`
  text-align: center;
  color: tomato;
  margin-top: 10px;

  h3 {
    margin-top: 5px;
  }
`;

const FromCon = styled.div`
  text-align: center;
  margin-top: 15px;

  h3 {
    margin-top: 5px;
  }
`;

const Skillscont = styled.div`
  max-width: 1280px;
  width: 85%;
  margin: 30px auto;
  padding: 20px;
`;

const Skillsdetails = styled.div`
  text-align: center;

  h1 {
    font-size: 1.8rem;
    letter-spacing: 3px;
    margin-top: 20px;
  }

  h2 {
    background-color: #f1d4cf;
    width: 150px;
    padding: 10px;
    border-radius: 8px;
    color: #000;
    font-size: 1.2rem;
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

const Detailskills = styled.div`
  h2 {
    margin-top: 30px;
  }
`;

const Skillsicon = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  img {
    width: 60px;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 30px;

    img {
      width: 50px;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    gap: 20px;

    img {
      width: 45px;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
