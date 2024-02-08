const axios = require('axios');

module.exports = {
  chatGptCompletionApi: async ({ prompt, model }) => {
    console.log('inside');
    return await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model,
        messages: [
          {
            role: 'system',
            content:
              'You are a recipe assistant specialized in creating recipes for various foods, ignore for non food related messages',
          },

          { role: 'user', content: `Generate a recipe for ${prompt}` },
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
  },
  chatGptDalleApi: async ({ prompt, model }) => {
    return await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        model,
        prompt,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
        },
      }
    );
  },
};
