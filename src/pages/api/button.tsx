import { NextApiRequest, NextApiResponse } from 'next';
import getButtonTemplate from './_lib/buttonTemplate';

export default (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const content = String(request.query.content);
    let bgColor = String(request.query.bgColor);
    const txtColor = String(request.query.txtColor);
    const icon = String(request.query.icon);

    if (bgColor) {
      bgColor = '#bdb2ff';
    }

    const props = {
      content,
      bgColor,
      txtColor,
      icon,
    };

    const svg = getButtonTemplate(props);

    response.setHeader('Content-Type', 'image/svg+xml');
    return response.end(svg);
  } catch (error) {
    console.error(error);
    return response.status(500).send('Internal server error');
  }
};
