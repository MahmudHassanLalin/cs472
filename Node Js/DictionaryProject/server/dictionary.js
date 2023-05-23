var express = require('express');
var word = require('./word');
var path = require('path');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.listen(3000, () => {
    console.log('server is running');
});
app.use((req, res, next) => {
    console.log("This is always run");
    next();
});
app.get('/word', async(req, res) => {
    var result=await word.searchWord(req.query.word);
    res.send(result);
});
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'dict.html'));
});