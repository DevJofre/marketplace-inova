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