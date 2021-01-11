import React from 'react';
import Definition from './Definition';

const Meaning = (props) => {
   const { partOfSpeech, definitions, setQuery, clearErr } = props;
   return (
      <div className={'definition'}>
         <h2>{partOfSpeech}</h2>
         {definitions.length > 0 ? (
            <>
               {definitions.map((definition, idx) => (
                  <Definition
                     key={idx}
                     {...definition}
                     setQuery={setQuery}
                     clearErr={clearErr}
                  />
               ))}
            </>
         ) : null}
      </div>
   );
};

export default Meaning;
