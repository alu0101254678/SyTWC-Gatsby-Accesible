module.exports = {
    parser: "babel-eslint",
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended"
    ],
    plugins: ["react", "jsx-a11y"],
    env: {
      browser: true,
      es6: true,
      node: true
    },
    rules: {
      "react/prop-types": 0, // Desactiva la regla 'prop-types' (puedes activarla si la necesitas)
      "react/jsx-uses-react": "error", // Marca las variables usadas en JSX como usadas
      "react/jsx-uses-vars": "error", // Marca las variables definidas en JSX pero no usadas como errores
      "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }], // Asegura que los enlaces son válidos y útiles para los lectores de pantalla
      "jsx-a11y/no-static-element-interactions": ["warn"], // Asegura que los elementos no interactivos no tienen eventos de interacción
      "jsx-a11y/click-events-have-key-events": ["warn"], // Asegura que los elementos interactivos tienen un evento 'key' para accesibilidad
    },
    settings: {
      react: {
        version: "detect" // Detecta automáticamente la versión de React
      }
    },
    overrides: [
        {
          files: ["**/*.js", "**/*.jsx"],
          // ...
        },
      ],
    ignorePatterns: ["node_modules/", ".cache/", "public/"],
  };