Proyecto realizado por Nicolás Ezequiel Rio y Leguizamon Gorosito Matias Nicolás
Este proyecto cuenta con:

* Páginas: Home, Shop, Detalle del producto, Cart, Login y Register
- Dentro de home se renderizan 4 productos destacados (seleccionados por rating)
- Shop cuenta con filtros de búsqueda por 'title' y 'price max'; y ordenamiento de mayor a menor precio.
- Tanto Shop, como Detalles del producto y Productos destacados cuentan con un botón para añadir al carrito. Dicho botón no se encuentra disponible si el usuario no inicia sesión.
- En Cart se muestran los productos añadidos; cuenta dos botones, uno que elimina del mismo todos los productos de un mismo tipo y otro que decrementa una unidad.
- En el Navbar se muestran links a las páginas y el estado dinámico del carrito (lleno o vacio)
- Al momento de registrarse el usuario, se utiliza 'firebase' para la autenticación, y se redirige a la ruta raiz (a demás, persiste la sesión iniciada).

Se utilizó:
- Componentes y eventos
- Enrutamiento (Link, Navlink, Outlet, useNavigation, useLocation)
- Regex y validación de datos (useForm, useRef, useParams)
- Archivo de contexto y variables de estado (createContext, useContext, useState, useEffect)
- Firebase y persistencia de datos en localeStorage
- Carrito y funciones lógicas
- Renders condicionales
- Fetching de datos y uso de una API store pública (Fakestore.api)
- Paquete de íconos 'React-icons'

Dependencias:
npm install react-router-dom
npm install react-icons --save
npm install firebase
npm install react-hook-form
