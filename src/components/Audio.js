import React from 'react';

const Audio = (props) => {
   console.log('audio props', props);
   const { sound } = props;

   return (
      <>
         <p>sound here</p>
      </>
   );
};

export default Audio;
