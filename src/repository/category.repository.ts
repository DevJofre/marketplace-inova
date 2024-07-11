import Category, { ICategory } from '../model/category.model';
import SubCategory from '../model/sub.category.model';

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

export const deleteCategoryById = async (id: string) => {
  try {
    const category = await Category.findByIdAndDelete(id);
    if (category) {
      await SubCategory.deleteMany({ category: id });
    }
    return category;
  } catch (error: any) {
    throw new Error(`Error deleting category: ${error.message}`);
  }
};

export const updateCategoryById = async (id: string, updateData: Partial<ICategory>) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, updateData, { new: true });
    return updatedCategory;
  } catch (error: any) {
    throw new Error(`Error updating Category: ${error.message}`);
  }
};