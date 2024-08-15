import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export interface IOrderProducts extends Document {
  id: string;
  ordersId: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
  statusDelivery: string;
  paymenMethod: string;
  createdAt?: Date;
  updatedAt?: Date;
}


const orderProductsSchema = new Schema<IOrderProducts>({
  id: { type: String, default: uuidv4 },
  ordersId: {
    type: Schema.Types.ObjectId,
    ref: 'Orders',
    required: true
  },
   productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }, 
  statusDelivery: { type: String, required: true },
  paymenMethod: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});



const OrderProducts = model<IOrderProducts>('OrderProducts', orderProductsSchema);

export default OrderProducts;
