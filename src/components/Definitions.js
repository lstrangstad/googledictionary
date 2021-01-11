import React from 'react';
import Synonyms from './Synonyms';

const Definitions = (props) => {
   const { definition, example, synonyms } = props;
   console.log(props);
   return (
      <div>
         <p>Definition: {definition}</p>
         <p>Example: {example}</p>
         <h3>Synonyms: </h3>
         {synonyms?.map((synonym, idx) => (
            <Synonyms key={idx} synonym={synonym} />
         ))}
      </div>
   );
};

export default Definitions;
