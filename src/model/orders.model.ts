import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export interface IOrders extends Document {
  id: string;
  userId: Schema.Types.ObjectId;
  statusDelivery: string;
  paymenMethod: string;
  createdAt?: Date;
  updatedAt?: Date;
}


const ordersSchema = new Schema<IOrders>({
  id: { type: String, default: uuidv4 },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
   },
  statusDelivery: { type: String, required: true },
  paymenMethod: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ordersSchema.virtual('orderProducts', {
  ref: 'OrderProducts',
  localField: '_id',
  foreignField: 'ordens',
  justOne: false
});

const Orders = model<IOrders>('Orders', ordersSchema);

export default Orders;
