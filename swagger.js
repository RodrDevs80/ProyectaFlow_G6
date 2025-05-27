import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'API de Proyecto Gestion de Tareas',
        description: 'Documentación de la API para proyecto de gestión de tareas',
    },
    host: 'localhost:3306',
    schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
    await import('./index.js');
});