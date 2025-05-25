import Tag from "../models/Tag.js";

const createTag = async (req, res) => {
    try {
        if(!req.body.nombre){
            res.status(400).json({error: 'Se requiere un nombre para la etiqueta'});
            return;
        }
        const { nombre } = req.body;
        const newTag = await Tag.create({ nombre });
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa una etiqueta', newTag })
    } catch (err) {
        res.status(500).json({ error: "Error al intentar crear una  nueva etiqueta", message: err.message });
    }
}

const getAllTags = async (req, res) => {
    try {
        const allTags = await Tag.findAll();
        if (allTags.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay etiquetas en la base de datos!!!' })
        } else {
            res.status(200).json(allTags); 
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el listado de proyectos", message: err.message });
    }
}

const getTagById = async (req, res) => {
    try {
        const id = req.params.id;
        const etiquetaById = await Tag.findByPk(id);
        if (etiquetaById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la etiqueta buscada' });
        } else {
            res.status(200).json({ status: 200, etiqueta: etiquetaById })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener proyecto por id", message: err.message });
    }
}

const updateTagById = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre } = req.body;
        const etiquetaActualizada = await Tag.findByPk(id);
        if (etiquetaActualizada === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la etiqueta buscada' });
        } else {
            await Tag.update(
                {
                    nombre,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se Actualizo correctamente la etiqueta con el id: ${id} ` })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar actualizar la etiqueta", message: err.message });
    }
}

const deleteTagById = async (req, res) => {
    try {
        const id = req.params.id;
        const tagEliminada = await Tag.findByPk(id);
        if (tagEliminada === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe la etiqueta buscada' });
        } else {
            await Tag.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente la etiqueta con el id: ${id} `, tagEliminada })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar eliminar la etiqueta", message: err.message });
    }
}

export { createTag , getAllTags, getTagById, updateTagById, deleteTagById }