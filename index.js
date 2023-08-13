const express = require('express');
const app = express();

const mockMetrics = {
  accuracy: 0.85,
  precision: 0.78,
  recall: 0.92
};

const mockPredictions = [
  { input: [1, 2, 3], prediction: 0, actual: 1 },
  { input: [4, 5, 6], prediction: 1, actual: 1 },
  // Add more mock prediction data
];

app.get('/api/metrics', (req, res) => {
  res.json(mockMetrics);
});

app.get('/api/predictions', (req, res) => {
  res.json(mockPredictions);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
