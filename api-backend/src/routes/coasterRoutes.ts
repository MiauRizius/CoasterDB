import { Router } from 'express';
import { getCoasters, getCoasterById, getCoastersByPark } from '../models/coaster.js';

const router = Router();

// Alle Achterbahnen anzeigen
router.get('/', async (req, res) => {
  try {
    const coasters = await getCoasters();
    res.json(coasters);
  } catch (err) {
    console.error('Fehler beim Abrufen der Achterbahnen:', err);
    res.status(500).json({ message: 'Fehler beim Abrufen der Achterbahnen' });
  }
});

// Alle Achterbahnen eines Parks anzeigen
router.get('/p/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const coasters = await getCoastersByPark(Number(id));
    res.json(coasters);
  } catch (err) {
    console.error('Fehler beim Abrufen der Achterbahnen:', err);
    res.status(500).json({ message: 'Fehler beim Abrufen der Achterbahnen' });
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
    
  }
});

export default router;