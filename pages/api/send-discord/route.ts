import { NextResponse } from 'next/server';

// Discordのウェブフックを設定
// この変数は実際のウェブフックURLに置き換える必要があります
// 環境変数として.envファイルに保存することを推奨します
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || '';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // フォームデータを整形
    const { firstname, lastname, email, phone, subject, message } = data;
    
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
              value: phone,
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
    
    // Webhookにリクエストを送信
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    });
    
    if (!response.ok) {
      throw new Error(`Discord API responded with status: ${response.status}`);
    }
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Discord webhook error:', error);
    return NextResponse.json(
      { message: 'Failed to send message to Discord.' },
      { status: 500 }
    );
  }
}