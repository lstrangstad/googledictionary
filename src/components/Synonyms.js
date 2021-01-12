import React from 'react';

const Synonym = (props) => {
  const { synonym } = props
  console.log(props);
  return (
    <>
      <p>{synonym}</p>
    </>
  );
};

export default Synonym;