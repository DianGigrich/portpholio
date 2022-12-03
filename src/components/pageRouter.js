import AboutMe from "./components/pages/AboutMe"
import Contact from "./components/pages/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Portfolio from "./components/Portfolio"
import Resume from "./components/pages/Resume"

import React, { useState } from 'react';




export default function pageRouter() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }