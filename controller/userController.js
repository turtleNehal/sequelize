const { users } = require('../models')
const db = require('../models')

const Users = db.users

//create

const addUsers = (async (req, res) => {
    if (!req.body.first_name) {
        res.status(400).send({
            message: "please insert first name"
        })
        return
    }

    const userInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        country: req.body.country,
        password: req.body.password,
        published: req.body.published
    }
    try {
        const user = await Users.create(userInfo)
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send({
            message: err.message || "error accured"
        })
    }

})

//get all product
const getalluser = (async (req, res) => {
    const user = await Users.findAll({})
    res.status(200).send(user)
})

// get single product
const singleUser = (async (req, res) => {
    let id = req.params.id
    const user = await Users.findOne({ where: { id: id } })
    res.status(200).send(user)
})


//update 
const updateUser = (async (req, res) => {
    id = req.params.id
    const user = await Users.update(req.body, { where: { id: id } })
    res.status(200).send(user)
})

//delete Product
const deleteuser = (async (req, res) => {
    id = req.params.id
    await Users.destroy({ where: { id: id } })
    res.status(200).send("user is deleted")
})

const publishedUser = (async (req, res) => {
    const user = await Users.findAll({ where: { published: true } })
    res.status(200).send(user)
})
module.exports = {
    addUsers,
    getalluser,
    singleUser,
    updateUser,
    deleteuser,
    publishedUser
}