import dbConnect from '../../../utils/mongo'
import PriceRanges from '../../../models/filter/priceRanges'

export default async function handler(req, res) {
  const { method } = req

  dbConnect()
  
  if ( method === 'GET' ) {
    const priceRanges = await PriceRanges.find();
    res.status(200).json(priceRanges);
  }
  if ( method === 'POST' ) {
    try {
      const priceRange = await PriceRanges.create(req.body)
      res.status(201).json(priceRange)
    } 
    catch (error) {
      res.status(500).json(error);      
    }
  }

}
