
import { GoogleGenAI, Type } from "@google/genai";
import { MarketingStrategy } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMarketingStrategy = async (niche: string, goal: string): Promise<MarketingStrategy> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As an expert digital marketer named Asad, create a concise marketing strategy for a business in the ${niche} niche with the primary goal of ${goal}.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          overview: { type: Type.STRING, description: "A brief professional summary of the strategy." },
          channels: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Top 3 marketing channels to focus on."
          },
          suggestedActions: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Key tactical steps to take immediately."
          },
          estimatedImpact: { type: Type.STRING, description: "Potential business outcome." }
        },
        required: ["overview", "channels", "suggestedActions", "estimatedImpact"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}') as MarketingStrategy;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    throw new Error("Strategic analysis unavailable at the moment.");
  }
};
