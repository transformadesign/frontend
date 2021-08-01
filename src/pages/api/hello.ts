import { NextApiRequest, NextApiResponse } from 'next'

const resolver = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
};

export default resolver;
