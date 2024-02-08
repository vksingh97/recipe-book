const axios = require('axios');
const { chatGptCompletionApi, chatGptDalleApi } = require('../utils/apiDict');

module.exports = {
  askChatGpt: async ({ bodyData }) => {
    const { prompt } = bodyData;
    try {
      const [openaiResponse, chatGptDalleResponse] = await Promise.all([
        chatGptCompletionApi({ prompt, model: 'gpt-3.5-turbo' }),
        chatGptDalleApi({ prompt, model: 'dall-e-2' }),
      ]);

      if (
        openaiResponse &&
        openaiResponse.data &&
        chatGptDalleResponse &&
        chatGptDalleResponse.data
      ) {
        return {
          ok: true,
          data: {
            promptResponse: openaiResponse.data.choices[0].message.content,
            imageUrl: chatGptDalleResponse.data.data[0].url,
          },
        };
      }
      return { ok: false, err: `Chat Gpt didn't respond` };
    } catch (error) {
      console.error(error);
      return { ok: false, err: 'An error occurred' };
    }
  },
};
