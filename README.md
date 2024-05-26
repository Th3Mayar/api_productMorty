# Introducción

Esta API RESTful, construida con Express.js, te permite acceder a información sobre productos y personajes de la serie Rick and Morty.

## Instalación

1. **Clona el repositorio:**

   Descarga el código fuente del repositorio en tu máquina local.

2. **Dependencias:**

   Instala las dependencias necesarias usando el siguiente comando:

   ```bash
   npm install

2. **Ejecución del servidor:**

    Inicia el servidor ejecutando el siguiente comando:
   
   ```bash
   node index.js
<div>
  <h1>Endpoints</h1>
  <h2>Productos</h2>
  <ul>
    <li>
      <strong>GET /products:</strong> Obtiene una lista con todos los productos disponibles.
      <br><br>
      <strong>Respuesta:</strong>
      <ul>
        <li>Código 200 OK: Un array de objetos con información de los productos.</li>
      </ul>
    </li>
    <li>
      <strong>GET /product/:id:</strong> Obtiene un producto específico por su ID.
      <br><br>
      <strong>Parámetros:</strong>
      <ul>
        <li>id: Identificador único del producto.</li>
      </ul>
      <strong>Respuesta:</strong>
      <ul>
        <li>Código 200 OK: Un objeto con información del producto encontrado.</li>
        <li>Código 404 Not Found: Si no se encuentra el producto con el ID especificado.</li>
      </ul>
    </li>
    <li>
      <strong>POST /product:</strong> Crea un nuevo producto.
      <br><br>
      <strong>Datos requeridos:</strong> Un objeto JSON con la información del producto.
      <br><br>
      <strong>Respuesta:</strong>
      <ul>
        <li>Código 200 OK: Un objeto con información del producto creado.</li>
      </ul>
    </li>
    <li>
      <strong>PUT /product/:id:</strong> Actualiza un producto existente.
      <br><br>
      <strong>Parámetros:</strong>
      <ul>
        <li>id: Identificador único del producto a actualizar.</li>
      </ul>
      <strong>Datos requeridos:</strong> Un objeto JSON con los campos a actualizar del producto.
      <br><br>
      <strong>Respuesta:</strong>
      <ul>
        <li>Código 200 OK: Un objeto con información del producto actualizado.</li>
      </ul>
    </li>
  </ul>
  <h2>Personajes</h2>
  <ul>
    <li>
      <strong>GET /characters:</strong> Obtiene una lista con todos los personajes de Rick and Morty.
      <br><br>
      <strong>Respuesta:</strong>
      <ul>
        <li>Código 200 OK: Un array de objetos con información de los personajes.</li>
      </ul>
    </li>
    <li>
      <strong>GET /character/:id:</strong> Obtiene un personaje específico por su ID.
      <br><br>
      <strong>Parámetros:</strong>
      <ul>
        <li>id: Identificador único del personaje.</li>
      </ul>
      <strong>Respuesta:</strong>
      <ul>
        <li>Código 200 OK: Un objeto con información del personaje encontrado.</li>
        <li>Código 404 Not Found: Si no se encuentra el personaje con el ID especificado.</li>
      </ul>
    </li>
  </ul>
  <h2>Tecnologías Utilizadas</h2>
  <ul>
    <li>Express.js: Framework de Node.js para el desarrollo de aplicaciones web y APIs.</li>
    <li>Cors: Middleware de Express para permitir el intercambio de recursos entre diferentes orígenes.</li>
    <li>Node.js: Entorno de ejecución de JavaScript del lado del servidor.</li>
  </ul>
</div>
