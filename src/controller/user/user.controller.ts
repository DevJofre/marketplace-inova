import { Request, Response } from 'express';
import { createUser, findUserById } from '../../repository/user.repository';
import { createAddress } from '../../repository/address.repository';
import mongoose from 'mongoose';

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { address, ...userData } = req.body;

    const newUser = await createUser(userData);

    address.user = newUser._id;
    const newAddress = await createAddress(address);

    const response = {
      user: newUser,
      address: newAddress
    }

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar Usuário'});
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validar o ID
    if (!mongoose.Types.ObjectId.isValid(id.trim())) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const user = await findUserById(id.trim());
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar Usuário' });
  }
};
