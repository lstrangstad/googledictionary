import React from 'react';
import Phonetic from './Phonetic';
import Meaning from './Meaning';


const Word = (props) => {
  const { word, phonetics, meanings } = props;
  console.log(props);
  return (
    <div>
    <h1>{word}</h1>
      {phonetics.map((phonetic, idx) => (
        <Phonetic key={idx} {...phonetic} />
      ))}

      {meanings.map((meaning, idx) => (
        <Meaning key={idx} {...meaning} />
      ))}
    </div>
  );
};

export default Word;