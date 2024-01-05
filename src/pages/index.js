// src/pages/index.js
import React from "react"
import Building from "../components/building"
import ComponentName from "../components/graphqlquery"

export default function Home() {
  const buildings = ComponentName();

  return (
    <div id="container" style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center' 
    }}>
      {buildings.map(bien => (
        <Building bien={bien} key={bien.nombre} />
      ))}
    </div>
  )
}