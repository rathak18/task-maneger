const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Create a task
router.post('/tasks', taskController.createTask);

// Get all tasks (paginated)
router.get('/tasks', taskController.getAllTasks);

// Update a task by ID
router.put('/tasks/:id', taskController.updateTask);

// Delete a task by ID
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
