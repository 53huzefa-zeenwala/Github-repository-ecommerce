import dbConnect from '../../../utils/mongo'
import FrameTypes from '../../../models/filter/frameTypes'

export default async function handler(req, res) {
  const { method } = req

  dbConnect()
  
  if ( method === 'GET' ) {
    const frameTypes = await FrameTypes.find();
    res.status(200).json(frameTypes);
  }
  if ( method === 'POST' ) {
    try {
      const frameType = await FrameTypes.create(req.body)
      res.status(201).json(frameType)
    } 
    catch (error) {
      res.status(500).json(error);      
    }
  }

}
