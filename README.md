🛠️ Programación III - TP Obligatorio
🧾 Proyecto: Autoservicio
✅ Condiciones de aprobación
El Trabajo Integrador está dividido en dos proyectos: un proyecto frontend y un proyecto backend.
La fecha de entrega del TP es la última semana de cursada.

La promoción del trabajo depende de:

Cumplir con las consignas individuales de cada proyecto.

Lograr una comunicación correcta entre frontend y backend.

Si los alumnos no promocionan pero obtienen una nota suficiente para aprobar, podrán entregar el trabajo como examen final, incluyendo las consignas de cursada + final.
Si no obtienen la nota suficiente al final del cuatrimestre, recursarán la materia.

⚠️ Ambos proyectos deben ser realizados por ambos integrantes del grupo.
Se revisarán los commits para validar la participación. La falta de compromiso individual afecta la nota de forma personal y puede generar diferentes estados finales entre los integrantes del mismo grupo.

📋 Requerimientos Iniciales
1. Requerimientos funcionales
Una empresa contrató el desarrollo de un sistema de autoservicio (no e-commerce).

📦 Estructura del sistema
Frontend (cliente):
Aplicación donde los usuarios pueden comprar dos tipos de productos del mismo rubro. Al finalizar la compra, el sistema genera un ticket.

Backend (servidor):

Parte API RESTful que gestiona datos desde una base de datos.

Parte de vistas HTML (EJS) como back office para administradores (ABM y más acciones).

Ambos módulos backend deben estar alojados en el mismo servidor.

📱 La app debe ser responsive (usable desde PC y móviles).

❌ No se permiten productos de comida.
✔️ Los productos pueden ser físicos o virtuales, pero deben pertenecer al mismo rubro o estar lógicamente relacionados.

🔁 Las vistas deben permitir navegación mediante botones. No se permite el ingreso de rutas manualmente.

🎨 Tanto el cliente como el back office deben contar con un diseño con criterio. Si el estilo es pobre, se solicitarán mejoras.

2. Pantallas de la aplicación
🧑 Cliente
Pantalla de bienvenida: Ingreso del nombre.

Pantalla de productos: Dos categorías, info e imágenes de productos, agregar/quitar del carrito.

Pantalla de carrito: Listado de productos, modificar cantidades.

Pantalla de ticket: Ticket con resumen de la compra, nombre, fecha y empresa.

🛠️ Administrador
Pantalla login: Usuario y contraseña.

Dashboard: Listado de productos y acciones.

Alta de producto: Formulario con imagen.

Modificar producto: Reutilizable con el formulario de alta.

Cada pantalla mencionada debe tener su propia ruta, no modales.

Todas las vistas deben incluir:

Logo

Nombre de la app

Nombre de los alumnos

Barra de navegación dinámica

3. Flujos de la aplicación
🧾 Flujo cliente
Ingreso al sitio → Pantalla de bienvenida

Ingreso de nombre → Continuar

Visualización de productos por categoría

Agregado y eliminación de productos al carrito

Visualización y modificación del carrito

Confirmación de compra → Mostrar ticket

Reinicio del sistema

🛠️ Flujo administrador
Ingreso → Login

Ingreso con usuario y contraseña

Redirección a dashboard

Alta de producto (formulario + imagen)

Baja lógica (producto inactivo)

Edición de producto (incluye cambio de imagen)

Activación de productos inactivos

4. Requerimientos Frontend (cliente)
Ingreso de nombre obligatorio antes de comprar

Nombre/imágen de empresa + favicon

Productos cargados al inicio (desde API o JSON hardcodeado si no hay backend)

Productos activos únicamente

Responsive y paginado

Persistencia de ventas en DB (nombre, fecha, precio total)

Eliminación y modificación de cantidades del carrito

Confirmación de compra con modal

Visualización y descarga del ticket en PDF

Reinicio del sistema tras la compra

Cambio de tema (modo claro / oscuro) con persistencia

Botón para ingresar al login del administrador

5. Requerimientos Backend
🖥️ Vistas HTML (EJS)
Login conectado a base de datos

Botón de acceso rápido con autocompletado (correo y contraseña)

Dashboard con productos y acciones:

Alta

Baja (activo = false)

Modificación

Reactivación (activo = true)

🌐 API JSON
Estructura RESTful y lógica (MVC)

ORM con tablas de productos, usuarios, ventas, etc.

Relación muchos a muchos entre productos y ventas

Encriptación de contraseñas (no texto plano)

Alta, baja, modificación y listado de productos

Paginación de productos

Validaciones mediante middlewares

Subida de imágenes al servidor

Endpoint para creación de usuario administrador

Listado de ventas con productos asociados
