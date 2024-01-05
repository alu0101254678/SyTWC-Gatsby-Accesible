// src/pages/index.js
import React from "react"
import Building from "../components/building"
import ComponentName from "../components/graphqlquery"

export default function Home() {
  // Obtenemos los datos de los edificios utilizando la función ComponentName
  const buildings = ComponentName();

  return (
    // Renderizamos un div que contiene todos los edificios
    <div id="container" style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center' 
    }}>
      {/* Mapeamos sobre los edificios y creamos un componente Building para cada uno */}
      {buildings.map(bien => (
        <Building bien={bien} key={bien.nombre} />
      ))}
    </div>
  )
}