// title
import React, { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [imagePrompt, setImagePrompt] = useState('');

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleImagePromptChange = (event) => {
    setImagePrompt(event.target.value);
  };

  return (
    <div className="App">
      <h1>Image Analysis and Generation</h1>
      <div className="input-container">
        <label for="imageUrl">Enter Image URL:</label>
        <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />
      </div>
      <div className="input-container">
        <label for="imagePrompt">Enter Image Prompt:</label>
        <textarea id="imagePrompt" value={imagePrompt} onChange={handleImagePromptChange} rows="5"></textarea>
      </div>
      <div className="button-container">
        <button onClick={() => console.log('Analyzing image...')}>Analyze Image</button>
        <button onClick={() => console.log('Generating image...')}>Generate Image</button>
      </div>
    </div>
  );
}

export default App;


// try to use this code to create a react app
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
