const Task = require('../models/Tasks');
const asyncWrapper = require('../util/asyncWrapper')
const { createCustomError } = require('../errors/custom-error')

/**
 * when the user request with the url api/v1/tasks then
 * getAllTasks controller will be invoked by the router and it 
 * will fetch all the documents from the database and 
 * return those documents to the user in json format
 * incase of error catch block will be trigered 
 * which will show specific error to the user in json
 */

/*********** REASON WHY I USED ASYNCWRAPPER MIDDLEWARE**************
 *                                                                 *
 * ASYNCWRAPPER JUST TAKE MY ASYNC CONTROLLER AS AN ARGUMENT AND   *
 * RETURN ANOTHER  ASYNC FUNCTION IN WHICH IT ADDS TRYCATCH TO MY  *
 * EXISTING FUNCTION                                               *
 *                                                                 *
 * *****************************************************************
 */

exports.getAllTasks = asyncWrapper(async(req, res, next) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks, amount: tasks.length });
});
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
exports.CreateTask = asyncWrapper(async(req, res, next) => {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    })
    /**
     * when the user performs get request with the url api/v1/tasks/:id then
     * getTask controller will be invoked by the router and it 
     * will fetch single  document if exists from the database and 
     * return that document to the user in json format otherwise it will
     * return not found message.
     * incase of error catch block will be trigered 
     * which will show specific error to the user in json
     */
exports.getTask = asyncWrapper(async(req, res, next) => {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return next(createCustomError(`task with ID:${taskId} does not exist`, 404))

        }
        res.status(200).json({ task })
    })
    /**
     * when the user performs patch request with the url api/v1/tasks/:id then
     * getTask controller will be invoked by the router and it 
     * will fetch single  document if exists from the database and 
     * update that document  otherwise it will
     * return not found message.
     * incase of error catch block will be trigered 
     * which will show specific error to the user in json
     */

exports.updateTask = asyncWrapper(async(req, res, next) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(createCustomError(`task with ID:${taskId} does not exist`, 404))

    }
    res.status(200).json({ task })
})

/**
 * when the user performs delete request with the url api/v1/tasks/:id then
 * deleteTask controller will be invoked by the router and it 
 * will fetch single  document if exists from the database and 
 * delete that document and will return it to the user otherwise it will
 * return not found message.
 * incase of error catch block will be trigered 
 * which will show specific error to the user in json
 */
exports.deleteTask = asyncWrapper(async(req, res, next) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
        return next(createCustomError(`task with ID:${taskId} does not exist`, 404))

    }
    res.status(200).json({ msg: `task deleted :`, task })
})