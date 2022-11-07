import dbConnect from '../../../utils/mongo'
import Brands from '../../../models/filter/brands'

export default async function handler(req, res) {
  const { method } = req

  dbConnect()
  
  if ( method === 'GET' ) {
    const brands = await Brands.find();
    res.status(200).json(brands);
  }
  if ( method === 'POST' ) {
    try {
      const brand = await Brands.create(req.body)
      res.status(201).json(brand)
    } 
    catch (error) {
      res.status(500).json(error);      
    }
  }

}
