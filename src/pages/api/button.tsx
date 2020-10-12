import { NextApiRequest, NextApiResponse } from 'next';
import getButtonTemplate from './_lib/buttonTemplate';

export default (request: NextApiRequest, response: NextApiResponse) => {
  try {
    if (!request.query.content) {
      throw new Error('Content and Link is required');
    }

    const content = String(request.query.content);
    const link = String(request.query.link);
    let bgColor = String(request.query.bgColor);
    const txtColor = String(request.query.txtColor);
    const icon = String(request.query.icon);

    if (!request.query.bgColor) {
      bgColor = '#bdb2ff';
    }

    const props = {
      content,
      bgColor,
      txtColor,
      icon,
      link,
    };

    const svg = getButtonTemplate(props);

    response.setHeader('Content-Type', 'image/svg+xml');
    return response.end(svg);
  } catch (error) {
    if (error.message === 'Content and Link is required') {
      return response.send('Content and Link is required');
    }
    return response.status(500).json({ error: 'Internal server error' });
  }
};
