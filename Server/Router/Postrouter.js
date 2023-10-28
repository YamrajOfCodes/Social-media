const router=require('express').Router();
const middleware=require("../Middleware/validtoken");
const Postcontroller=require('../Controller/Postcontroller');

router.get('/all',middleware,Postcontroller.allpostController);


module.exports=router;