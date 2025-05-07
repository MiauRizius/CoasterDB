import express from 'express';
import cors from 'cors';
import pathRoutes from './routes/parkRoutes.js';
import coasterRoutes from './routes/coasterRoutes.js';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

// Middleware für JSON-Anfragen
app.use(express.json());

app.use(cors());

// Routen hinzufügen
app.use('/api/parks', pathRoutes);
app.use('/api/coasters', coasterRoutes);

app.get('/api/filesize', (req, res) => {
  const dbPath = path.join('./database.db');

  fs.stat(dbPath, (err, stats) => {
    if (err) {
      console.error('Fehler beim Abrufen der Dateigröße:', err);
      return res.status(500).json({ error: 'Dateigröße konnte nicht ermittelt werden' });
    }

    res.json({
      sizeBytes: stats.size,
      sizeMB: (stats.size / (1024 * 1024)).toFixed(2)
    });
  });
});

// Start des Servers
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});

export default app;