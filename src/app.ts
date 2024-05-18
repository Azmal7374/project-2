import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

//parseer
app.use(express.json());
app.use(cors);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
// console.log(process.cwd())
//c:\level_2\project-2\.env
