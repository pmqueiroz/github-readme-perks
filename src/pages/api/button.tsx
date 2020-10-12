import { NextApiRequest, NextApiResponse } from 'next';
import getButtonTemplate from './_lib/buttonTemplate';

export default (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const content = String(request.query.content);
    let bgColor = String(request.query.bgColor);
    const txtColor = String(request.query.txtColor);
    const icon = String(request.query.icon);

    if (bgColor) {
      bgColor = '"#bdb2ff"';
    }

    if (!content) {
      throw new Error('Content is required');
    }

    const svg = getButtonTemplate(content, bgColor);

    response.setHeader('Content-Type', 'image/svg+xml');
    return response.end(svg);
  } catch (error) {
    if (error.message === 'Content is required') {
      return response.status(400).send(error.message);
    }

    console.error(error);
    return response.status(500).send('Internal server error');
  }
};
