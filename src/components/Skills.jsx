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
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">Skills</h2>
        <div className="space-y-6">
          {skills.map(skill => (
            <div key={skill.name}>
              <h3 className="text-lg">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-cyan-400 h-4 rounded-full" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;