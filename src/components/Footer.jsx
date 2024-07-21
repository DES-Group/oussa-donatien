import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between w-full md:w-3/4 mb-4">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Contactez-moi</h2>
            <p>Email: donatienoussaodb@gmail.com</p>
            <p>Téléphone: +229 62140234</p>
          </div>
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Suivez-moi</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/DES-Group" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-white hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/donatien-oussa-80269b268/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-white hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://wa.me/22962140234" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-6 h-6 text-white hover:text-gray-400 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p>&copy; 2024 Donatien OUSSA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
