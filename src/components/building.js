// src/components/Building.js
import React from "react"
import Img from "gatsby-image"

// Este es el componente que representa a un edificio individual
const Building = ({ bien }) => {
  return (
    // Renderizamos un div con los detalles del edificio
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '200px', 
      border: '1px solid #ccc', 
      borderRadius: '10px', 
      margin: '10px', 
      padding: '10px', 
      boxShadow: '2px 2px 6px 0px rgba(0,0,0,0.3)' 
    }}>
      {/* Mostramos los detalles del edificio */}
      * Nombre del edificio <p>{bien.nombre}</p> 
      * Antecedentes del edificio <p>{bien.antecedentes}</p> 
      * Tipo de arquitectura y época del edificio <p>{`${bien.tipo.arquitectura} - ${bien.tipo.epoca}`}</p> 
      * Imagen del edificio <Img fluid={bien.img} alt={bien.nombre} style={{ width: '100%', height: 'auto' }} /> 
      * Localización del edificio <p>{`${bien.localizacion.lat}, ${bien.localizacion.long}`}</p> 
    </div>
  )
}

export default Building