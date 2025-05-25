import Tarea from "../models/Tarea.js";

const createTarea = async (req, res) => {
    try {
        if(!req.body){
            res.status(400).json({error: 'Los campos son obligatorios'});
            return;
        }
        const newTarea = await Tarea.create(req.body);
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa una tarea', newTarea })
    } catch (err) {
        res.status(500).json({ error: "Error al intentar crear una  nueva etiqueta", message: err.message });
    }
}

const getAllTareas = async (req, res) => {
    try {
        const allTareas = await Tarea.findAll();
        if (allTareas.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay tareas cargadas.' })
        } else {
            res.status(200).json(allTareas); 
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el listado de tareas", message: err.message });
    }
}

const getTareaById = async (req, res) => {
    try {
        const id = req.params.id;
        const tareaById = await Tarea.findByPk(id);
        if (tareaById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la tarea buscada' });
        } else {
            res.status(200).json({ status: 200, tarea: tareaById })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener la tarea por id", message: err.message });
    }
}

const updateTareaById = async (req, res) => {
    try {
        const id = req.params.id;
        const { titulo,estado, prioridad ,descripcion } = req.body;
        const tareaUpdate = await Tarea.findByPk(id);
        if (tareaUpdate === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la tarea buscada' });
        } else {
            await Tarea.update(
                {
                    titulo,
                    estado, 
                    prioridad,
                    descripcion,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se actualizo correctamente la tarea con el id: ${id} ` })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar actualizar la tarea", message: err.message });
    }
}

const deleteTareaById = async (req, res) => {
    try {
        const id = req.params.id;
        const tareaEliminada = await Tarea.findByPk(id);
        if (tareaEliminada === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la tarea buscada' });
        } else {
            await Tarea.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente la tarea con el id: ${id} `, tareaEliminada })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar eliminar la tarea", message: err.message });
    }
}

export { createTarea, getAllTareas, getTareaById, updateTareaById, deleteTareaById}