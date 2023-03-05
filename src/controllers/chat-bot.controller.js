const catchAsync = require('../utils/catchAsync');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const chat = catchAsync(async (req, res) => {
  const { question } = req.body;
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: question,
  });
  console.log(completion.data.choices[0].text);

  res.status(200).send(completion.data.choices[0].text);
});

module.exports = {
  chat,
};
