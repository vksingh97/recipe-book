const chatGptService = require('../services/chatGpt');

module.exports = {
  askChatGpt: async (req, res) => {
    try {
      const response = await chatGptService.askChatGpt({});
      if (response.ok) {
        return res.success({ data: response.data });
      }
      return res.failure({ msg: response.err });
    } catch (e) {
      return res.failure({});
    }
  },
};
