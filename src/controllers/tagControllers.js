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


export { createTag }