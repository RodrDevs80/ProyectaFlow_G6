import sequelize from "../config/db/connection.js";
import { DataTypes } from "sequelize";

const EquipoXUsuario = sequelize.define("EquipoXUsuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idEquipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "equipos",
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
}, { tableName: "equipoXUsuario", timestamps: false });


export default EquipoXUsuario;