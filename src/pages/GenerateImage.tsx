
import React, { useState } from 'react';
import GenerateImageApi from '../components/api/GenerateImageApi';
import s from '../stores/styling';

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
    <s.GenDiv className="image-generator">
      <s.Form onSubmit={handleSubmit}>
        <s.Input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          required
        />
        <s.Label>
          <s.Input
            type="checkbox"
            checked={color}
            onChange={(e) => setColor(e.target.checked)}
          />
          Color
        </s.Label>
        <s.Button className="Round " type="submit">Generate Image</s.Button>
      </s.Form>
      {imageUrl && <img src={imageUrl} alt="Generated" />}
    </s.GenDiv>
  );
};

export default GenerateImage;
