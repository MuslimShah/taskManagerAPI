const exprses = require('express');
const router = exprses.Router();
//controllers
const { getAllTasks } = require('../controllers/tasks')

// router.get('/', taskControllers.getTest)
router.route('/').get(getAllTasks);


module.exports = router;