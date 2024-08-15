import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface ISubCategory extends Document {
    id: string;
    name: string;
    photo: string;
    category: Schema.Types.ObjectId;
}

const subCategorySchema = new Schema<ISubCategory>({
    id: {type: String, default: uuidv4},
    name: {type: String, required: true},
    photo: {type:String, required: true},
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
     }
})

const SubCategory = model<ISubCategory>('SubCategory', subCategorySchema );

export default SubCategory;