const Task = require('../models/Tasks');

/**
 * when the user request with the url api/v1/tasks then
 * getAllTasks controller will be invoked by the router and it 
 * will fetch all the documents from the database and 
 * return those documents to the user in json format
 * incase of error catch block will be trigered 
 * which will show specific error to the user in json
 */

exports.getAllTasks = async(req, res, next) => {
        try {
            const tasks = await Task.find({});
            res.status(200).json({ tasks })

        } catch (error) {
            res.status(500).json({ msg: error })

        }

    }
    /**
     * when the user perform a post request with the route
     * api/v1/tasks then CreateTask will be invoked by the
     * router and the data which is in the request body 
     * will be stored in the database .... offcourse
     * the data will be checked for validation before
     * storing it
     * incase of error catch block will be trigered 
     * which will show specific error to the user in json
     */
exports.CreateTask = async(req, res, next) => {
        try {
            const task = await Task.create(req.body);
            res.status(201).json({ task });
        } catch (err) {
            res.status(500).json({ msg: err })
        }
    }
    /**
     * when the user request with the url api/v1/tasks then
     * getTask controller will be invoked by the router and it 
     * will fetch single  document from the database and 
     * return that document to the user in json format
     * incase of error catch block will be trigered 
     * which will show specific error to the user in json
     */
exports.getTask = async(req, res, next) => {
    try {
        const taskId = req.params.id;
        const task = await Task.find({ _id: taskId });
        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
exports.updateTask = (req, res, next) => {
    res.send('updateTask')
}
exports.deleteTask = (req, res, next) => {
    res.send('deleteTask')
}