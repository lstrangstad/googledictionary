import React from 'react';
import Definition from './Definition';

const Meaning = (props) => {
  const { partOfSpeech, definitions } = props;
  return (
    <div>
      <h2>{partOfSpeech}</h2>
      <>
      {definitions.map((defintion, idx) => (
        <Definition key={idx} {...defintion} />
      ))}
    </>
    </div>
  );
};

export default Meaning;