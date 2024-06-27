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
