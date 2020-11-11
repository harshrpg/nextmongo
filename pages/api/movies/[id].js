import { ObjectID } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
    const {
        query: { id },
      } = req
    const { db } = await connectToDatabase();

    const movies = await db
        .collection("movies")
        .find({"_id":ObjectID(id)})
        .toArray();

    res.json(movies);
}