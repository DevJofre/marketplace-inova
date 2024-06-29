import { Request, Response } from 'express';
import { createUser, findUserById } from '../../repository/user.repository';
import { createAddress } from '../../repository/address.repository';

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { address, ...userData } = req.body;

    const newUser = await createUser(userData);

    address.user = newUser;
    const newAddress = await createAddress(address);

    const response = {
      user: newUser,
      address: newAddress
    }

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar Usuário', error });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar Usuário', error });
  }
};
