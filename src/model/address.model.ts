import { Schema, model, Document } from 'mongoose';
import User from './user.model';


export interface IAddress extends Document {
  id: string;
  user_id: string;
  street: string;
  state: string;
  city: string;
  country: string;
  number: string;
  zip_code: string;
  complement?: string;
}


const addressSchema = new Schema<IAddress>({
  id: { type: String, required: true },
  user_id: { type: String, required: true, ref: 'User' },
  street: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  number: { type: String, required: true },
  zip_code: { type: String, required: true },
  complement: { type: String }
});

// Criar o modelo do endereço
const Address = model<IAddress>('Address', addressSchema);

export default Address;
