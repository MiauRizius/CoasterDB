import { Router } from 'express';
import { getCoasters, getCoasterById } from '../models/coaster';

const router = Router();

// Alle Achterbahnen anzeigen
router.get('/', async (req, res) => {
  try {
    const coasters = await getCoasters();
    res.json(coasters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Achterbahn nach ID anzeigen
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const coaster = await getCoasterById(Number(id));
    if (coaster) {
      res.json(coaster);
    } else {
      res.status(404).json({ message: 'Achterbahn nicht gefunden' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;