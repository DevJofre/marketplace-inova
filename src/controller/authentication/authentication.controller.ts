import { Request, Response } from 'express';
import { findUserByEmail, findUserByToken, validateUserPassword } from '../../repository/authentication.repository';
import { generateJwtToken } from '../../utils/jwt.utils';
import { updateUserById } from '../../repository/user.repository';


export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const isPasswordValid = await validateUserPassword(user, password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    const token = generateJwtToken(String(user._id));

    user.token = token;
    await user.save();

    res.status(200).json({ message: 'Login bem-sucedido', token });
  } catch (error: any) {
    res.status(500).json({ message: 'Erro ao realizar login', error: error.message });
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  const logToken = req.headers['x-token']

  const user = await findUserByToken(String(logToken))
  if (!user) throw new Error('user not found')
  user.token = null

  await updateUserById(String(user._id), user)

  res.status(201).json({ message: 'success' })
}
