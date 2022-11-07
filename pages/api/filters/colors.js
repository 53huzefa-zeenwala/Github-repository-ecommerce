import dbConnect from '../../../utils/mongo'
import Colors from '../../../models/filter/colors'

export default async function handler(req, res) {
  const { method } = req

  dbConnect()
  
  if ( method === 'GET' ) {
    const colors = await Colors.find();
    res.status(200).json(colors);
  }
  if ( method === 'POST' ) {
    try {
      const color = await Colors.create(req.body)
      res.status(201).json(color)
    } 
    catch (error) {
      res.status(500).json(error);      
    }
  }

}
