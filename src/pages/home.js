import React from "react";
import pp from "../assets/pp.png"; // adjust the path if needed
import background from "../assets/background.png";
import Navbar from "../components/navbar";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Skills from "./skills";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src={background}
          className="absolute w-full h-full object-cover"
          style={{ opacity: 0.5, zIndex: -1 }}
        />

        <Link to="/summary">
          <img
            src={pp}
            alt="Profile"
            className="relative rounded-full w-64 md:w-96 h-64 md:h-96 mx-auto my-4"
            style={{ objectFit: "contain", zIndex: 1 }}
          />
        </Link>

        <div style={{ zIndex: 1 }}>
          <h1 className="text-4xl text-white md:text-6xl text-center mt-4">Hello,</h1>
          <br></br>
          <p
            className="text-lg text-white mb-4 px-4 md:px-0"
          >
            I am Ernest, a web developer. Don't worry; click on my forehead to
            quickly get to know me. 🌟
          </p>
        </div>
      </div>
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
