import sequelize from "../config/db/connection.js";
import Equipo from "./Equipo.js";
import Usuario from "./Usuario.js";
import Tarea from "./Tarea.js";
import Tag from "./Tag.js";
import EquipoXUsuario from "./EquipoXUsuario.js";
import TareaXTag from "./TareaXTag.js";
import Proyecto from "./Proyecto.js";
import Hito from "./Hito.js";
import Comentario from "./Comentario.js";
import SubTarea from "./SubTareas.js";
import TimeLog from "./TimeLog.js";

// --- Definir Asociaciones ---

// Relación Equipo <-> EquipoXUsuario (1:N)
Equipo.hasMany(EquipoXUsuario, {
    foreignKey: "idEquipo",
    sourceKey: "id"
})
EquipoXUsuario.belongsTo(Equipo, {
    foreignKey: "idEquipo",
    targetKey: "id"
})
//Relación Usuario <-> EquipoXUsuario (1:N)
Usuario.hasMany(EquipoXUsuario, {
    foreignKey: "idUsuario",
    sourceKey: "id"
})
EquipoXUsuario.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    targetKey: "id"
})
//_____________________________________________
// Relación Tarea <-> TareaXTag (1:N)
Tarea.hasMany(TareaXTag, {
    foreignKey: "idTarea",
    sourceKey: "id"
})
TareaXTag.belongsTo(Tarea, {
    foreignKey: "idTarea",
    targetKey: "id"
})
//Relación Tag <-> TareaXTag (1:N)
Tag.hasMany(TareaXTag, {
    foreignKey: "idTag",
    sourceKey: "id"
})
TareaXTag.belongsTo(Tag, {
    foreignKey: "idTag",
    targetKey: "id"
})
// Relación Equipo <-> Proyecto (1:1)
Proyecto.hasOne(Equipo, {
    foreignKey: "idProyecto",
    sourceKey: "id"
});
Equipo.belongsTo(Proyecto, {
    foreignKey: "idProyecto",
    targetKey: "id"
});
//Relación Proyecto <-> Tarea (1:N)
Proyecto.hasMany(Tarea, {
    foreignKey: "idProyecto",
    sourceKey: "id"
})
Tarea.belongsTo(Proyecto, {
    foreignKey: "idProyecto",
    targetKey: "id"
})
//Relación Proyecto <-> Hito (1:N)
Proyecto.hasMany(Hito, {
    foreignKey: "idProyecto",
    sourceKey: "id"
})
Hito.belongsTo(Proyecto, {
    foreignKey: "idProyecto",
    targetKey: "id"
})
//Relación Tarea <-> Hito (1:N)
Tarea.hasMany(Hito, {
    foreignKey: "idTarea",
    sourceKey: "id"
})
Hito.belongsTo(Tarea, {
    foreignKey: "idTarea",
    targetKey: "id"
})
//Relación Usuario <-> Tarea (1:N)
Usuario.hasMany(Tarea, {
    foreignKey: "idUsuario",
    sourceKey: "id"
})
Tarea.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    targetKey: "id"
})
//Relación Usuario <-> Comentario (1:N)
Usuario.hasMany(Comentario, {
    foreignKey: "idUsuario",
    sourceKey: "id"
})
Comentario.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    targetKey: "id"
})
//Relación Tarea <-> comentario (1:N)
Tarea.hasMany(Comentario, {
    foreignKey: "idTarea",
    sourceKey: "id"
})
Comentario.belongsTo(Tarea, {
    foreignKey: "idTarea",
    targetKey: "id"
})
//Relación Tarea <-> TimeLog (1:N)
Tarea.hasMany(TimeLog, {
    foreignKey: "idTarea",
    sourceKey: "id"
})
TimeLog.belongsTo(Tarea, {
    foreignKey: "idTarea",
    targetKey: "id"
})
//Relación Usuario <-> TimeLog (1:N)
Usuario.hasMany(TimeLog, {
    foreignKey: "idUsuario",
    sourceKey: "id"
})
TimeLog.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    targetKey: "id"
})
//Relación Tarea <-> SubTarea (1:N)
Tarea.hasMany(SubTarea, {
    foreignKey: "idTarea",
    sourceKey: "id"
})
SubTarea.belongsTo(Tarea, {
    foreignKey: "idTarea",
    targetKey: "id"
})


export { sequelize }