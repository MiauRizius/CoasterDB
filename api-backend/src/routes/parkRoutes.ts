import { Router } from 'express';
import { getParks, getParkById } from '../models/park';

const router = Router();

// Alle Parks anzeigen
router.get('/', async (req, res) => {
  try {
    const parks = await getParks();
    res.json(parks);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
    res.status(500).json({ error: err.message });
  }
});

export default router;