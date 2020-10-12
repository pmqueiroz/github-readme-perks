import { NextApiRequest, NextApiResponse } from 'next';
import getButtonTemplate from './_lib/buttonTemplate';
import getDefaultLogos from './_lib/getDefaultLogos';

export default (request: NextApiRequest, response: NextApiResponse) => {
  try {
    if (!request.query.content) {
      throw new Error('Content and Link is required');
    }

    const content = String(request.query.content);
    const link = String(request.query.link);
    let bgColor = String(request.query.bgColor);
    let txtColor = String(request.query.txtColor);
    const logo = String(request.query.logo);

    if (!request.query.bgColor) {
      bgColor = '#bdb2ff';
    }

    if (!request.query.txtColor) {
      txtColor = '#fff';
    }

    if (!/^#[0-9A-F]{6}$/i.test(bgColor)) {
      bgColor = '#bdb2ff';
    }

    if (!/^#[0-9A-F]{6}$/i.test(txtColor)) {
      txtColor = '#fff';
    }

    const icon = getDefaultLogos(logo);

    const props = {
      content,
      bgColor,
      txtColor,
      logo,
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
