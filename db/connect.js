const mongoose = require('mongoose');

const connectionString = "mongodb+srv://muslimshah:alikhan@cluster0.urwzhpz.mongodb.net/tasks-manager?retryWrites=true&w=majority";

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
}
module.exports = connectDB;