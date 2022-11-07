import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    const product = await Product.findById(id);
    res.status(200).json(product);
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "DELETE") {
    // if (!token || token !== process.env.token) {
    //   return res.status(401).json("Not authenticated!");
    // }
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    // if (!token || token !== process.env.token) {
    //   return res.status(401).json("Not authenticated!");
    // }
    try {
      const product = await Product.updateOne(
        { _id: id },
        {
          $set: req.body,
        }
      );
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
