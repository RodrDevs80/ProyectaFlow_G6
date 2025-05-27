import Equipo from "../models/Equipo.js";

const getAllEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.findAll();
        if (equipos.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay equipos en la base de datos!!!' })
        } else {
            res.status(200).json(equipos);
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el listado de equipos", message: err.message });
    }
}


const getEquipoById = async (req, res) => {
    try {
        const id = req.params.id;
        const equipoById = await Equipo.findByPk(id);
        if (equipoById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el equipo buscado' });
        } else {
            res.status(200).json({ status: 200, equipo: equipoById })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener equipo por id", message: err.message });
    }
}



const createEquipo = async (req, res) => {
    try {
        const { nombre, idProyecto } = req.body;
        const newEquipo = await Equipo.create({ nombre, idProyecto });
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un nuevo equipo', newEquipo })
    } catch (err) {
        res.status(500).json({ error: "Error al intentar crear nuevo equipo", message: err.message });
    }
}


const updateEquipoById = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, idProyecto } = req.body;
        const equipoActualizado = await Equipo.findByPk(id);
        if (equipoActualizado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el equipo buscado' });
        } else {
            await Equipo.update(
                {
                    nombre, idProyecto
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se Actualizo correctamente el equipo con el id: ${id} ` })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar actualizar equipo", message: err.message });
    }
}


const deleteEquipoById = async (req, res) => {
    try {
        const id = req.params.id;
        const equipoEliminado = await Equipo.findByPk(id);
        if (equipoEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el equipo buscado' });
        } else {
            await Equipo.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente el equipo con el id: ${id} `, equipoEliminado })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar eliminar equipo", message: err.message });
    }
}

export { getAllEquipos, getEquipoById, createEquipo, updateEquipoById, deleteEquipoById }