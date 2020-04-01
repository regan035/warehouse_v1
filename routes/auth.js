const express = require('express');
const router = express.Router();
const {signup, signin, signout} = require('../controllers/auth');

console.log("auth routes")

//validators
// const { runValidation } = require('../validators');
// const { userSignupValidator } = require('../validators/auth');

 //validator gave error
//router.post('/signup',userSignupValidator,runValidation,signup);
router.post('/signup',signup);
router.post('/signin', signin);
router.get('/signout', signout);

router.get('/test', (req, res)=>{
    console.log("test")
    res.send("test worked!")
})
// router.post('/signup',(req, res)=>{
//     console.log(req.body)
//     res.send(req.body)
// });

module.exports = router;
