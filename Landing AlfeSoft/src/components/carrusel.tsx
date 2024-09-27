import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

import mision from '../fotos/mision.png';
import vision from '../fotos/vision.png';

const Carrusel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-96 flex justify-center items-center bg-gray-800">
      <Slider {...settings} className="w-1/2 bg-gray-800">
        <div>
          <img src={mision} alt="Misión" className="w-full h-80 object-contain mx-auto bg-gray-800" />
        </div>
        <div className='bg-gray-800'>
          <img src={vision} alt="Visión" className="w-full h-80 object-contain mx-auto bg-gray-800" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;
