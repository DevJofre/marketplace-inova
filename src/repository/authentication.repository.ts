import User, { IUser } from '../model/user.model';


export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error: any) {
    throw new Error(`Error finding user by email: ${error.message}`);
  }
};

export const validateUserPassword = async (user: IUser, password: string): Promise<boolean> => {
  try {
    const isMatch = await user.comparePassword(password);
    return isMatch;
  } catch (error: any) {
    throw new Error(`Error validating user password: ${error.message}`);
  }
};
export const findUserByToken = async (token: string) => {
  try {
    const user = await User.findOne({token})
    return user
  } catch (error: any) {
    throw new Error(`Error finding user: ${error.message}`);
  }
}
