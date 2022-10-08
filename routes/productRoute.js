const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.post('/',productController.addProducts)
router.get('/',productController.getallproduct)
router.get('/published',productController.publishedProduct)
router.get('/:id',productController.singleProduct)
router.delete('/:id',productController.deleteproduct)
router.put('/:id',productController.updateProduct)





module.exports= router