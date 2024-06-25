import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// Conectar ao MongoDB
const mongoURI = 'mongodb://localhost:28000/marketplace_inova'; // Substitua "mydatabase" pelo nome do seu banco de dados

mongoose.connect(mongoURI)
.then(() => {
  console.log('Conectado ao MongoDB');
})
.catch((err) => {
  console.error('Erro ao conectar ao MongoDB', err);
});

// Middleware para tratar JSON
app.use(express.json());

// Exemplo de rota
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Iniciar o servidor Express
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
