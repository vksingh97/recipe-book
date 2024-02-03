const axios = require('axios');

module.exports = {
  askChatGpt: async ({ bodyData }) => {
    const { prompt } = bodyData;
    const openaiResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
        },
      }
    );
    if (openaiResponse && openaiResponse.data) {
      return { ok: true, data: openaiResponse.data.choices[0].message.content };
    }
    return { ok: false, err: `Chat Gpt didn't respond` };
  },
};
