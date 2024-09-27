import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-900 py-16 w-full">
      <div className="w-full text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <form action="#" method="POST" className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">Nombre</label>
            <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">Correo Electrónico</label>
            <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">Mensaje</label>
            <textarea id="message" name="message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
