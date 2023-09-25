// taskTable.js
const db = require('./db');

// Function to create the 'tasks' table if it doesn't exist
async function createTasksTable() {
  try {
    const connection = await db.getConnection();
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        status ENUM('open', 'inprogress', 'completed') NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    connection.release();
    console.log('Table "tasks" created or already exists');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

module.exports = {
  createTasksTable,
};
