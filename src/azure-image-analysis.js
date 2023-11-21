// azure-image-analysis.js

const analyzeImage = async (imageUrl, subscriptionKey, endpoint) => {
    const params = {
      visualFeatures: 'Categories,Description,Color', // Customize visual features as needed
      details: '', // Additional details if required
      language: 'en' // Language of the description
    };
  
    const url = `${endpoint}/vision/v4.0/analyze?visualFeatures=${params.visualFeatures}&details=${params.details}&language=${params.language}`;
  
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey
    });
  
    const body = JSON.stringify({ url: imageUrl });
  
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: body
    };
  
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw error;
    }
  };
  
  export default analyzeImage;
  