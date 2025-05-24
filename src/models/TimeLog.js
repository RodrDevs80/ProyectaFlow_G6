import sequelize from "../config/db/connection.js";
import { DataTypes } from "sequelize";

const TimeLog = sequelize.define("TimeLog", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    horas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "usuarios",
            key: "id"
        }
    },
    idTarea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "tareas",
            key: "id"
        }
    }
}, { tableName: "timeLog", timestamps: false });


export default TimeLog;