const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must enter a value for task'],
        maxlength: [20, 'name cannot have more than 20 characters'],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('Tasks', TaskSchema);