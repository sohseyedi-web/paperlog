import paperConnect from "./../../../servers/utils/paperConnection";
import { Papers } from "./../../../servers/models/paperSchema";
export default async function handler(req, res) {
  paperConnect();
  const { method } = req;

  if (method === "GET") {
    const papers = await Papers.find({});
    res.status(200).json(papers);
  }
  if (method === "POST") {
    try {
      const formData = req.body;
      await Papers.create(formData);
      const papers = await Papers.find({});
      res.status(200).json(papers);
    } catch (error) {
      console.log(error.message);
    }
  }
}
