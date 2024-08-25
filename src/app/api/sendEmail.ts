import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set in the environment variables');
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: 'codewrenchstudios@gmail.com',
      from: 'codewrenchstudios@gmail.com',
      subject: `New contact from ${req.body.name}`,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to send email' });
  }
}
