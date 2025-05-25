import EquipoXUsuario from "../models/EquipoXUsuario.js";

const getAllEquipoXusuario = async (req, res) => {
    try {
        const registros = await EquipoXUsuario.findAll();
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

const getEquipoXusuarioByID = async (req, res) => {
    try {
        const { id } = req.params;
        const registro = await EquipoXUsuario.findByPk(id);
        if (!registro) {
            return res.status(404).json({
                status: 404,
                message: 'No existe un registro con ese ID',
            });
        }

        return res.status(200).json({
            status: 200,
            message: 'Registro encontrado',
            data: registro,
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error al obtener el registro',
            error: error.message,
        });
    }
};

const createEquipoXusuario = async (req, res) => {
    try {
        const { rol, idEquipo, idUsuario } = req.body;

        if (!rol || rol === "" || !idEquipo || !idUsuario) {
            return res.status(400).json({
                status: 400,
                message: 'Los campos  son obligatorios',
            });
        }

        const existeEquipo = await EquipoXUsuario.findOne({
            where: { idEquipo, idUsuario },
        });

        if (existeEquipo) {
            return res.status(409).json({
                status: 409,
                message: 'Ya existe una asignación para ese usuario en ese equipo',
            });
        }

        const nuevoRegistro = await EquipoXUsuario.create({ rol, idEquipo, idUsuario });

        return res.status(201).json({
            status: 201,
            message: 'Registro creado',
            data: nuevoRegistro,
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error al crear el registro',
            error: error.message,
        });
    }
};

const updateEquipoXusuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { rol, idEquipo, idUsuario } = req.body;

        const registro = await EquipoXUsuario.findByPk(id);
        if (!registro) {
            return res.status(404).json({
                status: 404,
                message: 'No existe un registro con ese ID',
            });
        }

        if (!rol && !idEquipo && !idUsuario) {
            return res.status(400).json({
                status: 400,
                message: 'Debe enviar al menos un campo para actualizar',
            });
        }

        let existeRelacion;
        if ((idEquipo && idEquipo !== registro.idEquipo) || (idUsuario && idUsuario !== registro.idUsuario)) {
                existeRelacion = await EquipoXUsuario.findOne({
                where: {
                    idEquipo: idEquipo || registro.idEquipo,
                    idUsuario: idUsuario || registro.idUsuario,
                },
            });
        }
        if (existeRelacion && existeRelacion.id !== registro.id) {
            return res.status(409).json({
                status: 409,
                message: 'Ya existe una asignación para ese usuario en ese equipo',
            });
        }

        const campoAct = {};
        if (rol) {
            campoAct.rol = rol;
        }
        if (idEquipo) {
            campoAct.idEquipo = idEquipo;
        }
        if (idUsuario) {
            campoAct.idUsuario = idUsuario;
        }

        await EquipoXUsuario.update(campoAct, { where: { id } });
        const registroActualizado = await EquipoXUsuario.findByPk(id);

        return res.status(200).json({
            status: 200,
            message: 'Registro actualizado correctamente',
            data: registroActualizado,
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error al actualizar el registro',
            error: error.message,
        });
    }
};

const deleteEquipoXusuario = async(req,res)=>{
    try {
        const { id }= req.params;
        const registro = await EquipoXUsuario.findByPk(id);
        if(!registro){
            return res.status(404).json({
                status: 404,
                message: 'No existe un registro con ese ID',
            });
        }
        await EquipoXUsuario.destroy({ where: { id } });
        return res.status(200).json({
            status:200,
            message:'Registro eliminado correctamente'
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error al eliminar el registro',
            error: error.message,
        });
    }
};

export {getAllEquipoXusuario,getEquipoXusuarioByID,createEquipoXusuario,updateEquipoXusuario,deleteEquipoXusuario};