import User, { IUser } from '../model/user.model';
import Address from '../model/address.model';

export const createUser = async (userData: IUser) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error: any) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const findUserById = async (id: string) => {
  try {
    return await User.findById(id).populate('address');
  } catch (error: any) {
    throw new Error(`Error finding user by ID: ${error.message}`);
  }
};

export const deleteUserById = async (id: string) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      await Address.deleteMany({ user: id });
    }
    return user;
  } catch (error: any) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

