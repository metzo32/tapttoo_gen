import React, { useState, useRef, useEffect } from 'react';
import { AudioVisualizer } from 'react-audio-visualize';

const Visualizer = () => {
  const [blob, setBlob] = useState<Blob | null>(null);
  const visualizerRef = useRef<HTMLCanvasElement>(null);

  const fetchAudioData = async () => {
    const url = 'https://itunesvolodimir-kudriachenkov1.p.rapidapi.com/searchMusic';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '6c0602e397msh6e65917d495f2a9p1a0787jsn98945497d994',
        'X-RapidAPI-Host': 'iTunesvolodimir-kudriachenkoV1.p.rapidapi.com'
      },
      body: new URLSearchParams({
        country: 'southkorea',
        term: 'chill'
      })
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const audioBlob = await response.blob();
      console.log('Fetched audio blob:', audioBlob);
      setBlob(audioBlob);
    } catch (error) {
      console.error('Error fetching audio data:', error);
    }
  };

  useEffect(() => {
    fetchAudioData();
  }, []);

  return (
    <div>
      {blob ? (
        <AudioVisualizer
          ref={visualizerRef}
          blob={blob}
          width={500}
          height={75}
          barWidth={1}
          gap={0}
          barColor={'#f76565'}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Visualizer;
