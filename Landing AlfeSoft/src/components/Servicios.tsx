import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 w-full bg-gray-900">
      <div className="w-full text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow shadow-gray-400 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Diseño y Desarrollo WEB</h3>
            <p className='text-sm font-semibold mb-4 text-black'>Creamos sitios web modernos, funcionales y visualmente atractivos que capturan la esencia de tu marca.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow shadow-gray-400 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Sistemas WEB a la medida</h3>
            <p className='text-sm font-semibold mb-4 text-black'>Desarrollamos soluciones web personalizadas para satisfacer las necesidades específicas de tu negocio.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow shadow-gray-400 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Mantenimiento y actualización a aplicaciones WEB</h3>
            <p className='text-sm font-semibold mb-4 text-black'>Asegura el rendimiento óptimo y la seguridad de tu aplicación web con nuestros servicios de mantenimiento y actualización.</p>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default Services;
