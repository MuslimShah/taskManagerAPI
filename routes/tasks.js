const exprses = require('express');
const router = exprses.Router();
//controllers
const { getAllTasks, CreateTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')

// routes  ==>using method chainig
router.route('/').get(getAllTasks).post(CreateTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);



module.exports = router;