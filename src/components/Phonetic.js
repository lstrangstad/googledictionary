import React from 'react';
import Audio from './Audio';

const Phonetic = (props) => {
   const { text, audio } = props;
   console.log('phonetic props', props);
   return (
      <div>
         <p>{text}</p>
         <Audio audio={audio} />
      </div>
   );
};

export default Phonetic;
