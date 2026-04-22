const sistema = require("./domain/sistema");

sistema.agregarAlumno("Juan");
sistema.agregarProfesor("Profe 1");

sistema.cargarNota(1, "Matematica", 8);
sistema.cargarNota(1, "Matematica", 10);

console.log(sistema.verNotas(1));