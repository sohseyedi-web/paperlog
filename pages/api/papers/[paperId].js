import paperConnect from "./../../../servers/utils/paperConnection";
import { Papers } from "./../../../servers/models/paperSchema";
export default async function handler(req, res) {
  paperConnect();
  const { method } = req;
  const { paperId } = req.query;

  if (method === "GET") {
    const paper = await Papers.findById(paperId);
    res.status(200).json(paper);
  }
  if (method === "DELETE") {
    try {
      const paper = await Papers.findByIdAndDelete(paperId);
      return res.status(200).json(paper);
    } catch (error) {
      console.log(error.message, "in delete data");
    }
  }
}
