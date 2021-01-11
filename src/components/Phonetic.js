import React from 'react';

const Phonetic = (props) => {
   const { text, audio } = props;
   console.log('phonetic props', props);
   return (
      <div>
         <p>{text}</p>
      </div>
   );
};

export default Phonetic;
