import { motion } from 'framer-motion';
import PropTypes from 'prop-types'


const ProgressBar = ({ name, percentage, color, icon }) => {
  const radius = 100; // Rayon du cercle
  const strokeWidth = 20; // Épaisseur du trait du cercle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-40 h-40 m-6 flex items-center justify-center">
      {/* SVG avec cercle de fond */}
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 240 240">
        <circle
          className="text-gray-300"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="120"
          cy="120"
        />
        {/* Cercle de progression */}
        <motion.circle
          className="progress-circle"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="120"
          cy="120"
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // Initialisation à la circonférence pour l'animation
          stroke={color}
          transition={{ duration: 1.5, ease: "easeOut" }}
          animate={{ strokeDashoffset: offset }} // Animation de la bordure du cercle
        />
      </svg>
      {/* Conteneur pour l'icône et le texte */}
      <div className="absolute flex flex-col items-center justify-center">
        <motion.img
          src={icon}
          alt={name}
          className="w-10 h-10 mb-2" // Taille de l'icône ajustée
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <span className="text-xl font-semibold text-white">{percentage}%</span>
        <span className="text-xl text-gray-400">{name}</span>
      </div>
    </div>
  );
};


ProgressBar.propTypes = {
  name: PropTypes.string, 
  percentage: PropTypes.string, 
  color: PropTypes.string, 
  icon: PropTypes.string
}

export default ProgressBar;
