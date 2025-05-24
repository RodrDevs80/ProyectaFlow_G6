import sequelize from "../config/db/connection.js";
import { DataTypes } from "sequelize";

const TareaXTag = sequelize.define("TareaXTag", {
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
    idTag: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "tags",
            key: "id"
        }
    }
}, { tableName: "tareaXTag", timestamps: false });


export default TareaXTag;