import React, { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleImageAnalysis = () => {
    // Logic to trigger image analysis
    // You can use 'imageUrl' to access the entered URL
    console.log('Image analysis triggered with URL:', imageUrl);
  };

  const handleImageGeneration = () => {
    // Logic to trigger image generation
    // You can use 'prompt' to access the entered prompt
    console.log('Image generation triggered with prompt:', prompt);
  };

  return (
    <div className="App">
      <h1>Title</h1>
      <label>
        Enter Image URL:
        <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
      </label>
      <br />
      <label>
        Enter Image Prompt:
        <input type="text" value={prompt} onChange={handlePromptChange} />
      </label>
      <br />
      <button onClick={handleImageAnalysis}>Trigger Image Analysis</button>
      <button onClick={handleImageGeneration}>Trigger Image Generation</button>
    </div>
  );
}

export default App;

