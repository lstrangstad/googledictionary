import React from 'react';
import { ucFirst } from '../utils/utils';
import Meaning from './Meaning';

const WordParent = (props) => {
   const { word, meanings } = props;
   console.log('parent ', props);
   return (
      <div>
         <h2>{ucFirst(word)}</h2>
         {meanings.map((meaning, idx) => (
            <Meaning key={idx} {...meaning} />
         ))}
      </div>
   );
};

export default WordParent;
