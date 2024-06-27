import { Request, Response } from 'express';
import { createUser, findUserById } from '../../repository/user.repository';


export const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar Usuario', error });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuario não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar Usuario', error });
  }
};
