import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gray-900 flex flex-col justify-center items-center text-center px-4 relative"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4 animate-bounce">
        Hi, I’m Branton
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6">
        I build data pipelines & machine learning solutions.
      </p>
      <svg className="absolute bottom-0 left-0 w-full h-24 text-cyan-800 opacity-20" viewBox="0 0 1440 320">
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,128L30,138.7C60,149,120,171,180,160C240,149,300,107,360,101.3C420,96,480,128,540,144C600,160,660,160,720,165.3C780,171,840,181,900,181.3C960,181,1020,171,1080,160C1140,149,1200,139,1260,149.3C1320,160,1380,192,1410,208L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
