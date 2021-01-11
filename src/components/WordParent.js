import React from 'react';
import { ucFirst } from '../utils/utils';
import Meaning from './Meaning';
import Phonetic from './Phonetic';

const WordParent = (props) => {
   const { word, meanings, phonetics, setQuery, clearErr } = props;
   return (
      <div className={'wordParent'}>
         <h2>{ucFirst(word)}</h2>
         {phonetics.map((phonetic, idx) => (
            <Phonetic key={idx} {...phonetic} />
         ))}

         {meanings.map((meaning, idx) => (
            <Meaning
               key={idx}
               {...meaning}
               setQuery={setQuery}
               clearErr={clearErr}
            />
         ))}
      </div>
   );
};

export default WordParent;
