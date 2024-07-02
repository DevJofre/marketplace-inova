import Address, { IAddress } from '../model/address.model';


export const createAddress = async (addressData: IAddress) => {
  try {
    const address = new Address(addressData);
    await address.save();
    return address;
  } catch (error:any) {
    throw new Error(`Error creating user: ${error.message}`);
  } 
};

export const findAddressById = async (id: string) => {
  return Address.findById(id);
};

export const updateAddressByUserId = async (userId: string, updateData: Partial<IAddress>) => {
  try {
    const updatedAddress = await Address.findOneAndUpdate({ user: userId }, updateData, { new: true });
    return updatedAddress;
  } catch (error: any) {
    throw new Error(`Error updating address: ${error.message}`);
  }
};