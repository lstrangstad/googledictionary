import React from 'react';
import Definition from './Definition';

const Meaning = (props) => {
   const { partOfSpeech, definitions } = props;
   return (
      <div>
         <p>Part of Speech: {partOfSpeech}</p>
         {definitions.map((definition, idx) => (
            <Definition key={idx} {...definition} />
         ))}
      </div>
   );
};

export default Meaning;
