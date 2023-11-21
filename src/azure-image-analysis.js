// azure-image-analysis.js

const analyzeImage = async (imageUrl) => {
    const subscriptionKey = '4a15ebc1cd98414f8dfd403f94163bb2'; // Replace with your Azure subscription key
    const endpoint = 'https://aiimages.cognitiveservices.azure.com/'; // Replace with your Azure endpoint URL
  
    const params = {
      visualFeatures: features,
      details: '', // Additional details if required
      language: 'en', // Language of the text in the image
    };
  
    const url = `${endpoint}/vision/v4.0/analyze?visualFeatures=${params.visualFeatures}&details=${params.details}&language=${params.language}`;
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': subscriptionKey,
      },
      body: JSON.stringify({ url: imageUrl }),
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw new Error('Failed to analyze image');
    }
  };
  
  export default analyzeImage;
  