import express, { Request, Response } from 'express';
import connectDB from './config/database';

const app = express();
const port = 3000;

connectDB()

app.use(express.json());

// Exemplo de rota
app.get('/', (req: Request, res: Response) => {
  res.send('Servidor Rodando!');
});
app.post('/usuario', async (req: Request, res: Response) => {
 const {
  name,
  email,
  password,
  contact,
  role,
  whatsapp_contact
} = req.body;

await databaseUser.create({
  name,
  email,
  password,
  contact,
  role,
  whatsapp_contact
})

return res.status(201).send({   
  name,
  email,
  password,
  contact,
  role,
  whatsapp_contact 
});

})


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

