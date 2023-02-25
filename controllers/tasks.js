exports.getAllTasks = (req, res, next) => {
    res.send('hello testing mike')
}
exports.CreateTask = (req, res, next) => {
    res.json(req.body);
}
exports.getTask = (req, res, next) => {
    res.send('getTask :' + req.params.id)
}
exports.updateTask = (req, res, next) => {
    res.send('updateTask')
}
exports.deleteTask = (req, res, next) => {
    res.send('deleteTask')
}