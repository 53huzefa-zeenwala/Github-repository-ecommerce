import dbConnect from '../../utils/mongo'
import Category from '../../models/productCategory'

export default async function handler(req, res) {
  const { method } = req

  dbConnect()
  
  if ( method === 'GET' ) {
    const categoriesList = await Category.find();
    res.status(200).json(categoriesList);
  }
  if ( method === 'POST' ) {
    try {
      const category = await Category.create(req.body)
      res.status(201).json(category)
    } 
    catch (error) {
      res.status(500).json(error);      
    }
  }

}
