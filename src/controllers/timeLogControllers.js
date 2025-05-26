import TimeLog from "../models/TimeLog.js";

const createTimeLog = async (req, res) => {
    try {
        if(!req.body){
            res.status(400).json({error: 'Los campos son obligatorios'});
            return;
        }
        const newTimeLog = await TimeLog.create(req.body);
        res.status(201).json({ status: 201, message: 'Se creo de manera exitosa un TimeLog', newTimeLog })
    } catch (err) {
        res.status(500).json({ error: "Error al intentar crear una  nueva etiqueta", message: err.message });
    }
}

const getTimeLogs = async (req, res) => {
    try {
        const allTimeLog = await TimeLog.findAll();
        if (allTimeLog.length === 0) {
            res.status(200).json({ status: 200, message: 'No hay TimeLogs cargados.' })
        } else {
            res.status(200).json(allTimeLog); 
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el listado de TimeLogs", message: err.message });
    }
}

const getTimeLogById = async (req, res) => {
    try {
        const id = req.params.id;
        const timeLogById = await TimeLog.findByPk(id);
        if (timeLogById === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el TimeLog buscado' });
        } else {
            res.status(200).json({ status: 200, timeLog: timeLogById })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al obtener el TimeLog por id", message: err.message });
    }
}

const updateTimeLogById = async (req, res) => {
    try {
        const id = req.params.id;
        const { fecha, horas, descripcion, idUsuario, idTarea } = req.body;
        const timeLogUpdate = await TimeLog.findByPk(id);
        if (timeLogUpdate === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el timeLog buscado' });
        } else {
            await TimeLog.update(
                {
                    fecha,
                    horas, 
                    descripcion,
                    idUsuario,
                    idTarea
                },
                {
                    where: {
                        id,
                    },
                },
            );
            res.status(200).json({ status: 200, message: `Se actualizo correctamente el timeLog con el id: ${id} ` })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar actualizar el timeLog", message: err.message });
    }
}

const deleteTimeLogById = async (req, res) => {
    try {
        const id = req.params.id;
        const timeLogEliminado = await TimeLog.findByPk(id);
        if (timeLogEliminado === null) {
            res.status(400).json({ status: 400, title: 'Bad Request', message: 'No existe el timeLog buscado' });
        } else {
            await TimeLog.destroy({
                where: {
                    id
                },
            });
            res.status(200).json({ status: 200, message: `Se elimino correctamente el timeLog con el id: ${id} `, timeLogEliminado })
        }

    } catch (err) {
        res.status(500).json({ error: "Error al intentar eliminar el timeLog", message: err.message });
    }
}

export { createTimeLog, getTimeLogs, getTimeLogById, updateTimeLogById, deleteTimeLogById}