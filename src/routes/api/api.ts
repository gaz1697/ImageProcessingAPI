import express from 'express';
import { promises as fsPromises } from 'fs';
import { processImages } from '../../utilities/processImages';
const router = express.Router();

// images endpoint
router.get('/images', async (req, res): Promise<void> => {
  const filename = req.query.filename as string;
  const width = Number(req.query.width as unknown as number);
  const height = Number(req.query.height as unknown as number);
  try {
    const thumpPath = await processImages(filename, height, width);
    res.sendFile(thumpPath);
  } catch (error) {
    console.log(error);
  }
});

export default router;
