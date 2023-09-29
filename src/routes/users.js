const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const loginValidator = require("../validations/loginValidator");
const userCheck = require('../middlewares/userCheck');
const upload = require('../middlewares/upload');
const loginProcess = require('../controllers/users/loginProcess');
const notUserCheck = require('../middlewares/notUserCheck');
const {arrayValidaciones,validateCreateForm } = require('../middlewares/validacionesRegister');
const { arrayValidationUpdate } = require('../middlewares/validationUpdate');


/* GET users listing. */
router.get('/login', loginProcess.showLoginPage);
router.post('/login', loginProcess.processLogin);
router.get("/register",notUserCheck, usersController.register)
router.post('/registerOk', arrayValidaciones,validateCreateForm,usersController.newUser);
router.get('/logOut', usersController.logOut);
router.get('/profile/:id', userCheck, usersController.profile);
router.put('/update/:id',upload.single('image'), arrayValidationUpdate, usersController.update);

module.exports = router;