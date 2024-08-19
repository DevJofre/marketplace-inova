import express, { Request, Response } from 'express';
import 'express-async-errors';
import connectDB from './config/database';
import { createNewUser, getById, deleteUser, updateUser } from './controller/user/user.controller';
import { createNewCategory, getByIdCategory, deleteCategory, updateCategory } from './controller/category/category.controller';
import {loginUser, logoutUser} from './controller/authentication/authentication.controller'
import cors from 'cors';
import AuthMiddleware from './middleware/auth';
import { errorHandlerMiddleware } from './middleware/error.handler.middleware';

const app = express();
const port = 8080;

connectDB()

app.use(express.json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
  res.send('Servidor Rodando!');
});

app.post('/login', loginUser) ;
app.get('/logout', AuthMiddleware, logoutUser)

app.post('/usuario', createNewUser);
app.get('/usuario/get-info', AuthMiddleware, getById);
app.delete('/usuario/:id', AuthMiddleware, deleteUser);
app.patch('/usuario/:id', updateUser);

app.post('/category', createNewCategory);
app.get('/category/:id', getByIdCategory);
app.delete('/category/:id', deleteCategory);
app.patch('/category/:id', updateCategory);

app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
