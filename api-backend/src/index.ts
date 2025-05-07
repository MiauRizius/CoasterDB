import express from 'express';
import pathRoutes from './routes/parkRoutes.js';
import coasterRoutes from './routes/coasterRoutes.js';

const app = express();
const port = 3000;

// Middleware für JSON-Anfragen
app.use(express.json());

// Routen hinzufügen
app.use('/api/parks', pathRoutes);
app.use('/api/coasters', coasterRoutes);

// Start des Servers
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});

export default app;