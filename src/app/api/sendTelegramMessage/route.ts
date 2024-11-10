import { NextRequest, NextResponse } from 'next/server';
import 'server-only';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ status: 'Message sent successfully' });
    } else {
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Server error occurred' }, { status: 500 });
  }
}
