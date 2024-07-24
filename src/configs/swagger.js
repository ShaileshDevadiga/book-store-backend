import swaggerJsdoc from 'swagger-jsdoc';

const swaggerJsdocOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Book Store Express API with Swagger",
      version: "1.0.0",
      description: "This is a simple CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "Shailesh Devadiga",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerUISpecs = swaggerJsdoc(swaggerJsdocOptions);