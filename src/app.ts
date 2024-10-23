import express from 'express';
import apiRoutes from './routes/api/api';
import { removeCache } from './utilities/caching';
const app = express();
const port = 3000;

app.listen(port, (): void => {
  console.log(`listening on port ${port}`);
});

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Image Processing api use endpoint /api/images to process images');
});
app.use('/api', apiRoutes);

process.on('beforeExit', async (): Promise<void> => {
  await removeCache();
  process.exit(0);
});
process.on('SIGINT', async (): Promise<void> => {
  await removeCache();
  process.exit(0);
});

export default app;
