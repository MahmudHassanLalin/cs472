const express = require('express');
const addmod = require('./addmod.js');
const path = require('path');
const app = express();
app.listen(3000, () => {
    console.log("Server is running at 3000 port");
});
app.use((req, res, next) => {
    console.log("This is always run");
    next();
});
app.use('/add',(req,res,next)=>{
    addmod.add(req,res,req.query);
});
app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.sendFile(path.join(__dirname, 'views', 'SimpleAdder.html'));
});
