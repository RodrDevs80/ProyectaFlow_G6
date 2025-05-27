import sequelize from "../config/db/connection.js";
import { DataTypes } from "sequelize";

const SubTarea = sequelize.define("SubTarea", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    idTarea: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "tareas",
            key: "id"
        }
    },
}, { tableName: "subTareas", timestamps: false });


export default SubTarea;