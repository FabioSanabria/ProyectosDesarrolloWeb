# Generador de Canciones de Taylor Swift

## Información

Estudiantes:

Juan Carlos Aguilar Torres C10144
Fabio Andrés Sanabria Valerín C07194

Docente:
Braulio Solano

## Descripción del Proyecto

Este proyecto se centra en aprovechar el trabajo realizado en la cuenta de GitHub: [SongLyricsGenerator](https://github.com/PieroPaialungaAI/SongLyricsGenerator) y convertirlo en un servicio web con una API similar a la de ChatGPT. La base del proyecto implica la utilización de una red neuronal creada con TensorFlow para generar letras de canciones. Una vez establecido el API, se busca desarrollar una interfaz gráfica web que permita interactuar con facilidad.

## Objetivo

El objetivo principal es proporcionar a los usuarios la capacidad de generar letras de canciones al estilo de Taylor Swift de manera sencilla y accesible. Este proyecto busca combinar la potencia de las redes neuronales con una interfaz web intuitiva, permitiendo a los usuarios experimentar con la creación de letras únicas inspiradas en el estilo característico de Taylor Swift.

### Error de path

Por limitaciones de hardware de la tecnologia de TensorFlow, la unica forma de cargar el generador de canciones de Taylor Swift debe de colocar el path total de su maquina, el lugar donde usted debe de ponerlo es en la linea 10 del creationRouter.js en la parte donde dice: model = await tf.loadLayersModel('**file:///home/user/Documents/.../Models/taylor_swift_js/model.json'**); Lo único que debe de hacer es darle click derecho al model.js que se encuentra en **/Models/taylor_swift_js/model.json** y darle **copy path** para obtener la ruta total.

Asegurese de mantener el "file:///" al inicio de esta ruta.

### Instrucciones de Instalación

Antes de ejecutar este proyecto, es necesario realizar la instalación del módulo EJS para Node.js. Puede llevar a cabo esta instalación mediante el siguiente comando:

```bash
npm install ejs
```

### Ejecución del Proyecto

Para iniciar el proyecto, diríjase a la carpeta principal y ejecute el siguiente comando:

```bash
npm start
```

Asegúrese de haber completado la instalación de EJS antes de ejecutar el proyecto para evitar problemas en la ejecución.