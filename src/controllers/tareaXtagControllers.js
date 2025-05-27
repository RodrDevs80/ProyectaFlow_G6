import TareaXTag from "../models/TareaXTag.js";

const getAllTareaXtag = async (req, res) => {
    try {
        const registros = await TareaXTag.findAll();
        if (registros.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'No hay registros en la BD',
            })
        }
        return res.status(200).json({
            status: 200,
            message: 'Respuesta éxitosa',
            data: registros
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Error al obtener los registros",
            error: error.message,
        });
    }
};

const getTareaXtagByID = async (req, res) => {
    try {
        const { id } = req.params;
        const registro = await TareaXTag.findByPk(id);
        if (!registro) {
            return res.status(404).json({
                status: 404,
                message: 'No existe un registro TareaXTag con ese ID',
            });
        }

        return res.status(200).json({
            status: 200,
            message: 'Registro TareaXTag encontrado',
            data: registro,
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error al obtener el registro TareaXTag',
            error: error.message,
        });
    }
};

const createTareaXtag = async (req, res) => {
    try {
        const { idTarea, idTag } = req.body;

        if (!idTarea || !idTag) {
            return res.status(400).json({
                status: 400,
                message: 'Los campos  son obligatorios',
            });
        }

        const existeTag = await TareaXTag.findOne({
            where: { idTarea, idTag },
        });

        if (existeTag) {
            return res.status(409).json({
                status: 409,
                message: 'Ese Tag ya esta asignado a la Tarea',
            });
        }

        const nuevoRegistro = await TareaXTag.create({ idTarea, idTag });

        return res.status(201).json({
            status: 201,
            message: 'Registro TareaxTag creado',
            data: nuevoRegistro,
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error al crear el registro TareaxTag',
            error: error.message,
        });
    }
};

const updateTareaXtag = async (req, res) => {
    try {
        const { id } = req.params;
        const { idTarea, idTag } = req.body;

        const registro = await TareaXTag.findByPk(id);
        if (!registro) {
            return res.status(404).json({
                status: 404,
                message: 'No existe un registro TareaXTag con ese ID',
            });
        }

        if (!idTarea && !idTag) {
            return res.status(400).json({
                status: 400,
                message: 'Debe enviar al menos un campo para actualizar',
            });
        }

        let existeRelacion;
        if ((idTarea && idTarea !== registro.idTarea) || (idTag && idTag !== registro.idTag)) {
                existeRelacion = await TareaXTag.findOne({
                where: {
                    idTarea: idTarea || registro.idTarea,
                    idTag: idTag || registro.idTag,
                },
            });
        }
        if (existeRelacion && existeRelacion.id !== registro.id) {
            return res.status(409).json({
                status: 409,
                message: 'Ya existe una asignación para esta tarea con este tag',
            });
        }

        const campoAct = {};
        if (idTarea) {
            campoAct.idTarea = idTarea;
        }
        if (idTag) {
            campoAct.idTag = idTag;
        }

        await TareaXTag.update(campoAct, { where: { id } });
        const registroActualizado = await TareaXTag.findByPk(id);

        return res.status(200).json({
            status: 200,
            message: 'Registro TareaXTag actualizado correctamente',
            data: registroActualizado,
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error al actualizar el registro TareaXTag',
            error: error.message,
        });
    }
};

const deleteTareaXtag = async(req,res)=>{
    try {
        const { id }= req.params;
        const registro = await TareaXTag.findByPk(id);
        if(!registro){
            return res.status(404).json({
                status: 404,
                message: 'No existe un registro TareaXTag con ese ID',
            });
        }
        await TareaXTag.destroy({ where: { id } });
        return res.status(200).json({
            status:200,
            message:'Registro TareaXTag eliminado correctamente'
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error al eliminar el registro TareaXTag',
            error: error.message,
        });
    }
};

export {getAllTareaXtag,getTareaXtagByID,createTareaXtag,updateTareaXtag,deleteTareaXtag};