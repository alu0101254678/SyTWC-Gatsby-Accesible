// src/components/graphqlquery.js
import { graphql, useStaticQuery } from "gatsby"

export default function ComponentName() {
  // Realizamos una consulta GraphQL para obtener los datos de los edificios y las imágenes
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
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

  // Asigna cada imagen a su edificio correspondiente
  const buildings = data.dataJson.bienes.map(bien => {
    const image = data.allFile.edges.find(edge => edge.node.name === bien.img)
    return { ...bien, img: image.node.childImageSharp.fluid }
  })

  // Devuelve los edificios con sus imágenes
  return buildings
}