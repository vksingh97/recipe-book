const axios = require('axios');

module.exports = {
  askChatGpt: async ({}) => {
    const prompt = 'who is adolf hitler?';
    const openaiApiKey = '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'; // Replace with your actual OpenAI API key

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
          Authorization: `Bearer ${openaiApiKey}`,
        },
        //   responseType: 'stream',
      }
    );
    console.log(openaiResponse.data);
  },
};
