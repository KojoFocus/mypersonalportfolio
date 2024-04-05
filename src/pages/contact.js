import React from "react";

function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-custom-color text-black">
        <h1 className="text-4xl md:text-6xl text-custom-green text-center mt-4">Contact</h1>
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
    </div>
  );
}

export default Contact;
