import { Schema, model, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IProductPhoto extends Document {
    id: string;
    productId: Schema.Types.ObjectId;
    photo: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const productPhotoSchema = new Schema<IProductPhoto>({
    id: {type: String, default: uuidv4},
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    photo: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const ProductPhoto = model<IProductPhoto>('ProductPhoto', productPhotoSchema );

export default ProductPhoto;