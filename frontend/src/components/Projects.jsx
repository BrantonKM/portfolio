import React from 'react';

const projects = [
  {
    title: "Github-Profiile-Fetcher",
    description: "An interactive Power BI dashboard for vehicle sales analysis.",
    link: "https://github.com/BrantonKM/github-profile-fetcher"
  },
  {
    title: "Vehicle-Sales-Forecasting",
    description: "Python-based pipeline for tracking work-in-progress vehicle orders.",
    link: "https://github.com/BrantonKM/vehicle-sales-forecasting"
  },
  {
    title: "Data-Pipeline",
    description: "Python-based pipeline for tracking work-in-progress vehicle orders.",
    link: "https://github.com/BrantonKM/Data-Pipeline"
  },
  {
    title: "Quick-Dashboard",
    description: "Python-based pipeline for tracking work-in-progress vehicle orders.",
    link: "https://github.com/BrantonKM/Quick-Dashboard"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.title} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} target="_blank" className="text-cyan-400 underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;