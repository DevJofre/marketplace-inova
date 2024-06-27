import { Request, Response } from 'express';
import { createAddress, findAddressById } from '../../repository/address.repository';


export const createNewAddress = async (req: Request, res: Response) => {
  try {
    const addressData = req.body;
    const newAddress = await createAddress(addressData);
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar endereço', error });
  }
};

export const getAddressById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const address = await findAddressById(id);
    if (address) {
      res.status(200).json(address);
    } else {
      res.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar endereço', error });
  }
};

