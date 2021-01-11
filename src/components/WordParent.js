import React from 'react';
import { ucFirst } from '../utils/utils';
import Meaning from './Meaning';
import Phonetic from './Phonetic';

const WordParent = (props) => {
   const { word, meanings, phonetics } = props;
   console.log('parent ', props);
   return (
      <div>
         <h2>{ucFirst(word)}</h2>
         {phonetics.map((phonetic, idx) => (
            <Phonetic key={idx} {...phonetic} />
         ))}

         {meanings.map((meaning, idx) => (
            <Meaning key={idx} {...meaning} />
         ))}
      </div>
   );
};

export default WordParent;
