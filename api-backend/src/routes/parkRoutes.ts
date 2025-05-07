import { Router } from 'express';
import { getParks, getParkById } from '../models/park.js';

const router = Router();

// Alle Parks anzeigen
router.get('/', async (req, res) => {
  try {
    const parks = await getParks();
    res.json(parks);
  } catch (err) {
    console.error('Fehler beim Abrufen der Parks:', err);
    res.status(500).json({ message: 'Fehler beim Abrufen der Parks' });
  }
});

// Park nach ID anzeigen
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const park = await getParkById(Number(id));
    if (park) {
      res.json(park);
    } else {
      res.status(404).json({ message: 'Park nicht gefunden' });
    }
  } catch (err) {
    console.error('Fehler beim Abrufen des Parks:', err);
    res.status(500).json({ message: 'Fehler beim Abrufen des Parks' });
  }
});

export default router;