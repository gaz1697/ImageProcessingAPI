import express from 'express';
import { promises as fsPromises } from 'fs';
import { processImages } from '../../utilities/processImages';
import { pathExist } from '../../utilities/caching';
const router = express.Router();

// images endpoint

router.get('/images', async (req: express.Request, res: express.Response): Promise<void> => {
  const filename = req.query.filename as string;
  const width = Number(req.query.width as unknown as number);
  const height = Number(req.query.height as unknown as number);
  const path = './images/' + filename + '.jpg';
  // validating parameters
  let errorMessage = "Couldn't process the image as the following parameters are incorrect: ";
  let isError = false;
  let params: { bool: boolean; name: string }[] = [
    { bool: Number.isNaN(height), name: 'height' },
    { bool: Number.isNaN(width), name: 'width' },
    { bool: !(await pathExist(path)), name: 'file name' },
  ];
  params.forEach((param) => {
    if (param.bool) {
      errorMessage += param.name + ' ';
      isError = true;
    }
  });
  if (isError) {
    res.send(errorMessage);
  }
  // processing the request
  else {
    try {
      const thumpImage = await processImages(filename, height, width);
      res.setHeader('Content-Type', 'image/jpeg');
      res.send(thumpImage);
    } catch (error) {
      res.send(errorMessage);
    }
  }
});

export default router;
