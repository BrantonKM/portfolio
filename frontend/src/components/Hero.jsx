import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 font-garamond">
        Branton Kieti
      </h1>
      <TypeAnimation
        sequence={[
          'Data Scientist', 2000,
          'ETL Pipeline Builder', 2000,
          'Machine Learning Enthusiast', 2000,
          'Dashboard Developer', 2000,
        ]}
        wrapper="span"
        speed={50}
        className="text-2xl md:text-3xl text-cyan-300"
        repeat={Infinity}
      />
      <p className="mt-6 text-lg max-w-xl text-gray-300">
        I build data-driven solutions for real-world problems using Python, SQL, and visualization tools like Power BI.
      </p>
    </section>
  );
};

export default Hero;
