const express = require("express");
const router = express.Router();
const productService = require('./services/productService');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - image
 *         - price
 *       properties:
 *        name:
 *           type: string
 *           description: The product name
 *        image:
 *           type: string
 *           description: The product image url
 *        price:
 *           type: object
 *           required:
 *            - symbol
 *            - amount
 *            - fractionDigits
 *           properties:
 *            symbol:
 *              type: string
 *              description: Currency symbol
 *            amount:
 *              type: string
 *              description: Ammount
 *            fractionDigits:
 *              type: number
 *              description: Digits number
 *       example:
 *         name: Classic Cambridge 40 Rose Gold
 *         price:
 *            symbol: €
 *            amount: "159"
 *            fractionDigits: 2
 *         image: https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-cambridge-rg_1.png
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

router.get("/", async (req, res) => {
  productService.getProductWithImages().then((result) => {
    res.send(result);
  })
});

module.exports = router;