import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface ICategory extends Document {
    id: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const categorySchema = new Schema<ICategory>({
    id: {type: String, default: uuidv4},
    name: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

categorySchema.virtual('subcategory', {
    ref: 'SubCategory',
    localField: '_id',
    foreignField: 'categoryId',
    justOne: false
  });
  
  categorySchema.set('toObject', { virtuals: true });
  categorySchema.set('toJSON', { virtuals: true });

const Category = model<ICategory>('Category', categorySchema );

export default Category;