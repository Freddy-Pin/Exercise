# Ejecución de Prueba E2E - Demoblaze

Framework utilizado: Cypress (Node.js)

## Pre-requisitos:
1. Tener instalado Node.js (versión 18 o superior).
2. Tener instalado Git (opcional, para clonar el repositorio).

## Instrucciones paso a paso:
1. Abrir la terminal en la raíz del proyecto.
2. Ejecutar el comando para instalar las dependencias:
   npm install
   
3. Para ejecutar la prueba en modo interfaz gráfica (Test Runner), ejecuta:
   npx cypress open
   - Seleccionar "E2E Testing".
   - Elegir el navegador de preferencia (Ej. Chrome).
   - Hacer clic en el archivo "compra.cy.js".

4. Para ejecutar la prueba en modo consola (Headless), ejecuta:
   npx cypress run