# ProyectaFlow - Herramienta de Gestión de Proyectos

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-orange)
![MySQL](https://img.shields.io/badge/MySQL-8.x-blue)

## Descripción del Proyecto

ProyectaFlow es una API RESTful para la gestión de proyectos, desarrollada como parte del trabajo grupal para la materia Desarrollo de Software. Esta herramienta permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre proyectos, tareas, equipos, usuarios y otros elementos relacionados con la gestión de proyectos.

## Equipo de Desarrollo

- Thomas Luque
- Carlos Rodriguez
- Gabriel Pretel
- Alaniz Alejandra
- Alvaro Ojeda

## DER

### Para ver el mismo haga click en el enlace 🖱️:

https://drive.google.com/file/d/1kpDBpHutTJYd0UTI8BAHRWo--pzEFgqc/view

## Características Principales

- Gestión completa de proyectos
- Administración de tareas y subtareas
- Control de hitos y tiempos (time logs)
- Sistema de comentarios
- Etiquetado de tareas (tags)
- Asignación de usuarios a equipos

## Tecnologías Utilizadas

- **Backend**: Node.js, Express
- **ORM**: Sequelize
- **Base de datos**: MySQL
- **Middleware**: CORS, Morgan (para logging)
- **Gestión de variables de entorno**: dotenv

## Estructura del Proyecto

```
proyecta_flow_crud/
├── src/
│   ├── config/
│   │   └── db/
│   │       └── connection.js
│   ├── controllers/
│   │   ├── comentarioControllers.js
│   │   ├── equipoControllers.js
│   │   ├── equipoXusuarioControllers.js
│   │   ├── hitoControllers.js
│   │   ├── proyectoControllers.js
│   │   ├── subtareaControllers.js
│   │   ├── tagControllers.js
│   │   ├── tareaXtagControllers.js
│   │   ├── taskControllers.js
│   │   ├── timeLogControllers.js
│   │   └── usuarioControllers.js
│   ├── models/
│   │   ├── Comentario.js
│   │   ├── Equipo.js
│   │   ├── EquipoXUsuario.js
│   │   ├── Hito.js
│   │   ├── index.js
│   │   ├── Proyecto.js
│   │   ├── SubTareas.js
│   │   ├── Tag.js
│   │   ├── Tarea.js
│   │   ├── TareaXTag.js
│   │   ├── TimeLog.js
│   │   └── Usuario.js
│   └── routes/
│       ├── comentarioRoutes.js
│       ├── equipoRoutes.js
│       ├── equipoXusuarioRoutes.js
│       ├── hitoRoutes.js
│       ├── proyectoRoutes.js
│       ├── subtareaRuotes.js
│       ├── tagRoutes.js
│       ├── tareaXtagRoutes.js
│       ├── taskRoutes.js
│       ├── timeLogRoutes.js
│       └── usuarioRoutes.js
├── index.js
└── package.json
```

## Instalación y Configuración

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/RodrDevs80/ProyectaFlow_G6.git
   cd proyecta_flow_crud
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```
   DB_NAME=nombre_de_la_base_de_datos
   DB_USER=usuario_mysql
   DB_PASSWORD=contraseña_mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_DIALECT=mysql
   ```

4. Iniciar el servidor:
   ```bash
   npm start
   ```
   o para desarrollo con recarga automática:
   ```bash
   npm run dev
   ```

## Endpoints Disponibles

### Proyectos

- `GET /proyectos` - Obtener todos los proyectos
- `GET /proyecto-by-id/:id` - Obtener un proyecto por ID
- `POST /proyectos` - Crear un nuevo proyecto
- `PUT /proyectos/:id` - Actualizar un proyecto
- `DELETE /proyectos/:id` - Eliminar un proyecto

### Equipos

- `GET /equipos` - Obtener todos los equipos
- `GET /equipo-by-id/:id` - Obtener un equipo por ID
- `POST /equipos` - Crear un nuevo equipo
- `PUT /equipos/:id` - Actualizar un equipo
- `DELETE /equipos/:id` - Eliminar un equipo

### Usuarios

- `GET /usuarios` - Obtener todos los usuarios
- `GET /usuarios/:id` - Obtener un usuario por ID
- `POST /usuarios` - Crear un nuevo usuario
- `PUT /usuarios/:id` - Actualizar un usuario
- `DELETE /usuarios/:id` - Eliminar un usuario

### Tareas

- `GET /tarea` - Obtener todas las tareas
- `GET /tarea/:id` - Obtener una tarea por ID
- `POST /tarea` - Crear una nueva tarea
- `PUT /tarea/:id` - Actualizar una tarea
- `DELETE /tarea/:id` - Eliminar una tarea

### Subtareas

- `GET /subtareas` - Obtener todas las subtareas
- `GET /subtarea:id` - Obtener una subtarea por ID
- `POST /subtarea` - Crear una nueva subtarea
- `PUT /subtarea:id` - Actualizar una subtarea
- `DELETE /subtara:id` - Eliminar una subtarea

### Hitos

- `GET /hitos` - Obtener todos los hitos
- `GET /hitos/:id` - Obtener un hito por ID
- `POST /hitos` - Crear un nuevo hito
- `PUT /hitos/:id` - Actualizar un hito
- `DELETE /hitos/:id` - Eliminar un hito

### Time Logs

- `GET /timeLog` - Obtener todos los time logs
- `GET /timeLog/:id` - Obtener un time log por ID
- `POST /timeLog` - Crear un nuevo time log
- `PUT /timeLog/:id` - Actualizar un time log
- `DELETE /timeLog/:id` - Eliminar un time log

### Comentarios

- `GET /comentarios` - Obtener todos los comentarios
- `GET /comentario:id` - Obtener un comentario por ID
- `POST /comentario` - Crear un nuevo comentario
- `PUT /comentario:id` - Actualizar un comentario
- `DELETE /comentario:id` - Eliminar un comentario

### Tags

- `GET /tags` - Obtener todos los tags
- `GET /tags/:id` - Obtener un tag por ID
- `POST /tags` - Crear un nuevo tag
- `PUT /tags/:id` - Actualizar un tag
- `DELETE /tags/:id` - Eliminar un tag

### Relaciones Equipo-Usuario

- `GET /equiposXusuarios` - Obtener todas las relaciones equipo-usuario
- `GET /equiposXusuarios/:id` - Obtener una relación por ID
- `POST /equiposXusuarios` - Crear una nueva relación
- `PUT /equiposXusuarios/:id` - Actualizar una relación
- `DELETE /equiposXusuarios/:id` - Eliminar una relación

### Relaciones Tarea-Tag

- `GET /tareasxtags` - Obtener todas las relaciones tarea-tag
- `GET /tareasxtags/:id` - Obtener una relación por ID
- `POST /tareasxtags` - Crear una nueva relación
- `PUT /tareasxtags/:id` - Actualizar una relación
- `DELETE /tareasxtags/:id` - Eliminar una relación

## Modelos de Datos

El sistema utiliza los siguientes modelos principales con sus respectivas relaciones:

- **Proyecto**: Contiene información sobre los proyectos
- **Equipo**: Grupos de trabajo asociados a proyectos
- **Usuario**: Usuarios del sistema
- **Tarea**: Tareas dentro de los proyectos
- **SubTarea**: Subtareas asociadas a tareas principales
- **Hito**: Puntos clave en el desarrollo del proyecto
- **Tag**: Etiquetas para clasificar tareas
- **Comentario**: Comentarios sobre tareas
- **TimeLog**: Registros de tiempo dedicado a tareas
- **EquipoXUsuario**: Relación muchos-a-muchos entre equipos y usuarios
- **TareaXTag**: Relación muchos-a-muchos entre tareas y tags

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.
