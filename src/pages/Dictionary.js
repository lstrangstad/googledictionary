import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '../utils/utils';

const Dictionary = () => {
   const [words, setWords] = useState([]);
   const [lang, setLang] = useState('en');
   const [query, setQuery] = useState('Discovery');

   useEffect(() => {
      axios.get(`${apiUrl}/${lang}/${query}`).then((res) => setWords(res.data));
   }, []);
   return (
      <>
         <h1>Dictionary</h1>
         <div>
            {!words.length > 0 ? (
               <p>no data yet</p>
            ) : (
               <div>
                  {words.map((item, idx) => (
                     <h3 key={idx}>{item.word}</h3>
                  ))}
               </div>
            )}
         </div>
      </>
   );
};

export default Dictionary;
