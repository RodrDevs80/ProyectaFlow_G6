import Proyecto from "../models/Proyecto.js";

const getAllProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.findAll();
        if (proyectos.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay proyectos en la base de datos!!!' })
        } else {
            res.status(200).json(proyectos);
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el listado de proyectos", message: err.message });
    }
}


const getProyectosById = async (req, res) => {
    try {
        const id = req.params.id;
        const proyectoById = await Proyecto.findByPk(id);
        if (proyectoById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el proyecto buscado' });
        } else {
            res.status(200).json({ status: 200, proyecto: proyectoById })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener proyecto por id", message: err.message });
    }
}



const createProyecto = async (req, res) => {
    try {
        const { nombre, descripcion, fechaInicio, fechaFin } = req.body;
        const newProyecto = await Proyecto.create({ nombre, descripcion, fechaInicio, fechaFin });
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un nuevo proyecto', newProyecto })
    } catch (err) {
        res.status(500).json({ error: "Error al intentar crear nuevo proyecto", message: err.message });
    }
}


const updateProyectoById = async (req, res) => {
    try {
        const id = req.params.id;
        const proyectoEliminado = await Proyecto.findByPk(id);
        if (proyectoEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el proyecto buscado' });
        } else {
            await Proyecto.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente el proyecto con el id: ${id} `, proyectoEliminado })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar eliminar proyecto", message: err.message });
    }
}


const deleteProyectoById = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, descripcion, fechaInicio, fechaFin } = req.body;
        const proyectoActualizado = await Proyecto.findByPk(id);
        if (proyectoActualizado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el proyecto buscado' });
        } else {
            await Proyecto.update(
                {
                    nombre,
                    descripcion,
                    fechaInicio,
                    fechaFin
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se Actualizo correctamente el proyecto con el id: ${id} ` })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar actualizar proyecto", message: err.message });
    }
}


export { getAllProyectos, getProyectosById, createProyecto, updateProyectoById, deleteProyectoById }