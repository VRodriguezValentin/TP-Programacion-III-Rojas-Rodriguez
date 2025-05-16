# 🛠️ Programación III - TP Obligatorio  
## 🧾 Proyecto: Autoservicio

---

## ✅ Condiciones de aprobación

El Trabajo Integrador está dividido en **dos proyectos**: un proyecto **frontend** y un proyecto **backend**.  
📅 **Fecha de entrega:** última semana de cursada.

La **promoción** del trabajo depende de:

- Cumplir con las consignas individuales de cada proyecto.
- Lograr una **comunicación correcta entre frontend y backend**.

Si los alumnos **no promocionan** pero tienen nota suficiente, podrán entregar el trabajo como **final**, incluyendo todas las consignas de cursada y final.  
En caso de no aprobar, deberán **recursar** la materia.

> ⚠️ **Ambos proyectos deben ser realizados por ambos integrantes del grupo.**  
> Se revisarán los commits para validar la participación. La falta de compromiso individual afectará la nota de forma personal.

---

## 📋 Requerimientos Iniciales

### 1. Requerimientos funcionales

Una empresa contrató el desarrollo de un sistema de **autoservicio** (no e-commerce).

#### 📦 Estructura del sistema

- **Frontend (cliente):**  
  Aplicación donde los usuarios pueden comprar **dos tipos de productos del mismo rubro**. Al finalizar la compra, se genera un **ticket**.

- **Backend (servidor):**
  - API RESTful que gestiona datos desde una base de datos.
  - Vistas HTML (EJS) como **back office** para administradores (ABM y más).

> Ambas partes del backend deben estar en el **mismo servidor**.  
> La app debe ser **responsive** (PC + móviles).  
> ❌ **No se permiten productos de comida.**

#### Navegación y Estilo

- Navegación mediante botones (no rutas escritas manualmente).
- Estilo con criterio: si es pobre, se pedirá mejorarlo.

---

### 2. Pantallas de la aplicación

#### 🧑 Cliente

- **Bienvenida:** Ingreso del nombre.
- **Productos:** Categorías, info, imagen, agregar/quitar del carrito.
- **Carrito:** Listado, modificar cantidades.
- **Ticket:** Resumen de compra, nombre, fecha y empresa.

#### 🛠️ Administrador

- **Login:** Usuario y contraseña.
- **Dashboard:** Listado con acciones.
- **Alta de producto:** Formulario con imagen.
- **Modificar producto:** Reutiliza el formulario de alta.

> Cada pantalla debe tener su propia **ruta** (no modales).  
> Todas deben incluir:
> - Logo  
> - Nombre de la app  
> - Nombre de los alumnos  
> - Barra de navegación

---

### 3. Flujos principales

#### 🧾 Cliente

1. Entra al sitio → Bienvenida
2. Ingresa nombre → Continuar
3. Ve productos por categoría
4. Agrega o quita del carrito
5. Modifica cantidades
6. Finaliza compra → Ve ticket
7. Reinicia sistema

#### 🛠️ Administrador

1. Ingreso → Login
2. Usuario + contraseña → Dashboard
3. Agrega producto → Formulario
4. Elimina (baja lógica)
5. Edita datos e imagen
6. Reactiva productos

---

### 4. Requerimientos Frontend

- Pregunta el nombre al comenzar
- Nombre / logo de empresa + favicon
- Muestra productos activos (API o JSON)
- Estilo responsive y paginado
- Guarda ventas (nombre, fecha, total)
- Muestra ticket (descargable en PDF)
- Permite eliminar y modificar productos en el carrito
- Modal de confirmación al comprar
- Reinicio automático tras la compra
- Cambio de tema (claro / oscuro) con persistencia
- Botón para login administrador

---

### 5. Requerimientos Backend

#### 🖥️ Vistas HTML (EJS)

- Login con datos desde DB
- Botón de acceso rápido (autocompleta campos)
- Dashboard con:
  - Alta de producto (activo por defecto)
  - Baja lógica (activo = false)
  - Reactivación
  - Edición de datos + imagen

#### 🌐 API JSON

- API RESTful con estructura MVC
- ORM con relaciones (productos, usuarios, ventas, etc.)
- Relación muchos a muchos (productos ↔ ventas)
- Contraseñas **encriptadas**
- Endpoints para:
  - Alta / baja / modificación / listado
  - Creación de usuario administrador
  - Subida de imágenes
  - Paginación de productos
  - Listado de ventas con productos
- Validación de datos con middlewares

---
