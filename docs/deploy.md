# HOW TO DEPLOY


Para desplegar este proyecto es necesario:

* Tener instalado Node.js v16.17.0 o superior
* Tener conexión a Internet (para conectarse a la base de datos MongoDB)


### Pasos para desplegar el proyecto

1) Instalar Node.js
2) Clonar este repositorio
3) Solicitar credenciales (archivo `.env` de la DB)
4) Copiar el archivo `.env` en el directorio raíz del proyecto
5) Verificar que la variable `.env/DATABASE_URL` apunte a la base de datos correcta
6) Ejecutar `npm i` desde la consola de comandos en la carpeta raíz del proyecto (para descargar las dependencias)
7) Ejecutar los siguientes comandos para construir el frontend de React: 
    * `cd frontend/meetups_app` : va a la carpeta del frontend
    * `npm i` : descarga todas las dependencias de React
    * `npm run build` : construye el frontend
    * `cd ../..` : vuelve a la carpeta raíz del proyecto
8) Ejecutar `node index.js` desde la consola de comandos en la carpeta raíz del proyecto (para iniciar el server)
9) Abrir http://localhost:3000/ en el navegador para visualizar el frontend
10) Listo! Aplicación completa (front y back) desplegada

----

[Go back](../README.md)