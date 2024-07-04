import Category, { ICategory } from '../model/category.model';
import Sub_Category from '../model/sub.category.model';

export const createCategory = async (categoryData: ICategory) => {
  try {
    const category = new Category(categoryData);
    await category.save();
    return category;
  } catch (error: any) {
    throw new Error(`Erro ao cria a categoria: ${error.message}`);
  }
};

export const findCategoryById = async (id: string) => {
  try {
    return await Category.findById(id).populate('subcategory');
  } catch (error: any) {
    throw new Error(`Erro ao localizar categoria por ID: ${error.message}`);
  }
};