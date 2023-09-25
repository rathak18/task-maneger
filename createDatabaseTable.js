// createDatabaseTable.js
const taskTable = require('./taskTable');

// Create the 'tasks' table
taskTable.createTasksTable()
  .then(() => {
    console.log('Table "tasks" setup complete');
  })
  .catch((error) => {
    console.error('Error setting up table:', error);
  });
