
import React, { useState } from 'react';
import GenerateImageApi from '../components/api/GenerateImageApi';

const GenerateImage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [color, setColor] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = await GenerateImageApi(prompt, color);
      setImageUrl(url);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="image-generator">
      <h1>Chat GPT Image Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          required
        />
        <label>
          <input
            type="checkbox"
            checked={color}
            onChange={(e) => setColor(e.target.checked)}
          />
          Color
        </label>
        <button type="submit">Generate Image</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Generated" />}
    </div>
  );
};

export default GenerateImage;
