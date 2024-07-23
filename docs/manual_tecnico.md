### Pruebas

Puedes realizar pruebas con herramientas como Postman para verificar las rutas CRUD:

1. **Crear un guarda de seguridad:**
   - Método: POST
   - URL: `http://localhost:3000/api/guardaSeguridad`
   - Body: JSON con los detalles del guarda.

2. **Obtener todos los guardas de seguridad:**
   - Método: GET
   - URL: `http://localhost:3000/api/guardaSeguridad`

3. **Obtener un guarda de seguridad por ID:**
   - Método: GET
   - URL: `http://localhost:3000/api/guardaSeguridad/:id`

4. **Actualizar un guarda de seguridad por ID:**
   - Método: PUT
   - URL: `http://localhost:3000/api/guardaSeguridad/:id`
   - Body: JSON con los detalles actualizados del guarda.

5. **Eliminar un guarda de seguridad por ID:**
   - Método: DELETE
   - URL: `http://localhost:3000/api/guardaSeguridad/:id`

### Uso de GIT

Asegúrate de versionar tu código usando GIT:

1. **Inicializa el repositorio:**
   ```bash
   git init