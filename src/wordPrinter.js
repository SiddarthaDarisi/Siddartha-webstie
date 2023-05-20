import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const WordsPrinter = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  const printTime = 600; // Delay between printing each letter (in milliseconds)
  const deleteTime = 400; // Delay between deleting each letter (in milliseconds)

  useEffect(() => {
    const word = words[wordIndex];

    // Check if we've finished deleting or printing a word
    if ((isDeleting && charIndex === 0) || (!isDeleting && charIndex === word.length)) {
      setIsDeleting(!isDeleting);

      // Wait for some time before starting the next operation
      setTimeout(() => {
        if (isDeleting) {
          // If we've just finished deleting a word, move to the next word
          setWordIndex((wordIndex + 1) % words.length);
        }

        setCharIndex((prev) => (isDeleting ? prev : prev + 1));
      }, 100);  // you can change the waiting time here
    } else {
      // Continue deleting or printing the current word
      setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, isDeleting ? deleteTime : printTime);

      setText(word.substring(0, charIndex) + (isDeleting ? "_" : "_"));
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, wordIndex, isDeleting]);

  return (
    <div>
     
      <Typography variant='h4'sx={{fontFamily:"Playfair Display",fontWeight:"700"}} >{text}</Typography>
    </div>
  );
};

export default WordsPrinter;