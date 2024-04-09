import React from 'react';
import Foodcart from '../assets/food cart.jpg'
import Movie from '../assets/movie.jpg'

const Projects = () => {
  const projects = [
    { title: 'FOODCART', imageUrl: Foodcart, siteUrl:'https://opal-foodcart.vercel.app/'  },
    { title: 'OPAL MOVIE', imageUrl: Movie, siteUrl: 'url-to-site-2' },
  ];

  return (
    <div className="bg-custom-gray text-custom-green p-10">
      <h1 className="text-6xl text-center mt-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 justify-center pl-20">
        {projects.map((project, index) => (
          <a key={index} href={project.siteUrl} target="_blank" rel="noopener noreferrer">
            <div className="bg-white bg-opacity-25 backdrop-blur-md text-white m-4 p-4 rounded shadow-lg justify-center">
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
