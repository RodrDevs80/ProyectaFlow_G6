import sequelize from "../config/db/connection.js";
import { DataTypes } from "sequelize";

const Tarea = sequelize.define("Tarea", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prioridad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaLimite: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idProyecto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "proyectos",
            key: "id"
        }
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "usuarios",
            key: "id"
        }
    }
}, { tableName: "tareas", timestamps: false });


export default Tarea;