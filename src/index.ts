import express, {Express, Request, Response} from 'express';
import userRouter  from './router/user.js';

const app: Express = express();
const PORT = 8000;

// De esta forma vamos a decirle que pueda leer el json que envia el cliente
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World, from express!');
});

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
