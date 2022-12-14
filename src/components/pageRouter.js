import AboutMe from "./pages/AboutMe"
import Nav from "./Nav"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"

import React, { useState } from 'react';




function PageRouter() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
  
  export default PageRouter