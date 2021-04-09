const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const productsRouter = require("./routes/products");

const PORT = process.env.PORT || 3001;

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:3001",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use(cors());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(morgan("dev"));

app.use("/products", productsRouter)

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));