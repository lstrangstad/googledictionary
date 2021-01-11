import React from 'react';
import { ucFirst } from '../utils/utils';
import Meanings from './Meanings';

const WordParent = (props) => {
   const { word, meanings } = props;
   console.log('props ', props);
   console.log('meanings, parent', meanings);
   return (
      <div>
         <h2>{ucFirst(word)}</h2>
         {meanings.map((meaning, idx) => (
            <Meanings key={idx} {...meaning} />
         ))}
      </div>
   );
};

export default WordParent;
