import axios from 'axios';

const GenerateImageApi = async (prompt: string, color: boolean): Promise<string> => {

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const url = 'https://api.openai.com/v1/images/generations';

  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const data = {
    prompt: `${prompt} without background, thin lined architect sketch, ${color ? 'delicate gradient color' : 'black and white'}`,
    n: 1,
    size: '512x512',
    response_format: 'url',
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log(prompt)
    return response.data.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};



export default GenerateImageApi; 