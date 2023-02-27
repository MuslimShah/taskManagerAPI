/**************************************************************
 *              IT IS A SIMPLE TASK MANAGER API               *  
 * WHERE USER CAN SIMPLY ADD TASKS                            *  
 * DELETES TASKS                                              *  
 * UPDATE TASKS                                               *  
 * GET ALL TASKS                                              *  
 * GET SINGLE TASKS                                           *              
 * USERS CAN REQUEST USING THE GIVEN ROUTES                   *                                                  
 * app.get('api/v1/tasks')         -get all tasks             *
 * app.post('api/v1/tasks')        -post a task               *  
 * app.get('api/v1/task/:id')      -gets a single task        *  
 * app.patch('api/v1/tasks/:id')   -update a single task      *  
 * app.delete('api/v1/tasks/:id')  -deletes a single task     *  
 * ************************************************************/
const express = require('express');
const connectDB = require('./db/connect')
const pageNotFound = require('./util/pageNotFound');
const errorHandler = require('./util/errorHandler');
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

//incase of incorrect request
app.use(pageNotFound)
    //handles errors
app.use(errorHandler)
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => console.log(`connected to port :${PORT}`))
    } catch (err) {
        console.log(`cannot connect :error ${err}`);
    }
}
start()