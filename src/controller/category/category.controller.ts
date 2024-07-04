import { Request, Response } from 'express';
import {createCategory, findCategoryById} from '../../repository/category.repository';
import {createSubCategory} from '../../repository/sub.category.repository';
import mongoose from 'mongoose';

export const createNewCategory = async (req: Request, res: Response) => {
    try {
      const { subcategory, ...categoryData } = req.body;
  
      const newCategory = await createCategory(categoryData);
  
      subcategory.category = newCategory._id;
      const newSubCategory = await createSubCategory(subcategory);
  
      const response = {
        category: newCategory,
        subcategory: newSubCategory
      };
  
      res.status(201).json(response);
    } catch (error:any) {
      const errorMessage = error.message || 'Erro desconhecido ao cria Categoria';
      res.status(500).json({ message: 'Erro ao cria Categoria', error: errorMessage });
    }
  };

  export const getByIdCategory = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id.trim())) {
        return res.status(400).json({ message: 'ID inválido' });
      }
  
      const category = await findCategoryById(id.trim());
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ message: 'Categoria não encontrada' });
      }
    } catch (error:any) {
      const errorMessage = error.message || 'Erro desconhecido ao procura categoria';
      res.status(500).json({ message: 'Erro ao procura Categoria', error: errorMessage });
    }
  };