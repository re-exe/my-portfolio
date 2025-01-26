import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import * as z from 'zod';

const formSchema = z.object({
    name: z.string().min(1, "お名前を入力してください。"),
    email: z.string().email("有効なメールアドレスを入力してください。"),
    subject: z.string().min(1, "お問い合わせ項目を選択してください。"),
    message: z.string().min(1, "お問い合わせ内容を入力してください。"),
});

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method != 'POST') {
        return response.status(405).end();
    }

    try {
        const values = formSchema.parse(request.body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD
            },
        });

        const mailOptions = {
            from: values.email,
            to: process.env.GMAIL_USER,
            subject: `Portfolioからお問い合わせ: ${values.subject}`,
            text: 
                `名前: ${values.name}\n`
                + `メールアドレス: ${values.email}\n`
                + `項目: ${values.subject}\n`
                + `お問い合わせ内容: ${values.message}`,
        };

        await transporter.sendMail(mailOptions);

        response.status(200).json({ message: 'メールを送信しました。' })
    } catch (error: unknown) {
        console.error("メール送信エラー:", error);
        response.status(500).json({ message: 'メールの送信に失敗しました。' });
    }
}