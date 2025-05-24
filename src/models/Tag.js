import sequelize from "../config/db/connection.js";
import { DataTypes } from "sequelize";

const Tag = sequelize.define("Tag", {
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
}, { tableName: "tags", timestamps: false });


export default Tag;