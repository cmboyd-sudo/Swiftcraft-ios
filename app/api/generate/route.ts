import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { prompt, appName } = await request.json()

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are an expert iOS developer. Generate production-ready SwiftUI code. App name: ${appName || 'MyApp'}. Output ONLY the Swift code, no explanations.`
        },
        {
          role: 'user',
          content: `Create a SwiftUI app with these features: ${prompt}`
        }
      ],
      temperature: 0.2,
    })

    const code = completion.choices[0].message.content || '// No code generated'

    return NextResponse.json({ code })
  } catch (error) {
    console.error('OpenAI error:', error)
    return NextResponse.json(
      { error: 'Failed to generate code' },
      { status: 500 }
    )
  }
}
