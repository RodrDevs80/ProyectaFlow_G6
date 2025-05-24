import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_dialect = process.env.DB_DIALECT;

// Crea una instancia de Sequelize
const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: db_host,
    dialect: db_dialect,
    port: db_port,
    logging: false, // Desactiva los logs SQL
});

// Exporta la instancia para usarla en otros lugares
export default sequelize;