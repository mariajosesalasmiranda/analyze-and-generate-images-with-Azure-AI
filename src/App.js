// App.js

import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis.js';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleAnalyzeClick = async () => {
    setProcessing(true);
    try {
      const result = await analyzeImage(imageUrl);
      setAnalysisResult(result);
    } catch (error) {
      console.error(error);
      setAnalysisResult(null);
    }
    setProcessing(false);
  };

  const displayResults = () => {
    return (
      <div>
        <h2>Analysis Results</h2>
        <p>Processed Image URL: {imageUrl}</p>
        <h3>Analysis Details:</h3>
        {/* Displaying analysis results */}
        {analysisResult && (
          <div>
            {/* Format and display analysis results here */}
            {/* This is a simple example; you might need to customize it */}
            <p>Description: {analysisResult.description.captions[0].text}</p>
            <p>Tags: {analysisResult.tags.map((tag) => tag.name).join(', ')}</p>
            {/* Add more details based on your selected features */}
          </div>
        )}
      </div>
    );
  };
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleAnalyzeClick}>Analyze</button>
      {processing && <p>Processing...</p>}
      {analysisResult && displayResults()}
    </div>
  );
};

export default App;
