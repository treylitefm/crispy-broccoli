(function() {
    var mongoose = require('mongoose')
    var Question = mongoose.model('Question')

    function AnswersController() {
        function _create(req, res) {
            Question.findOne({_id:req.params.id}, function(err, question) {
                question.answers.push(req.body)
                question.save(function(err) {
                    if (err) { res.json(err) } else {
                        Question.find({}, function(err, docs) {
                            res.json(docs)
                        })
                    }
                })
            })        
        }

        function _fetchQPop(req, res) {
            Question.findOne({_id:req.params.id}).populate('answers.user').exec(function(err, questions) {
                res.json(questions)
            })
        }

        function _like(req, res) {
            Question.findOne({_id:req.params.qid}, function(err, doc) {
                doc.answers.id(req.params.aid).likes++
                doc.save(function(err, docc) {
                    Question.populate(docc, 'answers.user', function(err, doccc) {
                        res.json(doccc)
                    })
                })
            })
        }

        return {
            create: _create,
            fetchQPop: _fetchQPop,
            like: _like
        }
    }


    module.exports = new AnswersController()
})()
