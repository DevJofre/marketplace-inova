import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export interface IAddress extends Document {
  id: string;
  userId: Schema.Types.ObjectId;
  street: string;
  state: string;
  city: string;
  country: string;
  number: string;
  zip_code: string;
  complement?: string;
}


const addressSchema = new Schema<IAddress>({
  id: { type: String, default: uuidv4 },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
 },
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
