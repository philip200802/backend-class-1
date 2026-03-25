const express = require('express');
const app = express();
const port = 2008
// const ejs = require('ejs')
const Name = 'Adegboyega Philip'
const student = [
    {
        id: 1, studentName: 'Philip', level: 200, department: 'computer science',
    },
    {
        id: 2, studentName: 'Adetola', level: 300, department: 'Economics',
    }, {
        id: 3, studentName: 'Favour', level: 100, department: 'Nursing',
    }, {
        id: 4, studentName: 'Enoch', level: 500, department: 'computer science',
    },{
        id: 5, studentName:'Amioluwa', level: 200, department: 'Food Science',
    },{
        id: 6, studentName:'Pricilla', level: 500, department: 'Medicine',
    }
]
app.set('view engine', 'ejs');
app.get('/dashboard', ((req,res)=>{
    res.send(student)
}))
app.get('/home', (req, res) => {
    res.send('Welcome to the home page')
})
app.get('/about', (req, res) => {
    res.send("We are still working on this page")
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/seen', ((req, res) => {
    res.render('index', { name: Name })
}))
app.get('/signin', (req, res) => {
    res.render('signin')
})
app.get('/signup', (req,res) => {
    res.render('signup')
})
app.listen(port, () => {
    console.log(`Your app is working on port ${port}`);

    console.log(`Server is running on port ${port}`);

})