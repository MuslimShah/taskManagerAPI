const mongoose = require('mongoose');

/*
in the following section of code schema for the database
is created which shows how the data will be represented
in the database
 ------------------------------------
|   id   |  name    |   completed   |
------------------------------------
|   abc |   xyz    |    false      |
------------------------------------

this model is then exported... the model contains model name and 
schema for the model

*/

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