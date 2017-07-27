# proyectosAngular

+++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++ angular 2.0 ++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++
instalar node

Instalar typescript
> npm install -g typescript

Instalar angular cli
> npm install -g @angular/cli

Instalar IONIC (aplicaciones móviles)
> npm install -g cordova ionic

INICIO RÁPIDO - GENERA TODOS LOS ARCHIVOS
**********************
Crear proyecto
> cd my-app

Iniciar servidor
> ng serve --open

http://localhost:4200/

Generar un footer
> ng g c footer
**********************

para crear archivo tsconfig.json
-- Inicializar typescript --

>  tsc --init --experimentalDecorators --emitDecoratorMetadata --target ES5 --module system --moduleResolution node  

le decimos que puede usar decoradores

typescript requiere de librerías adicionales y archivos de definiciones conocidos como type definition (d.ts)

Para generarlos de forma más sencilla
>  npm install -g typings
>  typings install dt~es6-shim --save --global  

Para instalar dependencias de desarrollo en node

> npm install typings --save-dev
