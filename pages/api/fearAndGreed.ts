import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = "https://fear-and-greed-index.p.rapidapi.com/v1/fgi";

    // Check if the API key exists
    const apiKey = process.env.FEAR_AND_GREED_API_KEY;
    console.log("Using api key: ", apiKey, " for fear and greed")
    if (!apiKey) {
      throw new Error("FEAR_AND_GREED_API_KEY is not set");
    }

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.FEAR_AND_GREED_API_KEY,
        "X-RapidAPI-Host": "fear-and-greed-index.p.rapidapi.com",
      } as Record<string, string>,
    };
    const response = await fetch(url, options);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log("There was an error getting fear and greed data", error)
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
