import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import * as z from 'zod';

const FormSchema = z.object({
    firstname: z.string().min(1, 'Please enter your first name.'),
    lastname: z.string().min(1, 'Please enter your last name.'),
    email: z.string().email('Please enter a valid Email.'),
    phone: z.string().min(6, 'Please enter your phone number.'),
    subject: z.string().min(1, 'Please enter the subject.'),
    message: z.string().min(1, 'Please enter your message.'),
});

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method != 'POST') {
        return response.status(405).end();
    }

    try {
        const values = FormSchema.parse(request.body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_ADDRESS,
                pass: process.env.GMAIL_PASSWORD
            },
        });

        const mailOptions = {
            from: values.email,
            to: process.env.GMAIL_ADDRESS,
            subject: `Portfolioからお問い合わせ: ${values.subject}`,
            text: 
                `名前: ${values.firstname} ${values.lastname}\n`
                + `メールアドレス: ${values.email}\n`
                + `電話番号: ${values.phone}\n`
                + `項目: ${values.subject}\n`
                + `お問い合わせ内容: ${values.message}`,
        };

        await transporter.sendMail(mailOptions);

        response.status(200).json({ message: 'Email sent.' })
    } catch (error: unknown) {
        console.error("Send Error:", error);
        response.status(500).json({ message: 'Send failed.' });
    }
}