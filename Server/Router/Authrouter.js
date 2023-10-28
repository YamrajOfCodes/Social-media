const router=require('express').Router();
const Authcontroller=require('../Controller/Authcontroller')

router.post('/login',Authcontroller.Logincontroller)
router.post('/signup',Authcontroller.Signupcontroller)

module.exports=router;