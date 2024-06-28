import User, { IUser } from '../model/user.model';


export const createUser = async (userData: IUser) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error:any) {
    throw new Error(`Error creating user: ${error.message}`);
  } 
};

export const findUserById = async (id: string) => {
  return User.findById(id);
};
