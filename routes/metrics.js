const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricsController');

// Get task metrics by status
router.get('/status', metricsController.getTaskMetricsByStatus);

module.exports = router;
