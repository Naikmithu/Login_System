var express=require('express');
var router=express.Router();

const credential={
    email:"snaikmithun15@gmail.com",
    password:"7795366275"

}


//login

router.post('/login',(req,res)=>{
    if(req.body.email==credential.email && req.body.password==credential.password){
        req.session.user=req.body.email
        res.redirect('/route/dashboard') 
    }else{
        res.send('Invalid');
        }
})

router.post('/regis',(req,res)=>{
   
    
    res.render('register');
})

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    credential.email = email;
    credential.password = password;
  
    // Redirect the user back to the dashboard
    res.redirect('/route/dashboard');
  });
  
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send('Unauthorized user')
    }
})



router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base',{title:"Express",logout:"logout Successfully...!!"})
        }
    })
})


module.exports=router