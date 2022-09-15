import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [blogText, setBlogText] = useState('');
  const [textFormat, setTextFormat] = useState('left');
  const [blogFont, setBlogFont] = useState('architect');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} blogText={blogText} textFormat={textFormat} blogFont={blogFont} />
      <Editor 
        title={title} 
        setTitle={setTitle} 
        subtitle={subtitle} 
        setSubtitle={setSubtitle}
        blogText={blogText}
        setBlogText={setBlogText}
        textFormat={textFormat}
        setTextFormat={setTextFormat}
        blogFont={blogFont}
        setBlogFont={setBlogFont}
      />
    </main>
  );
}
