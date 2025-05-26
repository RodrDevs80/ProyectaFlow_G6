import Hito from "../models/Hito.js";

const createHito = async (req, res) => {
    try {
        if(!req.body){
            res.status(400).json({error: 'Los campos son obligatorios'});
            return;
        }
        const newHito = await Hito.create(req.body);
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un Hito', newHito })
    } catch (err) {
        res.status(500).json({ error: "Error al intentar crear una  nueva etiqueta", message: err.message });
    }
}

const getHitos = async (req, res) => {
    try {
        const allHitos = await Hito.findAll();
        if (allHitos.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay Hitoss cargados.' })
        } else {
            res.status(200).json(allHitos); 
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el listado de Hitos", message: err.message });
    }
}

const getHitoById = async (req, res) => {
    try {
        const id = req.params.id;
        const hitoById = await Hito.findByPk(id);
        if (hitoById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el Hito buscado' });
        } else {
            res.status(200).json({ status: 200, hito: hitoById })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el Hito por id", message: err.message });
    }
}

const updateHitoById = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, fecha, idProyecto, idTarea } = req.body;
        const hitoUpdate = await Hito.findByPk(id);
        if (hitoUpdate === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el Hito buscado' });
        } else {
            await Hito.update(
                {
                    nombre,
                    fecha, 
                    idProyecto,
                    idTarea,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se actualizo correctamente el Hito con el id: ${id} ` })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar actualizar el Hito", message: err.message });
    }
}

const deleteHitoById = async (req, res) => {
    try {
        const id = req.params.id;
        const hitoEliminado = await Hito.findByPk(id);
        if (hitoEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el Hito buscado' });
        } else {
            await Hito.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente el Hito con el id: ${id} `, hitoEliminado })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar eliminar el Hito", message: err.message });
    }
}

export { createHito, getHitos, getHitoById, updateHitoById, deleteHitoById}