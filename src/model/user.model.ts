import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import Address from './address.model';

enum UserRole {
  Client = 'CLIENT',
  Advertiser = 'ADVERTISER',
  Admin = 'ADMIN'
}

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  contact: string;
  role: UserRole;
  whatsapp_contact?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>({
  id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRole), required: true },
  whatsapp_contact: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});


userSchema.virtual('address', {
  ref: 'Address',
  localField: '_id',
  foreignField: 'user',
  justOne: false
});

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

const User = model<IUser>('User', userSchema);

export default User;
