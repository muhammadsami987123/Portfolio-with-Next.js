import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getPortfolioContext } from '@/data/portfolio-context';



export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'OpenAI API Key is missing. Please check your .env.local file.' }, { status: 500 });
        }

        const openai = new OpenAI({
            apiKey: apiKey,
        });

        if (!messages) {
            return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
        }

        const systemPrompt = getPortfolioContext();

        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini', // or gpt-3.5-turbo if 4o is not available on this key, but 4o-mini is best value
            messages: [
                { role: 'system', content: systemPrompt },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        const reply = response.choices[0].message.content;

        return NextResponse.json({ reply });
    } catch (error: unknown) {
        console.error('Chat API Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: 'Failed to generate response', details: errorMessage }, { status: 500 });
    }
}
