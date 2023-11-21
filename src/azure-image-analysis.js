import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  try {
    const response = await axios.get(`https://westus2.api.cognitive.microsoft.com/vision/v4.0/analyze?visualFeatures=Categories,Description,Tags&url=${imageUrl}`, {
      headers: {
        'Ocp-Apim-Subscription-Key': '<your-api-key>'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    return null;
  }
};

export default analyzeImage;
