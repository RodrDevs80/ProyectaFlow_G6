import sequelize from "../config/db/connection.js";
import { DataTypes } from "sequelize";

const Hito = sequelize.define("Hito", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
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
    idTarea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "tareas",
            key: "id"
        }
    }
}, { tableName: "hitos", timestamps: false });


export default Hito;