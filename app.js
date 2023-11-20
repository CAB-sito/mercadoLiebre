const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');


app.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto 3000');
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve('./views/login.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve('./views/register.html'));
}); 

