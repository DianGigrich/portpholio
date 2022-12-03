import React from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import pageRouter from "./components/pageRouter"






function App() {
  return (
    <div>
      <Header />
      <pageRouter />
      <Footer />
    </div>
  );
}

export default App;
