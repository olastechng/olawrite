import { useState, useEffect } from 'react';

function AutoWritingText() {
  const [text, setText] = useState('');
  const words = ['Content Writers', 'Entrepreneurs', 'Developers'];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(words[index]);
      index = (index + 1) % words.length;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return <h1 className='text-indigo'>{text}</h1>;
}

export default AutoWritingText;
