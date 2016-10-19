(function() {
    var mongoose = require('mongoose')

    var AnswerSchema = new mongoose.Schema({
        answer: {
            type: String,
            minlength: 5,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: false
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        likes: {
            type: Number,
            default: 0
        }
    })

    var QuestionSchema = new mongoose.Schema({
        question: {
            type: String,
            minlength: 10,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: false,
            trim: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        answers: [AnswerSchema]
    }, {timestamps: true})

    mongoose.model('Answer', AnswerSchema)
    mongoose.model('Question', QuestionSchema)
})()
