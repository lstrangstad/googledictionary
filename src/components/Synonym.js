import React from 'react';

const Synonym = (props) => {
   const { synonym } = props;
   return (
      <div>
         <p>{synonym}</p>
      </div>
   );
};

export default Synonym;
