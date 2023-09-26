const db = require('../db');

// Get task metrics by status
exports.getTaskMetricsByStatus = async (req, res) => {
  try {
    const connection = await db.getConnection();

    const [openTasks] = await connection.execute(
      'SELECT COUNT(*) as count FROM tasks WHERE status = ?',
      ['open']
    );

    const [inProgressTasks] = await connection.execute(
      'SELECT COUNT(*) as count FROM tasks WHERE status = ?',
      ['inprogress']
    );

    const [completedTasks] = await connection.execute(
      'SELECT COUNT(*) as count FROM tasks WHERE status = ?',
      ['completed']
    );

    connection.release();

    const metrics = {
      open_tasks: openTasks[0].count,
      inprogress_tasks: inProgressTasks[0].count,
      completed_tasks: completedTasks[0].count,
    };

    // Include the request body data in the response
    const requestBodyData = req.body;

    // Combine the metrics with the request body data
    const response = {
      date: requestBodyData.date,
      metrics: metrics,
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching task metrics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
