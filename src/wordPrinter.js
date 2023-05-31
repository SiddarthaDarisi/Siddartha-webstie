import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const WordsPrinter = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  const printTime = 150; // Delay between printing each letter (in milliseconds)
  const deleteTime = 100; // Delay between deleting each letter (in milliseconds)

  useEffect(() => {
    const currentWord = words[wordIndex];

    // If we've finished typing or deleting a word
    if ((isDeleting && charIndex === -1) || (!isDeleting && charIndex === currentWord.length)) {
      setIsDeleting(!isDeleting); // Switch modes

      // Move to the next word if we've just finished deleting
      if (isDeleting) {
        setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
      }

      // Wait a while before continuing
      setTimeout(() => {}, 1000);
    } else {
      setText(currentWord.substring(0, charIndex + 1) + (isDeleting ? '_' : '_'));

      // Continue typing or deleting
      setTimeout(() => {
        setCharIndex((prevCharIndex) => prevCharIndex + (isDeleting ? -1 : 1));
      }, isDeleting ? deleteTime : printTime);
    }
  }, [charIndex, wordIndex, isDeleting, words]);

  return (
    <Typography variant='h3' sx={{ fontFamily: 'Playfair Display', fontWeight: 700, mt: 1, mb: 5, fontSize: 55 }}>{text}</Typography>
  );
};

export default WordsPrinter;
