import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [processing, setProcessing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleAnalyzeImage = async () => {
    setProcessing(true);
    const results = await analyzeImage(imageUrl);
    setProcessing(false);
    setAnalysisResults(results);
  };

  const displayResults = () => {
    if (!analysisResults) {
      return <div>No analysis results yet.</div>;
    }

    const { categories, description, tags } = analysisResults;
    return (
      <div>
        <p>Image URL: {imageUrl}</p>
        <p>Categories: {categories.join(', ')}</p>
        <p>Description: {description}</p>
        <p>Tags: {tags.join(', ')}</p>
      </div>
    );
  };

  return (
    <div>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button onClick={handleAnalyzeImage} disabled={processing}>Analyze</button>
      {processing && <div>Analyzing image...</div>}
      {analysisResults && displayResults()}
    </div>
  );
};

export default App;
