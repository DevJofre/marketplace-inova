import SubCategory, { ISubCategory } from '../model/sub.category.model';


export const createSubCategory = async (subCategoryData: ISubCategory) => {
  try {
    const subcategory = new SubCategory(subCategoryData);
    await subcategory.save();
    return subcategory;
  } catch (error:any) {
    throw new Error(`Error ao criar Sub Categoria: ${error.message}`);
  } 
};

export const findSubCategoryById = async (id: string) => {
  return SubCategory.findById(id);
};

export const updateSubCategoryByUserId = async (categoryId: string, updateData: Partial<ISubCategory>) => {
  try {
    const updatedSubCategory = await SubCategory.findOneAndUpdate({ category: categoryId }, updateData, { new: true });
    return updatedSubCategory;
  } catch (error: any) {
    throw new Error(`Error updating sub-category: ${error.message}`);
  }
};