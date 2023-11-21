// App.js

import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleAnalyze = async () => {
    if (!imageUrl) return;

    setProcessing(true);

    try {
      // Replace with your Azure subscription key and endpoint URL
      const subscriptionKey = '0e12443a7c904f64a90e926d92762fef';
      const endpoint = 'https://aiimages.cognitiveservices.azure.com/';

      const result = await analyzeImage(imageUrl, subscriptionKey, endpoint);
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error analyzing image:', error); 
    } finally {
      setProcessing(false);
    }
  };

  const displayResults = () => {
    if (!analysisResult) return null;

    // Display analysis results in a readable format
    return (
      <div>
        <p>Processed Image URL: {imageUrl}</p>
        <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter image URL"
      />
      <button onClick={handleAnalyze} disabled={processing}>
        Analyze
      </button>
      {processing && <p>Processing...</p>}
      {displayResults()}
    </div>
  );
};

export default App;
