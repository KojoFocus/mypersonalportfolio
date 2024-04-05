import React from "react";
import CV from '../assets/CV.pdf';

function Card({ title, content }) {
  return (
    <div className="border border-custom-green p-4 rounded-lg text-white m-4 p-4 rounded shadow-lg w-64  transition-colors duration-200">
      <h2 className="text-2xl mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-custom-gray text-white p-10">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-6xl text-custom-green  mt-4 mb-4">About Me</h1>

        <p
          className="text-lg mb-4 text-white"
          style={{ paddingLeft: "25%", paddingRight: "25%" }}
        >
          Hi there! I’m Ernest. I love coding, poetry, and music. I see beauty
          in numbers and enjoy teaching web development. If you need a coder,
          teacher, or eco-friend, you’re in the right place. Let’s create
          something amazing together!
        </p>

        <div className="flex flex-wrap justify-center mb-4">
          <Card
            title={<span className="text-custom-green">Skills</span>}
            content="React Developer, github"
          />

          <Card
            title={<span className="text-custom-green">Projects</span>}
            content={
              ((<a href="link1">Project 1</a>),
              (<a href="link2">Project 2</a>),
              (<a href="link3">Project 3</a>),
              (<a href="link4">Project 4</a>))
            }
          />
          <Card
            title={<span className="text-custom-green">Services</span>}
            content="Web Development, UI/UX Design, App Development, Consulting"
          />
          {/* <h1 className="text-4xl md:text-6xl text-custom-green text-center mt-4">Contact</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 border border-custom-green p-4 rounded-lg">
            {/* Contact Section */}
            <div className="bg-green p-4 rounded-lg">
              <h3 className="text-custom-green text-xl mb-2">CONTACT NOW</h3>
              <p>+233540484052</p>
              <p>ernestobimpeh9@gmail.com</p>
            </div>

            {/* Address Section */}
            <div className="bg-green p-4 rounded-lg">
              <h3 className="text-custom-green text-xl mb-2">ADDRESS</h3>
              <p>GE-041-6167 Abokobi-Boi</p>
              <p>Accra, Ghana</p>
            </div>

            {/* Social Media Section */}
            <div className="bg-green p-4 rounded-lg">
              <h3 className="text-custom-green  text-xl mb-2">SOCIAL MEDIA</h3>
              <p>LinkedIn: .....com/username</p>
              <p>Twitter: twitter.com/username</p>
              {/* Add other social media links */}
            </div>
            <div className="mt-4">
              <a
                href="tel:+233540484052"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-custom-green p-4 rounded-lg text-custom-green  px-4 py-2 rounded hover:bg-custom-green hover:text-black transition-colors duration-200"
              >
                Contact via Call
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://wa.me/233540484052"
                target="_blank"
                rel="noopener noreferrer"
                className=" border border-custom-green p-4 rounded-lg text-custom-green   px-4 py-2 rounded hover:bg-custom-green hover:text-black transition-colors duration-200"
              >
                Contact via WhatsApp
              </a>
            </div>
            <div className="mt-4">
              <a
                href="mailto:ernestobimpeh9@gmail.com"
                className="border border-custom-green p-4 rounded-lg text-custom-green  px-4 py-2 rounded hover:bg-custom-green hover:text-black transition-colors duration-200"
              >
                Contact via Email
              </a>
            </div>
          </div>
        </div>
        <a href={CV} download>
      <button className="border border-custom-green p-4 rounded-lg text-custom-green m-4 p-4 rounded shadow-lg w-64 hover:bg-custom-green hover:text-black transition-colors duration-200">
        Download Resume
      </button>
      </a>
      </div>

      
    </div>
  );
}

export default Summary;
