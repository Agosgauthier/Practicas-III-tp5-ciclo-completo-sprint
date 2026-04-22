# Escenarios

## Cargar nota correctamente
Given un alumno existente
When el profesor carga una nota
Then la nota se guarda correctamente

## Evitar nota duplicada
Given un alumno con nota en Matemática
When se intenta cargar otra nota en la misma materia
Then el sistema muestra error