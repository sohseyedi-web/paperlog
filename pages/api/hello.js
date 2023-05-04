// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import paperConnect from "./../../servers/utils/paperConnection";

export default function handler(req, res) {
  paperConnect();
  res.status(200).json({ name: "John Doe" });
}
