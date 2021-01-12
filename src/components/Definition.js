import React from "react";
import Synonym from "./Synonyms";

const Definition = (props) => {
  const { defintion, example, synonyms } = props;
  console.log(props);
  return (
    <div>
      <p>Definition: {defintion}</p>
      <p>Example: {example}</p>

      {synonyms?.length > 0 ? (
        <div>
          {synonyms.map((synonym, idx) => (
            <Synonym key={idx} synonym={synonym} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Definition;
