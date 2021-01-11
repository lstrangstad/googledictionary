import React from 'react';
import Synonym from './Synonym';

const Definition = (props) => {
   const { definition, example, synonyms } = props;
   return (
      <div>
         <p>Definition: {definition}</p>
         <p>Example: {example}</p>
         {synonyms ? (
            <div>
               <h3>Synonyms</h3>
               {synonyms.map((synonym, idx) => (
                  <Synonym key={idx} synonym={synonym} />
               ))}
            </div>
         ) : (
            <></>
         )}
      </div>
   );
};

export default Definition;
