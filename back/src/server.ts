
import express from 'express';
import { mongoose } from './config/database';
import { router } from './routes/taskRoutes';
import { env } from 'process';
const app = express();
const port = process.env.PORT || 3000;

const db =mongoose;
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});