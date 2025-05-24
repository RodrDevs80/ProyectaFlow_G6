import sequelize from "../config/db/connection.js";
import { DataTypes } from "sequelize";

const Equipo = sequelize.define("Equipo", {
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
    idProyecto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "proyectos",
            key: "id"
        }
    }
}, { tableName: "equipos", timestamps: false });


export default Equipo;