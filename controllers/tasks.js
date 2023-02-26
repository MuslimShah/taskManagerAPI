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
     * when the user performs get request with the url api/v1/tasks/:id then
     * getTask controller will be invoked by the router and it 
     * will fetch single  document if exists from the database and 
     * return that document to the user in json format otherwise it will
     * return not found message.
     * incase of error catch block will be trigered 
     * which will show specific error to the user in json
     */
exports.getTask = async(req, res, next) => {
        try {
            const { id: taskId } = req.params;
            const task = await Task.findOne({ _id: taskId });
            if (!task) {
                return res.status(404).json({ msg: `task with ID:${taskId} does not exist` })
            }
            res.status(200).json({ task })

        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }
    /**
     * when the user performs patch request with the url api/v1/tasks/:id then
     * getTask controller will be invoked by the router and it 
     * will fetch single  document if exists from the database and 
     * update that document  otherwise it will
     * return not found message.
     * incase of error catch block will be trigered 
     * which will show specific error to the user in json
     */

exports.updateTask = async(req, res, next) => {
    try {
        const { id: taskId } = req.params;
        // const task = req.body;

        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res.status(404).json({ msg: `task with ID:${taskId} does not exist` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }


}

/**
 * when the user performs delete request with the url api/v1/tasks/:id then
 * deleteTask controller will be invoked by the router and it 
 * will fetch single  document if exists from the database and 
 * delete that document and will return it to the user otherwise it will
 * return not found message.
 * incase of error catch block will be trigered 
 * which will show specific error to the user in json
 */
exports.deleteTask = async(req, res, next) => {
    try {

        const { id: taskId } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `task with ID:${taskId} does not exist` })
        }
        res.status(200).json({ msg: `task deleted :`, task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}