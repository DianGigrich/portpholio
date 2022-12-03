import AboutMe from "./components/pages/AboutMe"
import Contact from "./components/pages/Contact"
import Nav from "./components/Nav"
import Portfolio from "./components/pages/Portfolio"
import Resume from "./components/pages/Resume"

import React, { useState } from 'react';




function pageRouter() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
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
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
  
  export default pageRouter