import { submitLead } from '@/lib/leads';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  return submitLead(request, { token: process.env.TELEGRAM_TOKEN, chatId: process.env.TELEGRAM_CHAT_ID });
}
