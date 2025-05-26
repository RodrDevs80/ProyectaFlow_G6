import SubTarea from "../models/SubTareas";

export const getAllSubtareas = async (req, res) => {
    try {
        const subtareas = await SubTarea.findAll();
        if (subtareas.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay subtareas en la base de datos!!!' })
        } else {
            res.status(200).json(subtareas);
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el listado de subtareas", message: err.message });
    }
}

export const getSubtareaById = async (req, res) => {
    try {
        const id = req.params.id;
        const subtareaById = await SubTarea.findByPk(id);
        if (subtareaById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el subtarea buscada' });
        } else {
            res.status(200).json({ status: 200, comentario: subtareaById })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener comentario por id", message: err.message });
    }
}
export const deleteSubtareaById = async (req, res) => {
    try {
        const id = req.params.id;
        const subtareaEliminada = await SubTarea.findByPk(id);
        if (subtareaEliminada === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la subtarea buscada' });
        } else {
            await SubTarea.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente la subtarea con el id: ${id} `, camioneroEliminado })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar eliminar subtarea", message: err.message });
    }
}


export const createSubtarea = async (req, res) => {
    try {
        if(!req.body){
            res.status(400).json({error: 'Los campos son obligatorios'});
            return;
        }
        const { idTarea } = req.body;
        const newSubtarea = await SubTarea.create({ idTarea});
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa una nueva subtarea', newSubtarea })
    } catch (err) {
        res.status(500).json({ error: "Error al intentar crear nueva subtarea", message: err.message });
    }
}

export const updateSubtareaById = async (req, res) => {
    try {
        const id = req.params.id;
        const { idTarea } = req.body;
        const subtareaActualizada = await SubTarea.findByPk(id);
        if (subtareaActualizada === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la subtarea buscada' });
        } else {
            await SubTarea.update(
                {
                   idTarea
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se actualizo correctamente la subtarea con el id: ${id} ` })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar actualizar subtarea", message: err.message });
    }
}

