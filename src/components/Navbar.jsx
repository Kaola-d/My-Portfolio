import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; // Import NavLink directly
import { FaBars, FaTimes, FaMoon } from 'react-icons/fa';

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav darkMode={darkMode}>
      <h1>Olaide</h1>

      <Menu isOpen={isOpen} darkMode={darkMode}>
  <StyledNavLink exact to="/" onClick={toggleMenu} darkMode={darkMode}>Home</StyledNavLink>
  <StyledNavLink to="/about" onClick={toggleMenu} darkMode={darkMode}>About</StyledNavLink>
  <StyledNavLink to="/projects" onClick={toggleMenu} darkMode={darkMode}>Projects</StyledNavLink>
  <StyledNavLink to="/contact" onClick={toggleMenu} darkMode={darkMode}>Contact</StyledNavLink>
</Menu>


      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <Toggle onClick={toggleTheme}>
        <FaMoon /> {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Toggle>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${({ darkMode }) => (darkMode ? '#333' : '#FFF8F3')};
  color: ${({ darkMode }) => (darkMode ? '#FFF' : '#333')};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1280px;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    margin-left: 50px;
    color: ${({ darkMode }) => (darkMode ? '#FFF' : '#333')};
  }

  h1::first-letter {
    color: tomato;
    font-size: 30px;
  }

  @media (max-width: 800px) {
    width: 100%;
    h1 {
      margin-left: 0px;
    }
  }
`;

const Toggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 40px;
  margin-left: auto;

  a {
    font-size: 18px;
    color: ${({ darkMode }) => (darkMode ? '#FFF' : '#333')}; /* Set color based on darkMode */
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100% - 60px);
    background: ${({ darkMode }) => (darkMode ? '#333' : '#FFF8F3')};
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease;
    padding-top: 20px;
    z-index: 10;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  color: ${({ darkMode }) => (darkMode ? '#FFF' : '#333')}; /* Text color toggle */
  text-decoration: none;
  
  &.active {
    color: tomato;
    font-weight: bold;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
    margin-left: 10px;
  }
`;
