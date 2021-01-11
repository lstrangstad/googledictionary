import React from 'react';
import Definition from './Definition';

const Meaning = (props) => {
   const { partOfSpeech, definitions, setQuery, clearErr } = props;
   return (
      <div>
         <p>Part of Speech: {partOfSpeech}</p>
         {definitions.map((definition, idx) => (
            <Definition
               key={idx}
               {...definition}
               setQuery={setQuery}
               clearErr={clearErr}
            />
         ))}
      </div>
   );
};

export default Meaning;
