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

