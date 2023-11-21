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
      const subscriptionKey = '4a15ebc1cd98414f8dfd403f94163bb2';
      const endpoint = 'https://aiimages.cognitiveservices.azure.com/';

      const result = await analyzeImage(imageUrl, subscriptionKey, endpoint);
      setAnalysisResult(result);
    } catch (error) {
      // Handle error
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
