import express, { Request, Response } from 'express';
import connectDB from './config/database';
import { createNewUser, getById, deleteUser, updateUser } from './controller/user/user.controller';
import { createNewCategory, getByIdCategory } from './controller/category/category.controller'

const app = express();
const port = 3000;

connectDB()

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Servidor Rodando!');
});


app.post('/usuario', createNewUser);
app.get('/usuario/:id', getById);
app.delete('/usuario/:id', deleteUser);
app.patch('/usuario/:id', updateUser);

app.post('/category', createNewCategory);
app.get('/category/:id', getByIdCategory);



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

