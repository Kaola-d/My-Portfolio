import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyles darkMode={darkMode} />
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const MainContainer = styled.main`
  padding: 0 2rem;
  max-width: 1200px;
  margin: auto;
`;
