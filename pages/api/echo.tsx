import { NextApiRequest, NextApiResponse } from "next";

interface MessageNextRequest extends NextApiRequest {
  query:{
    message?: string
  }
}

export default function echo(req: MessageNextRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      messege: req.query.message ?? "Base message",
    })
  );
}
