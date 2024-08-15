import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface ISubCategory extends Document {
    id: string;
    name: string;
    categoryId: Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const subCategorySchema = new Schema<ISubCategory>({
    id: {type: String, default: uuidv4},
    name: {type: String, required: true},
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
     }
})

subCategorySchema.virtual('product', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'subCategory',
    justOne: false
});

subCategorySchema.set('toObject', { virtuals: true });
subCategorySchema.set('toJSON', { virtuals: true });

const SubCategory = model<ISubCategory>('SubCategory', subCategorySchema );

export default SubCategory;