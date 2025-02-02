const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '0.1.0',      // by default: '1.0.0'
        title: 'Fix-It API',        // by default: 'REST API'
        description: '',  // by default: ''
    },
    host: '',      // by default: 'localhost:3000'
    basePath: '/',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
        {
            name: '',         // Tag name
            description: '',  // Tag description
        },
        // { ... }
    ],
    securityDefinitions: {},  // by default: empty object
    definitions: {},          // by default: empty object (Swagger 2.0)
    components: {}            // by default: empty object (OpenAPI 3.x)
};

const outputFile = './swaggerSpecs.json';
const endpointsFiles = ['../presentation/routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);