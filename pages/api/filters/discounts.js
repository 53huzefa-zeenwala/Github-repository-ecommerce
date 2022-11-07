import dbConnect from '../../../utils/mongo'
import Discounts from '../../../models/filter/discounts'

export default async function handler(req, res) {
  const { method } = req

  dbConnect()
  
  if ( method === 'GET' ) {
    const discounts = await Discounts.find();
    res.status(200).json(discounts);
  }
  if ( method === 'POST' ) {
    try {
      const discount = await Discounts.create(req.body)
      res.status(201).json(discount)
    } 
    catch (error) {
      res.status(500).json(error);      
    }
  }

}
