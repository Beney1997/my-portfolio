import React from 'react';

function Home() {
  return (
    <section id="home">
      <img src={require('../src/images/gift.jpg')} alt="Gift" 
      style={{ width: '200px', height: '300px' }} />
      <h1>EGHAREVBA IGHOSOGIE GIFT</h1>
    </section>
  );
}

export default Home;