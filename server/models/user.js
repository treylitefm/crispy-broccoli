(function() {
    var mongoose = require('mongoose')

    var UserSchema = new mongoose.Schema({
        name: {
            type: String,
            maxlength: 20,
            required: true,
            trim: true
        }
    }, {timestamps: true})
    
    mongoose.model('User', UserSchema)
})()
