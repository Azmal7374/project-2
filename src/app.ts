import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application,} from 'express';
import golbalErrorHandelers from './app/middlewares/golbalErrorHandelers';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin:'http://localhost:5173', credentials: true}));

// application routes
app.use('/api/v1', router);

// const test = async(req: Request, res: Response) => {

//   // Promise.reject()

//   const a = 10;
//   res.send(a);
// };

// app.get('/', test);

app.use(golbalErrorHandelers);

//not found
app.use(notFound);

export default app;
