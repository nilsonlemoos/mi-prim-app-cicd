// Importamos herramientas para probar
const request = require('supertest');
const app = require('../app');

// Describimos qué vamos a probar
describe('Mi primera app', () => {
    // Primera prueba
    test('Debería responder con nuestro mensaje', async () => {
        // Hacemos una petición a nuestra app
        const respuesta = await request(app).get('/');
        
        // Verificamos que la respuesta sea correcta
        expect(respuesta.status).toBe(200);
        expect(respuesta.text).toContain('¡Hola! Mi primera app con CI/CD funciona');
    });
}); 