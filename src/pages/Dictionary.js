import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {apiUrl} from '../utils/utils';
import Word from '../components/Word';


const Dictionary = () => {
   const [word, setWord] = useState([]);
   const [query, setQuery] = useState('Discovery');

   useEffect(() => {
      axios.get(`${apiUrl}en/${query}`).then(res => setWord(res.data));
      ;
   }, []);

   return (
   <>
      <h1>Dictionary</h1>
      {word.length < 1 ? (
         <p>no data yet</p>
      ): (
         <div>
            {word.map((item, idx) => (
               <Word key={idx} {...item} />
            ))}
         </div>
      )}
   </>
   );
};

export default Dictionary;
