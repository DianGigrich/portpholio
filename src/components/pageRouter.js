import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Nav from "./Nav"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"

import React, { useState } from 'react';




function pageRouter() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
      if (currentPage === 'AboutMe') {
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