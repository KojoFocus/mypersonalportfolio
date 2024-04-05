import React from 'react';

const Skills = () => {
  const skills = [
    { title: 'Soft Skills', items: ['Communication', 'Teamwork', 'Problem-solving', 'Time Management'] },
    { title: 'Languages', items: ['JavaScript','HTML', 'CSS'] },
    { title: 'Frameworks and libraries', items: ['React', 'Material UI', 'Tailwind','Bootstrap'] },
    { title: 'Tools', items: ['Git', 'VS Code', 'Jira'] },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-color ">
      <h1 className="text-6xl text-custom-green text-center mt-4">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="border border-custom-green p-4 rounded-lg text-white m-4 p-4 rounded shadow-lg hover:bg-cyan-500 hover:text-black transition-colors duration-200">
            <h2 className="text-2xl mb-2 text-custom-green">{skill.title}</h2>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
