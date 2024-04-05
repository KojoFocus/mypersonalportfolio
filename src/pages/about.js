import React from "react";
import aboutimage from "../assets/aboutimage.jpg"; // adjust the path if needed

const About = () => {
  return (
    <>
      <div className="bg-custom-gray text-white p-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img
            src={aboutimage}
            alt="Profile"
            className="w-full md:w-90 h-80 md:h-80 mr-0 md:mr-10 rounded-lg"
          />
          <div>
            <h1 className="text-4xl md:text-6xl text-custom-green mt-4">About Me</h1>
            <p className="text-lg">
              Hi there! I’m Ernest. I love coding, poetry, and music. I see beauty in numbers and enjoy teaching web development. If you need a coder, teacher, or eco-friend, you’re in the right place. Let’s create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
