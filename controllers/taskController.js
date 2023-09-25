const db = require('../db');

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, status } = req.body;
  
  try {
    const connection = await db.getConnection();
    const [result] = await connection.execute(
      'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
      [title, description, status]
    );
    connection.release();

    const taskId = result.insertId;
    res.status(201).json({ id: taskId, message: 'Task created successfully' });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all tasks (paginated)
exports.getAllTasks = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const offset = (page - 1) * limit;

  try {
    const connection = await db.getConnection();
    const [results] = await connection.execute(
      'SELECT * FROM tasks LIMIT ? OFFSET ?',
      [limit, offset]
    );
    connection.release();

    res.json(results);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a task by ID
exports.updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { title, description, status } = req.body;

  try {
    const connection = await db.getConnection();
    const [result] = await connection.execute(
      'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
      [title, description, status, taskId]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json({ message: 'Task updated successfully' });
    }

    connection.release();
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const connection = await db.getConnection();
    const [result] = await connection.execute(
      'DELETE FROM tasks WHERE id = ?',
      [taskId]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json({ message: 'Task deleted successfully' });
    }

    connection.release();
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
