function Footer() {
    return (
      <footer className="bg-black text-white p-4 mt-8">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Ernest Obimpeh | Crafted with ❤️
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  