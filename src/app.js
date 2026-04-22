let alumnos = [];
let profesores = [];
let calificaciones = [];

function agregarAlumno(nombre) {
    alumnos.push({ id: alumnos.length + 1, nombre });
}

function agregarProfesor(nombre) {
    profesores.push({ id: profesores.length + 1, nombre });
}

function cargarNota(alumnoId, materia, nota) {
    let existe = calificaciones.find(c =>
        c.alumnoId === alumnoId && c.materia === materia
    );

    if (existe) {
        console.log("Error: nota duplicada");
        return;
    }

    calificaciones.push({ alumnoId, materia, nota });
}

function verNotas(alumnoId) {
    return calificaciones.filter(c => c.alumnoId === alumnoId);
}

// DEMO
agregarAlumno("Juan");
agregarProfesor("Profe 1");

cargarNota(1, "Matematica", 8);
cargarNota(1, "Matematica", 10);

console.log(verNotas(1));