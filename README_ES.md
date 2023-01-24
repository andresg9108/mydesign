# My Design #

## Contenido ##

1. Introducción.
2. Dependencias.
3. Empezando.

## Introducción ##

Este proyecto tiene como objetivo proporcionar un conjunto de elementos y plantillas CSS reutilizables.

## Dependencias ##

* Node.js (https://nodejs.org).
  - Ejecuta "node --version" en la consola de su sistema operativo para ver si ya está instalado.
* CLI de Npm (https://docs.npmjs.com/cli).
  - En Windows viene con el instalador de Node.js, en los sistemas operativos basados en Linux deberá instalarlo.
  - Ejecuta "npm --version" en la consola de su sistema operativo para ver si ya está instalado.

## Empezando ##

Para instalar My Design en nuestro proyecto debemos ejecutar el siguiente comando.

~~~
npm i mydesign-ag
~~~

Para saber todo lo que tiene preparado My Design para nosotros, tenemos que clonar su repositorio aparte de nuestro proyecto y mirar sus archivos.

[My Design Repository.](https://github.com/andresg9108/mydesign "My Design Repository.")

My Design usa ManyP, por lo que deberíamos estar familiarizados con esta forma de trabajar.

[ManyP Repository.](https://github.com/andresg9108/manyp "ManyP Repository.")

Ejecutar el siguiente comando creará un servidor de prueba. Ahora podemos ver algunos ejemplos de My Design que podemos agregar a nuestro proyecto.

~~~
manyp-cli server
~~~

Cuando decidamos qué ejemplo queremos añadir a nuestro proyecto, accederemos a la carpeta “pages” y dentro de ella podremos encontrar una carpeta con el nombre del ejemplo que hemos seleccionado. Cuando encontremos la carpeta de nuestro ejemplo, abriremos el archivo "body.html" que se encuentra dentro de ella. En este archivo está toda la información para implementar este ejemplo en nuestro proyecto. La implementación del ejemplo en nuestro proyecto depende de lo siguiente.

- DESCRIPTION.
- DEPENDENCIES.
- CODE.

Verá la clase CSS llamada "my-simple-container" en muchos de los casos, como se muestra a continuación. Esta clase le dice al elemento que la contiene que se comporta como un pequeño contenedor, en muchos casos y si quieres, este contenedor no es necesario para agregar el ejemplo en nuestro proyecto.

```html
<div class="my-simple-container">
  ...
</div>
```