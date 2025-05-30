import express from "express";
import cors from "cors";
import morgan from "morgan";
import { sequelize } from "./src/models/index.js";
import equipoRoutes from "./src/routes/equipoRoutes.js";
import proyectoRoutes from "./src/routes/proyectoRoutes.js";
import tagRouter from "./src/routes/tagRoutes.js"
import taskRouter from "./src/routes/taskRoutes.js";
import timeLogRouter from "./src/routes/timeLogRoutes.js";
import hitoRouter from "./src/routes/hitoRoutes.js";
import comentarioRouter from "./src/routes/comentarioRoutes.js";
import usuarioRoutes from "./src/routes/usuarioRoutes.js";
import equipoXusuarioRoutes from "./src/routes/equipoXusuarioRoutes.js";
import subTareaRouter from "./src/routes/subtareaRuotes.js";
import tareaXtagRouter from "./src/routes/tareaXtagRoutes.js"
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json" with { type: "json" };

const app = express();
const PORT = process.env.PORT || 5000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(equipoRoutes);
app.use(proyectoRoutes)

app.use(tagRouter)
app.use(taskRouter)

app.use(timeLogRouter)
app.use(hitoRouter)

app.use(usuarioRoutes);
app.use(equipoXusuarioRoutes);

app.use(comentarioRouter)
app.use(subTareaRouter)

app.use(tareaXtagRouter)

app.get('/', (req, res) => {
    res.send("¡Backend funcionando!");
})

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log(
            "✅ Conexión a la base de datos establecida correctamente."
        );

        // Sincroniza los modelos con la base de datos.
        // force: false (default) - No borra tablas si existen.
        // force: true - Borra y recrea tablas. ¡PELIGROSO en producción!
        // alter: true - Intenta modificar tablas existentes.
        await sequelize.sync({ force: false }); // Cambia bajo tu propio riesgo
        console.log("🔄 Modelos sincronizados con la base de datos.");

        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Error al iniciar el servidor:", error);
    }
}



startServer();



