# Marvel Web Challenge

La web está desplegada en [marvel-web-challenge](https://marvel-web-challenge.vercel.app/)

## Tecnologías

Desarrollado con **Next.js**, he utilizado **SSR** porque me parece la forma más lógica de desarrollar una app si necesitas una buena puntuación respecto al **SEO** y la navegación es más rápida gracias al cacheo.

No he usado **TypeScript** ya que no se indicaba que había que usarlo y tampoco estaba en la parte de Requisitos opcionales. Pienso que al trabajar con APIs es mejor usar TypeScript para evitar posibles errores de propiedades.

## Estructura del proyecto

He divido la estructura del proyecto en las siguientes carpetas:

- **/app** (app router)
- **/assets**
- **/componentes** (componentes comunes de la web)
- **/contexts**
- **/features** (todo la informacion, ya sea componentes, servicios, tipos si se usa typescript, que son parte del nucleo de la app. Ej: Character,Comic...). Esto permite una mejor estructuración de la idea de negocio.
- **/public**
- **/mocks** (datos para tests en Jest)
- **/playwright-tests** (test E2E)
- **/services** (configuración y métodos generales para los servicios)
- **/utils** (métodos generales para los componentes)

## Ejecución/Construcción del proyecto

Previo a la ejecución del proyecto, es necesario crear un archivo **.env.local** con las siguientes propiedades (sustituir los valores por tus claves públicas y privadas):

```
API_PUBLIC_KEY=YOUR_API_PUBLIC_KEY
API_PRIVATE_KEY=YOUR_API_PRIVATE_KEY
```

### Ejecución

Para lanzar el proyecto en modo desarrollo escribir en la consola lo siguiente:

Usando **npm**

```
npm i

npm run dev
```

Usando **pnpm**

```
pnpm i

pnpm run dev
```

### Construcción

Para construir el proyecto escribir en la consola lo siguiente:

Usando **npm**

```
npm run build
```

Usando **pnpm**

```
pnpm run build
```
