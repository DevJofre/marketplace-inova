import { Request, Response } from 'express';
import { createUser, findUserById, deleteUserById, updateUserById } from '../../repository/user.repository';
import { createAddress, updateAddressByUserId } from '../../repository/address.repository';
import mongoose, { isObjectIdOrHexString } from 'mongoose';
import { getLoggedUser } from '../../utils/global.utils';

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { address, ...userData } = req.body;

    const newUser = await createUser(userData);

    address.userId = newUser._id;
    const newAddress = await createAddress(address);

    const response = {
      user: newUser,
      address: newAddress
    };

    res.status(201).json(response);
  } catch (error:any) {
    const errorMessage = error.message || 'Erro desconhecido ao procura Usuário';
    res.status(500).json({ message: 'Erro ao procura Usuário', error: errorMessage });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = getLoggedUser()
    if (!isObjectIdOrHexString(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const user = await findUserById(id.trim());
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error:any) {
    const errorMessage = error.message || 'Erro desconhecido ao cria Usuário';
    res.status(500).json({ message: 'Erro ao cria Usuário', error: errorMessage });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validar o ID
    if (!mongoose.Types.ObjectId.isValid(id.trim())) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const user = await deleteUserById(id.trim());
    if (user) {
      res.status(200).json({ message: 'Usuário e endereços deletados com sucesso' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error:any) {
    const errorMessage = error.message || 'Erro desconhecido ao deleta Usuário';
    res.status(500).json({ message: 'Erro ao deletar Usuário', error: errorMessage });
  }
};


export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { address, ...userData } = req.body;

    // Validar o ID
    if (!mongoose.Types.ObjectId.isValid(id.trim())) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const updatedUser = await updateUserById(id.trim(), userData);

    let updatedAddress = null;
    if (address) {
      updatedAddress = await updateAddressByUserId(id.trim(), address);
    }

    if (updatedUser) {
      res.status(200).json({ user: updatedUser, address: updatedAddress });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error:any) {
    const errorMessage = error.message || 'Erro desconhecido ao deleta Usuário';
    res.status(500).json({ message: 'Erro ao deletar Usuário', error: errorMessage });
  }
};
