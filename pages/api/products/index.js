import dbConnect from '../../../utils/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res) {
  const { method } = req

  dbConnect()
  
  if ( method === 'GET' ) {
    const products = await Product.find();
    res.status(200).json(products);
  }
  if ( method === 'POST' ) {
    try {
      const product = await Product.create(req.body)
      res.status(201).json(product)
    } 
    catch (error) {
      res.status(500).json(error);      
    }
  }

}
