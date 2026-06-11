import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/index.js';
import { connectToDatabase } from './config/database.js';

const app = express();
const PORT = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'OctoFit Tracker backend is running.',
    baseUrl,
  });
});

app.use('/api', apiRoutes);

await connectToDatabase();
console.log('MongoDB connected');

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
  console.log(`API base URL: ${baseUrl}`);
});
