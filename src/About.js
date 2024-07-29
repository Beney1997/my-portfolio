import React from 'react';

function About() {
  return (
    <section id="about">
      <div style={{ display: 'flex' }}>
        <img src={require('../src/images/gift.jpg')} alt="Gift" 
        style={{ width: '100px', height: '100px', marginRight: '20px' }} />
        <div>
          <h4>I am from Edo state.I am dark in completion and I am very compassionate about what I do.</h4>
          <p>
            <h1>I'm a software developer with a passion for building amazing things.</h1>
            </p>
        </div>
      </div>
    </section>
  );
}

export default About;