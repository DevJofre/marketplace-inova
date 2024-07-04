import { Request, Response } from 'express';
import { createSubCategory, findSubCategoryById } from '../../repository/sub.category.repository';

export const createNewSubCategory = async (req: Request, res: Response) => {
  try {
    const subCategoryData = req.body;
    const newSubCategory = await createSubCategory(subCategoryData);
    res.status(201).json(newSubCategory);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar sub categoria', error });
  }
};

export const getSubCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const subcategory = await findSubCategoryById(id);
    if (subcategory) {
      res.status(200).json(subcategory);
    } else {
      res.status(404).json({ message: 'Sub Categoria não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar Sub Categoria', error });
  }
};