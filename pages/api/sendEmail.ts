import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'huseyinaltikulac4@gmail.com', // Your email
    pass: 'your-email-password', // Your email password or app password
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const info = await transporter.sendMail({
        from: '"Site Contact" <huseyinaltikulac4@gmail.com>',
        to: 'huseyinaltikulac4@gmail.com',
        subject: `Yeni mesaj: ${name}`,
        text: message,
      });

      console.log("Message sent: %s", info.messageId);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Email could not be sent', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
