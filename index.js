const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3000;

app.use(express.json());

// Example mock data for /api/metrics
const mockMetrics = {
  accuracy: 0.85,
  precision: 0.78,
  recall: 0.92
};

// Example mock data for /api/predictions
const mockPredictions = [
  { input: [1, 2, 3], prediction: 0, actual: 1 },
  { input: [4, 5, 6], prediction: 1, actual: 1 },
  // Add more mock prediction data
];

// Endpoint for metrics
app.get('/api/metrics', (req, res) => {
  console.log(mockMetrics);
  res.json(mockMetrics);
});

// Endpoint for predictions
app.get('/api/predictions', (req, res) => {
  const pythonProcess = spawn('python', ['ai_predictions.py']);
  const newPredictions = [];

  pythonProcess.stdout.on('data', (data) => {
    const [prediction, actual] = data.toString().split(',');
    const mockPrediction = { input: [], prediction: +prediction, actual: +actual };
    newPredictions.push(mockPrediction);
  });

  pythonProcess.on('close', () => {
    res.json([...mockPredictions, ...newPredictions]);
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
