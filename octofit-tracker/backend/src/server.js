const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker backend is running.' });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Backend listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
