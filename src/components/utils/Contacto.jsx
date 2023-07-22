import React from 'react';

export const Contacto = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Formulario de Contacto</h1>
      <form className="max-w-sm">
        <label htmlFor="nombre" className="block mb-2">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required className="w-full px-4 py-2 mb-4 border rounded" />
        
        <label htmlFor="apellido" className="block mb-2">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required className="w-full px-4 py-2 mb-4 border rounded" />
        
        <label htmlFor="email" className="block mb-2">Email:</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-2 mb-4 border rounded" />
        
        <label htmlFor="telefono" className="block mb-2">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required className="w-full px-4 py-2 mb-4 border rounded" />
        
        <label htmlFor="mensaje" className="block mb-2">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required className="w-full px-4 py-2 mb-4 border rounded"></textarea>
        
        <input type="submit" value="Enviar" className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600" />
      </form>
    </div>
  );
};
