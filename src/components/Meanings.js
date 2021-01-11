import React from 'react';
import Definitions from './Definitions';

const Meanings = (props) => {
   const { partOfSpeech, definitions } = props;
   console.log(props);
   return (
      <div>
         <p>Part of Speech: {partOfSpeech}</p>
         {definitions.map((definition, idx) => (
            <Definitions key={idx} {...definition} />
         ))}
      </div>
   );
};

export default Meanings;
