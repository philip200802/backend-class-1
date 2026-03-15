const express = require('express');
const app = express();
const port = 2008
// const ejs = require('ejs')
const Name = 'Adegboyega Philip'

app.set('view engine', 'ejs');
app.get ('/home', (req, res)=>{
res.send( 'Welcome to the home page')
})
app.get('/about', (req,res)=> {
    res.send("We are still working on this page")
})
app.get ('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html') 
}) 
app.get('/seen',((req,res)=>{
    res.render('index', {name:Name})
}))
app.listen(port, () =>{
    console.log(`Your app is working on port ${port}`);
    
    console.log(`Server is running on port ${port}`);
    
})