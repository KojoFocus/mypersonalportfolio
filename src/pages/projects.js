import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project 1', imageUrl: 'url-to-image-1', siteUrl: 'url-to-site-1' },
    { title: 'Project 2', imageUrl: 'url-to-image-2', siteUrl: 'url-to-site-2' },
    { title: 'Project 3', imageUrl: 'url-to-image-3', siteUrl: 'url-to-site-3' },
    { title: 'Project 4', imageUrl: 'url-to-image-4', siteUrl: 'url-to-site-4' },
  ];

  return (
    <div className="bg-custom-gray text-custom-green p-10">
      <h1 className="text-6xl text-center mt-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {projects.map((project, index) => (
          <a key={index} href={project.siteUrl} target="_blank" rel="noopener noreferrer">
            <div className="bg-white bg-opacity-25 backdrop-blur-md text-white m-4 p-4 rounded shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover mb-4 rounded" />
              <h2 className="text-2xl mb-2">{project.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
