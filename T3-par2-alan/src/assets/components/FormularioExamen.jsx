import React from 'react';
import './FormularioExamen.css';
import logo from './logo.png'; 

function FormularioExamen() {
  return (
    <div className="contenedorPrincipal">
      <header className="encabezado">
        <img src={logo} alt="Logo de Mezcalería" className="logoEmpresa" />
        <h1 className="nombreEmpresa">Mezcalería</h1>
        <p className="subtituloFormulario">En esta empresa nos dedicamos a la venta de mezcal en linea, con una basta cantidad de productos, se testigo de nuestros increibles sabores y presentación, cotiza tu pedido con nosotros.</p>

      </header>
      <h2 className="tituloFormulario">Cotizar Producto</h2>
      <p className="subtituloFormulario">Obtén tu cotización personalizada en segundos.</p>
      
      <div className="seccionFormulario">
        <h3 className="tituloSeccion">Información de contacto</h3>
        <div className="grupoEntradas fila">
          <div className="campoGrupo">
            <label htmlFor="nombre" className="etiquetaCampo">Nombre</label>
            <input
              type="text"
              id="nombre"
              className="campoEntrada"
            />
          </div>
          <div className="campoGrupo">
            <label htmlFor="correo" className="etiquetaCampo">Correo</label>
            <input
              type="email"
              id="correo"
              className="campoEntrada"
            />
          </div>
        </div>
      </div>
      
      <div className="seccionFormulario">
        <h3 className="tituloSeccion">Información adicional</h3>
        <div className="grupoEntradas fila">
          <div className="campoGrupo">
            <label htmlFor="cantidad" className="etiquetaCampo">Cantidad de productos</label>
            <input
              type="number"
              id="cantidad"
              className="campoEntrada"
            />
          </div>
          <div className="campoGrupo">
            <label htmlFor="entrega" className="etiquetaCampo">Tipo de entrega</label>
            <select id="entrega" className="campoEntrada">
              <option>Seleccionar</option>
              <option>Entrega normal (fedex) de 12 a 18 dias hábiles</option>
              <option>Entrega rápida (UP) de 3 a 8 dias hábiles</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="contenedorTerminos">
        <input type="checkbox" id="aceptarTerminos" className="checkbox" />
        <label htmlFor="aceptarTerminos">Acepto los términos y condiciones</label>
      </div>
      
      <button className="botonEnviar">
        Enviar cotización
      </button>
    </div>
  );
}

export default FormularioExamen;






