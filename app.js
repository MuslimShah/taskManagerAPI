const express = require('express');
const connectDB = require('./db/connect')
const pageNotFound = require('./util/pageNotFound');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
//ENV
require('dotenv').config();
//routes
const tasks = require('./routes/tasks');
//middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
//routes middleware
app.use('/api/v1/tasks', tasks);
/**
 * app.get('api/v1/tasks')         -get all tasks
 * app.post('api/v1/tasks')        -post a task 
 * app.get('api/v1/task/:id')      -gets a single task
 * app.patch('api/v1/tasks/:id')   -update a single task
 * app.delete('api/v1/tasks/:id')  -deletes a single task
 * */
app.use(pageNotFound)
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => console.log(`connected to port :${PORT}`))
    } catch (err) {
        console.log(`cannot connect :error ${err}`);
    }
}
start()