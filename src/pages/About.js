import React from 'react';

const About = () => {
  return (
    <section className='section about-section'>
      <h2 className='section-title'>about us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias id iure
        dolor aut est tempora porro adipisci dolorem, quae, sequi excepturi
        fugit reprehenderit ullam beatae quos dolore odio. Tenetur laborum quod
        illo modi voluptatibus incidunt expedita ipsum consequuntur dolorem
        exercitationem?
      </p>
      <hr />
      <a
        href='https://www.thecocktaildb.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src='https://www.thecocktaildb.com/images/logo.png'
          alt='thecocktaildb.com logo'
          className='thecocktaildb-logo'
        />
      </a>
    </section>
  );
};

export default About;
