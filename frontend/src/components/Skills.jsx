import React from 'react';

const skills = [
  { name: "Python", level: "90%" },
  { name: "CSS", level: "80%" },
  { name: "Java Script", level: "70%" },
  { name: "SQL", level: "85%" },
  { name: "Power BI", level: "80%" },
  { name: "Flask/API Dev", level: "75%" },
  { name: "Excel Automation", level: "70%" },
];


const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 py-20 px-4 text-white">
      <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center font-garamond">My Data Pipeline</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-cyan-600 flex items-center justify-center text-white font-semibold shadow-lg">
              {skill.name}
            </div>
            <p className="mt-2 text-sm text-cyan-200">{skill.level}</p>
            {index !== skills.length - 1 && (
              <div className="h-10 w-1 bg-cyan-400 md:h-1 md:w-10 md:ml-24 md:mr-24 md:mt-6"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;