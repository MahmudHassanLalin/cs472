const express = require('express');
const app = express();
const session = require('express-session');
app.set('view engine', 'jade');
app.use(session({
    secret: 'salt for cookie signing'
}));
app.listen(5500, () => {
    console.log("Server is running at 3000 port");
});
app.use((req, res, next) => {
    if (!req.session.quiz) {
        req.session.quiz = {
            pointer: 0,
            score: 0
        }
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/quiz', (req, res) => {
    var quiz = req.session.quiz;
    if (parseInt(req.body.answer) == answers[parseInt(quiz.pointer)]) {
        req.session.quiz.score = parseInt(quiz.score) + 1;
    }
    req.session.quiz.pointer = parseInt(quiz.pointer) + 1;
    if (req.session.quiz.pointer < questions.length)
        res.redirect('/');
    else
        res.redirect('/final-result');
});
app.use('/final-result', (req, res) => {
    let pointer = 0;
    let score = 0;
    if(req.session.quiz)
    {
    pointer = req.session.quiz.pointer;
    score = req.session.quiz.score;
    }
    console.log('final result');
    res.render('result.pug', { totalQuiz: questions.length, score: score });
});
app.use('/', (req, res) => {
    let pointer = 0;
    let score = 0;
    //if(req.session.quiz)
    //{
    pointer = req.session.quiz.pointer;
    score = req.session.quiz.score;
    //}
    console.log('get' + req.session.quiz);
    res.render('quize.pug', { quiz: String(questions[pointer]), score: score });
});
const questions = [
    "3,1,4,1,5",
    "1,1,2,3,5",
    "1,4,9,16,25",
    "2,3,5,7,11",
    "1,2,4,8,16"
];
const answers = [9, 8, 36, 13, 32];