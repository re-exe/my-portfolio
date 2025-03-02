import type { NextApiRequest, NextApiResponse } from 'next';

// Discordのウェブフックを設定
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || '';

type ResponseData = {
  success?: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // POSTリクエスト以外は許可しない
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    if (!DISCORD_WEBHOOK_URL) {
      console.error('Discord webhook URL is not configured');
      return res.status(500).json({ message: 'Discord webhook URL is not configured' });
    }

    const data = req.body;

    // データの検証
    if (!data || typeof data !== 'object') {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    console.log('Received form data:', data); // デバッグ用

    // フォームデータを整形
    const { firstname, lastname, email, phone, subject, message } = data;

    // 必須フィールドの検証
    if (!firstname || !lastname || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Discordに送信するメッセージを作成
    const discordMessage = {
      embeds: [
        {
          title: `New Contact Form Submission: ${subject}`,
          color: 0x00FFFF, // シアン色
          fields: [
            {
              name: 'Name',
              value: `${firstname} ${lastname}`,
              inline: true
            },
            {
              name: 'Email',
              value: email,
              inline: true
            },
            {
              name: 'Phone',
              value: phone || 'Not provided',
              inline: true
            },
            {
              name: 'Subject',
              value: subject,
              inline: false
            },
            {
              name: 'Message',
              value: message,
              inline: false
            }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    };

    console.log('Sending to Discord:', JSON.stringify(discordMessage, null, 2)); // デバッグ用

    // Webhookにリクエストを送信
    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
      });

      const responseText = await response.text(); // レスポンスのテキストを取得

      console.log('Discord response status:', response.status);
      console.log('Discord response:', responseText);

      if (!response.ok) {
        return res.status(500).json({
          message: 'Failed to send message to Discord',
          error: `Discord API responded with status: ${response.status}, body: ${responseText}`
        });
      }

      return res.status(200).json({ success: true });
    } catch (fetchError) {
      console.error('Fetch error:', fetchError);
      return res.status(500).json({
        message: 'Network error when sending to Discord'
      });
    }

  } catch (error) {
    console.error('Discord webhook error:', error);
    return res.status(500).json({
      message: 'Failed to send message to Discord.'
    });
  }
}