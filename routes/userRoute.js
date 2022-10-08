const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/',userController.addUsers)
router.get('/',userController.getalluser)
router.get('/published',userController.publishedUser)
router.get('/:id',userController.singleUser)
router.delete('/:id',userController.deleteuser)
router.put('/:id',userController.updateUser)



module.exports = router