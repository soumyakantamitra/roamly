import { GoogleGenAI } from "@google/genai";

export default async function aiGeneration(prompt: string) {

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: "application/json",
  };
  const model = "gemini-2.0-flash-lite";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `${prompt}`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let finalResponse = "";
  for await (const chunk of response) {
    finalResponse += chunk.text;
  }
  
  return finalResponse;
}