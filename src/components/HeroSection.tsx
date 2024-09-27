import React from 'react';
import fondo from '../fotos/fondo.jpg';
import logo from '../fotos/alfecomplete.png';

const HeroSection: React.FC = () => {
  return (
    <section 
      style={{ backgroundImage: `url(${fondo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      className="bg-cover bg-center h-96 flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <img className="w-80 h-auto mb-16" src={logo} alt="Logo AlFeSoft" />
        <h2 className="text-4xl font-bold text-white mb-4">Crea Tu Sitio Web Con Nosotros</h2>
        <p className="mb-6 text-white">Ofrecemos servicios profesionales de desarrollo web a medida.</p>
        <a href="#contact" className="bg-white text-black px-6 py-3 rounded-lg font-semibold">Solicita una Cotización</a>
      </div>
    </section>
  );
};

export default HeroSection;
