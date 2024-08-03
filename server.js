// server.js

const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Sample API",
      version: "1.0.0",
      description: "A sample API documentation",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
  },
  apis: ["./server.js"], // Files containing annotations for the Swagger doc
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * components:
 *   schemas:
 *     DataMap:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         data:
 *           type: array
 *           items:
 *             type: integer
 *
 * /api/dataMap:
 *   get:
 *     summary: Get sample data map
 *     responses:
 *       200:
 *         description: A data map object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DataMap'
 *
 * /api/data:
 *   get:
 *     summary: Get simple message
 *     responses:
 *       200:
 *         description: A simple message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

// Sample data
const dataMap = {
  message: "Hello from the backend!",
  data: [1, 2, 3, 4, 5],
};

const data = {
  message: "Data from backend!",
};

// API route
app.get("/api/dataMap", (req, res) => {
  res.json(dataMap);
});

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
