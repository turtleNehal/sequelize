const { products } = require('../models')
const db = require('../models')

const Products = db.products

//create

const addProducts = (async (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "please insert title"
        })
        return
    }

    const productInfo = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published
    }
    try {
        const product = await Products.create(productInfo)
        res.status(200).send(product)
    } catch (err) {
        res.status(500).send({
            message: err.message || "error accured"
        })
    }

})

//get all product
const getallproduct = (async (req, res) => {
    const product = await Products.findAll({})
    res.status(200).send(product)
})

// get single product
const singleProduct = (async (req, res) => {
    let id = req.params.id
    const product = await Products.findOne({ where: { id: id } })
    res.status(200).send(product)
})


//update 
const updateProduct = (async (req, res) => {
    id = req.params.id
    const product = await Products.update(req.body, { where: { id: id } })
    res.status(200).send(product)
})

//delete Product
const deleteproduct = (async (req, res) => {
    id = req.params.id
    await products.destroy({ where: { id: id } })
    res.status(200).send("product is deleted")
})

const publishedProduct = (async (req, res) => {
    const product = await Products.findAll({ where: { published: true } })
    res.status(200).send(product)
})
module.exports = {
    addProducts,
    getallproduct,
    updateProduct,
    deleteproduct,
    singleProduct,
    publishedProduct

}