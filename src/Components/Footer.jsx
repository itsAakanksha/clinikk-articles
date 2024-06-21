const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-center">CLINIKK</h3>
            <p className="text-sm">&copy; 2023 CLINIKK All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="text-sm hover:text-gray-400">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm hover:text-gray-400">Terms of Service</a>
            <a href="/contact-us" className="text-sm hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  