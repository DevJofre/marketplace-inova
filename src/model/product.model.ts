import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export interface IProduct extends Document {
  id: string;
  name: string;
  subCategoryId: Schema.Types.ObjectId;
  description: string;
  price: string;
  brand: string; 
  createdAt?: Date;
  updatedAt?: Date;
}

const productSchema = new Schema<IProduct>({
  id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  subCategoryId: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  price: { type: String, required: true },
  brand: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

productSchema.virtual('productphoto', {
  ref: 'ProductPhoto',
  localField: '_id',
  foreignField: 'product',
  justOne: false
});

productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });

const Product = model<IProduct>('Product', productSchema);

export default Product;
