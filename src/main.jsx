import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// npm add react-router-dom
// npm install react-hook-form
/*
  PASOS PARA HOSTEAR SERVIDOR DE DESARROLLO CON LIVESHARE

  1) Open liveshare
  2) Abrir puerto en 'ports' = puerto npm
  3) Cambiar a publico
  4) Compartir link
  5) Enjoy
*/
/*
  PASOS PARA CREAR COMPONENTES QUE USEN EL CONTEXTO

    1- Crear componente e importar contexto (el creado)
    2- Ir al contexto provider y crear las variables de estado/setter/handles que necesitemos y las 'exportamos'
    3- Ir a donde vamos a renderizar el componente y aplicar la logica condicional necesaria
*/
/*
  COSAS QUE FALTAN
  1) VALIDACION 
    -> watch                          OKKKKK
    -> setValue                       NO SABEMOS
    -> reset                          OKKKKK
    -> handleSubmit                   OKKKKK
  3) HOME                             OKKKKK
    -> Armar home
  4) Login y Register                 FALTA FIREBASE
    -> conectarlo con la base de datos (todo con tal de no hacer el css, igual lo vas a hacer antes del css)
  5) CARRITO                          OKKKKK
  6) EMPROLIJAR CODIGO                OKKKKKKK
    -> Idioma
    -> Comentarios
    -> Variables
    -> Funciones
  7) EMPAQUETAR TODO EN CARPETAS      OKKKKKKK
    -> seguir el arbol de rutas
  8) CSS      EMPEZAMOS A TRABAJAR

  - BUSQUEDA                          OKKKK
  - FILTRADO POR PRECIO               OKKKK
  - ORDENAMIENTO                      OKKKK
  - CARRITO                           OKKKK
  - Arreglar código de producto ESCENCIAL IMPORTANTISIMO 100% NECESARIO IT IS A MUST
    EXTRA: 
    Remover 1 unidad de un item (pendiente)
    
  - LOGIN & REGISTER WITH FIREBASE (clase que viene)
*/


