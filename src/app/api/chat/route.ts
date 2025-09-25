import { NextResponse } from "next/server";

const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";
const MODEL = "mistral-small-latest";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Check key
    const apiKey = process.env.MISTRAL_API_KEY;
    if (!apiKey) {
      console.error("Missing MISTRAL_API_KEY");
      return NextResponse.json({ reply: "⚠️ Server misconfiguration" }, { status: 500 });
    }

    const resp = await fetch(MISTRAL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: MODEL,
            messages: [
            {
                role: "system",
                content: "You are a portfolio assistant for Nino. You know about Nino’s projects, skills, and background. Nino is a He, and has graduated from a Computer Science Bachelor Degree at Hexagone School ('École Hexagone' in French) in 2025. He also had several professional experiences, such as in a Fixed-term contract Wordpress Developer position at Ykone (a Global Influencer Marketing Group), aswell as two interships, one at OOEO Web Agency in Vélizy-Villacoublay, and the other one at Appétencia (a company that offers professional support), and an apprenticeship within ReflexProd. If you don't know something, say 'I don’t know'. But always make sure to give short responses and, if you haven't said enough to answer the user's question, ask them if they want to know more.",
            },
            ...messages
            ],
        }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("Mistral API error:", resp.status, errText);
      return NextResponse.json({ reply: "⚠️ Mistral API error" }, { status: 500 });
    }

    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      console.error("Mistral returned empty reply:", data);
      return NextResponse.json({ reply: "⚠️ No reply from AI" }, { status: 500 });
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Call error in route:", err);
    return NextResponse.json({ reply: "⚠️ Internal error" }, { status: 500 });
  }
}