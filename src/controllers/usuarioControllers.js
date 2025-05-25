import Usuario from '../models/Usuario.js';

const getAllUsuarios = async(req,res)=>{
    try {
        const usuarios = await Usuario.findAll();
        if(usuarios.length === 0){
            return  res.status(404).json({
                    status:404,
                    message: 'No hay usuarios en la BD'
                })
            }
        res.status(200).json({
            status:200,
            message:'usuarios encontrados',
            data:usuarios
        })
        
    } catch (error) {
        return  res.status(500).json({
                status:500,
                message:'Error al obtener usuarios',
                error: error.message
            })
        }
    };

const getUsuarioById = async(req,res)=>{
try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if(!usuario){
        return res.status(404).json({
            status:404,
            message:'No existe un usuario con ese ID'
        })
    }
    return res.status(200).json({
        status:200,
        message:'Usuario encontrado',
        data:usuario
    })
} catch (error) {
    return res.status(500).json({
        status:500,
        message:'Error del servidor',
        error:error.message
        })
    }
};

const createUsuario = async(req,res)=>{
    try {
        const { nombre,email } = req.body;
        if(!nombre || !email){
            return res.status(400).json({
                status:400,
                message:'Campos obligatorios'
            })
        }
        const usuarioExiste = await Usuario.findOne({where:{email}});
        if(usuarioExiste){
            return  res.status(409).json({
                    status:409,
                    message:'Ya existe un usuario con ese email'
                })
            }

        const nuevoUsuario = await Usuario.create({nombre,email});
        return res.status(201).json({
            status:201,
            message:'Usuario añadido correctamente en la BD',
            data:nuevoUsuario
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:'Error al crear un usuario',
            error:error.message
        })
    }
};

const updateUsuario = async(req,res)=>{
    try {
        const { id } = req.params;
        const { nombre, email } = req.body;

        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            return res.status(404).json({
                status: 404,
                message: 'No existe un usuario con ese ID'
            });
        }

        if((!nombre && !email) || nombre === "" || email === ""){
            return res.status(400).json({
                status:400,
                message:'Debe ingresar nombre ó email válido'
            })
        }

        if(email && email !== usuario.email){
            const emailExiste = await Usuario.findOne({where:{email}});
            if(emailExiste){
            return  res.status(409).json({
                    status: 409,
                    message: 'Ya existe otro usuario con ese email',
                    });
                }
            }

        const camposAct = {};
        if(nombre){
            camposAct.nombre = nombre;
        }
        if(email){
            camposAct.email = email;
        }
        await Usuario.update(camposAct,{ where: { id } });
        const usuarioAct = await Usuario.findByPk(id);
        return res.status(200).json({
                        status: 200,
                        message: 'Usuario actualizado exitosamente',
                        data: usuarioAct,
                    });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Error al actualizar el usuario',
            error: error.message
        });
    }
};


const deleteUsuario = async(req,res)=>{
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return  res.status(404).json({
                    status: 404,
                    message: 'No existe un usuario con ese ID',
            });
        }

        await usuario.destroy();

        return  res.status(200).json({
                status: 200,
                message: 'Usuario eliminado exitosamente',
            });

    } catch (error) {
        return  res.status(500).json({
                status: 500,
                message: 'Error al eliminar el usuario',
                error: error.message,
            });
        }
};

export {getAllUsuarios,getUsuarioById,updateUsuario,createUsuario,deleteUsuario};