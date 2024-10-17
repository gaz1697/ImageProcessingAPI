import express from 'express';
import apiRoutes from './routes/api/api';
import { removeCache } from './utilities/caching';
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.use('/api', apiRoutes);

process.on('beforeExit', removeCache);
process.on('SIGINT', removeCache);
