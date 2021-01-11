import React from 'react';

const Synonyms = (props) => {
   const { synonym } = props;
   return (
      <div>
         <p>{synonym}</p>
      </div>
   );
};

export default Synonyms;
