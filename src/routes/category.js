const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/', categoryController.index);
router.get('/add', categoryController.add)




 
  //Rutas exigidas para la creación del CRUD
  /*.get("/category", categoryController.add);*/
  /*.post("/category/create", upload.single('image'), create)
 
  .put("/category/update/:id", upload.single('image'), update)
 
  .delete("/category/delete/:id", destroy)*/
  

 


module.exports = router;
