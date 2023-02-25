const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


//routes
app.get('/hello', (req, res) => {
        res.status(200).send('hello task manager api')
    })
    /**
     * app.get('api/v1/tasks')         -get all tasks
     * app.post('api/v1/tasks')        -post a task 
     * app.get('api/v1/task/:id')      -gets a single task
     * app.patch('api/v1/tasks/:id')   -update a single task
     * app.delete('api/v1/tasks/:id')  -deletes a single task
     * */


app.listen(PORT, () => console.log(`connected to port :${PORT}`))