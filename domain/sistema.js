const Alumno = require("../models/alumno");
const Profesor = require("../models/profesor");
const Calificacion = require("../models/calificacion");

let alumnos = [];
let profesores = [];
let calificaciones = [];

function agregarAlumno(nombre) {
    const alumno = new Alumno(alumnos.length + 1, nombre);
    alumnos.push(alumno);
}

function agregarProfesor(nombre) {
    const profesor = new Profesor(profesores.length + 1, nombre);
    profesores.push(profesor);
}

function cargarNota(alumnoId, materia, nota) {
    let existe = calificaciones.find(c =>
        c.alumnoId === alumnoId && c.materia === materia
    );

    if (existe) {
        console.log("Error: nota duplicada");
        return;
    }

    const calificacion = new Calificacion(alumnoId, materia, nota);
    calificaciones.push(calificacion);
}

function verNotas(alumnoId) {
    return calificaciones.filter(c => c.alumnoId === alumnoId);
}

module.exports = {
    agregarAlumno,
    agregarProfesor,
    cargarNota,
    verNotas
};