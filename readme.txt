app.get('/',(req,res)=>{
   res.render('base')
})


app.get('/user',(req,res)=>{
    const username=req.session.username;
    res.send(`Username:${username}`)
})
//load static asset

app.use('/static',express.static(path.join(__dirname,'public')));

app.use('/asset',express.static(path.join(__dirname,'public/asset')))