(function(app) {
    var rest = require('../controllers/rest.js')
    users = rest('User') 
    questions = rest('Question')

    var answers = require('../controllers/answers.js')


    module.exports = function(app) {
        app.post('/register', users.createFetchOne)
        app.get('/users/:id', users.fetchOne)
        app.get('/questions', questions.fetch)
        app.get('/questions/:id', answers.fetchQPop)
        app.post('/questions', questions.create)

        app.post('/questions/:id/answers', answers.create)
        app.post('/questions/:qid/answers/:aid/like', answers.like)
    }

})()
