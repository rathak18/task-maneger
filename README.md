# Task Manager

Task Manager is a Node.js application that allows users to manage tasks. It provides a RESTful API for creating, updating, deleting, and retrieving tasks, as well as obtaining task metrics based on their status.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MySQL server installed and running
- XAMPP or a similar environment for MySQL

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/your-username/task-manager.git
Navigate to the project directory.

bash
Copy code
cd task-manager
Install project dependencies.

bash
Copy code
npm install
Create the MySQL database and the 'tasks' table.

bash
Copy code
node createDatabaseTable.js
Start the Node.js application.

bash
Copy code
npm start
Access the application in your web browser at http://localhost:3000.

Usage
Creating a Task
To create a new task, make a POST request to /tasks with the following JSON data:

json
Copy code
{
  "title": "Task Title",
  "description": "Task Description",
  "status": "open"
}
Updating a Task
To update an existing task, make a PUT request to /tasks/:id, where :id is the task ID, with the updated JSON data.

Deleting a Task
To delete a task, make a DELETE request to /tasks/:id, where :id is the task ID.

Getting All Tasks
To retrieve all tasks, make a GET request to /tasks. You can also use pagination by providing page and limit query parameters.

Getting Task Metrics
To obtain task metrics, make a GET request to /metrics/status. This will return the counts of tasks based on their status (open, in progress, completed).

Contributing
Contributions are welcome. Please follow these guidelines:

Fork the repository.
Create a new branch with a descriptive name.
Make your changes and test them thoroughly.
Commit your changes with clear and concise messages.
Push your changes to your fork.
Create a pull request to the main repository.