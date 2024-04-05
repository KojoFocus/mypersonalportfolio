import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className=" text-custom-green text-2xl font-bold mb-4 md:mb-0">Ernest Obimpeh</div>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:justify-end">
            <li><Link to="/"><div className="hover:text-custom-green">Home</div></Link></li>
            <li><Link to="/about"><div className="hover:text-custom-green">About</div></Link></li>
            <li><Link to="/projects"><div className="hover:text-custom-green">Portfolio</div></Link></li>
            <li><Link to="/skills"><div className="hover:text-custom-green">Skills</div></Link></li>
            <li><Link to="/contact"><div className="hover:text-custom-green">Contact</div></Link></li>
            {/* optional */}
            <li><Link to="/blog"><div className="hover:text-custom-green">Blog</div></Link></li> 
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
