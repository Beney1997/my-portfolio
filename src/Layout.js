import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;