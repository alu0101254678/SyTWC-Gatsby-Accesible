// src/components/graphqlquery.js
import { graphql, useStaticQuery } from "gatsby"

export default function ComponentName() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      dataJson {
        bienes {
          antecedentes
          img
          localizacion {
            lat
            long
          }
          nombre
          tipo {
            arquitectura
            epoca
          }
        }
      }
    }`);

  // Devuelve los datos
  return data.dataJson.bienes;
}