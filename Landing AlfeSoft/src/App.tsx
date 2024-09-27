import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Servicios';
import ContactForm from './components/Contacto';
import WhatsAppBoton from './fotos/whatsapp.png';
import Carrusel from './components/carrusel';
import './App.css';  // O el archivo CSS donde incluyas los estilos


import 'swiper/swiper-bundle.min.css';



const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <Carrusel />
      <ContactForm />
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 AlFeSoft. Todos los derechos reservados.</p>
        <div className="redes">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
        </div>
      </footer>

      <a
        href="https://wa.me/+526682101610"
        className="fixed bottom-4 right-4 z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar mensaje por WhatsApp"
      >
        <img
          className="w-14 h-14 md:w-14 md:h-14 rounded-full shadow-lg hover:opacity-75 transition-opacity"
          src={WhatsAppBoton}
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default App;
