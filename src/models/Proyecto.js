import sequelize from "../config/db/connection.js";
import { DataTypes } from "sequelize";

const Proyecto = sequelize.define("Proyecto", {
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
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaFin: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, { tableName: "proyectos", timestamps: false });

export default Proyecto;