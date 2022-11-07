import dbConnect from "../../../utils/mongo";
import Brands from "../../../models/filter/brands";
import Colors from "../../../models/filter/colors";
import Discounts from "../../../models/filter/discounts";
import FrameTypes from "../../../models/filter/frameTypes";
import PriceRanges from "../../../models/filter/priceRanges";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    const brands = await Brands.find();

    res.status(200).json(brands);
  }
}
