import React from 'react';
import './Contacto.css'

const Contacto = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <p>
        Puedes ponerte en contacto con nosotros a través de los siguientes
        medios:
      </p>
      <div>
        <h2>Detalles de Contacto</h2>
        <p>
          <strong>Dirección:</strong> 123 Calle Principal, Ciudad, País
        </p>
        <p>
          <strong>Teléfono:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Correo Electrónico:</strong> info@tudominio.com
        </p>
      </div>
      <div>
        <h2>Formulario de Contacto</h2>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;