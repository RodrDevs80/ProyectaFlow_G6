import Comentario from '../models/Comentario.js'

export const getAllComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.findAll();
        if (comentarios.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay comentarios en la base de datos!!!' })
        } else {
            res.status(200).json(comentarios);
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el listado de comentarios", message: err.message });
    }
}

export const getComentarioById = async (req, res) => {
    try {
        const id = req.params.id;
        const comentarioById = await Comentario.findByPk(id);
        if (comentarioById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el comentario buscado' });
        } else {
            res.status(200).json({ status: 200, comentario: comentarioById })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener comentario por id", message: err.message });
    }
}
export const deleteComentarioById = async (req, res) => {
    try {
        const id = req.params.id;
        const comentarioEliminado = await Comentario.findByPk(id);
        if (comentarioEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el comentario buscado' });
        } else {
            await Comentario.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente el comentario con el id: ${id} `,comentarioEliminado })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar eliminar comentario", message: err.message });
    }
}


export const createComentario = async (req, res) => {
    try {
        if(!req.body){
            res.status(400).json({error: 'Los campos son obligatorios'});
            return;
        }
        const { texto,fecha,hora,idUsuario,idTarea } = req.body;
        const newComentario = await Comentario.create({ texto,fecha,hora,idUsuario,idTarea });
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un nuevo comentario', newComentario })
    } catch (err) {
        res.status(500).json({ error: "Error al intentar crear nuevo comentario", message: err.message });
    }
}

export const updateComentarioById = async (req, res) => {
    try {
        const id = req.params.id;
        const { texto,fecha,hora,idUsuario,idTarea } = req.body;
        const comentarioActualizado = await Comentario.findByPk(id);
        if (comentarioActualizado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el comentario buscado' });
        } else {
            await Comentario.update(
                {
                    texto,fecha,hora,idUsuario,idTarea
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se actualizo correctamente el comentario con el id: ${id} ` })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar actualizar comentario", message: err.message });
    }
}
