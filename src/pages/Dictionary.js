import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl, languages, ucFirst } from '../utils/utils';

const Dictionary = () => {
   const [words, setWords] = useState([]);
   const [lang, setLang] = useState('en');
   const [query, setQuery] = useState('Discovery'); // search data

   useEffect(() => {
      axios.get(`${apiUrl}/${lang}/${query}`).then((res) => setWords(res.data));
   }, [query, lang]);

   const languageFilter = (value) =>
      languages.forEach((obj) => {
         if (obj.code === value) {
            setQuery(obj.msg);
         }
      });

   const handleLang = (e) => {
      let value = e.target.value;
      setLang(value);
      switch (value) {
         case 'en':
            languageFilter(value);
            break;
         case 'es':
            languageFilter(value);
            break;
         case 'fr':
            languageFilter(value);
            break;
         case 'de':
            languageFilter(value);
            break;
         case 'it':
            languageFilter(value);
            break;
         case 'pt-BR':
            languageFilter(value);
            break;
         default:
            return;
      }
   };

   return (
      <>
         <h1>Dictionary</h1>
         <div>
            {languages?.map((item, idx) => (
               <button key={idx} onClick={handleLang} value={item.code}>
                  {item.language}
               </button>
            ))}
         </div>
         <div>
            {!words.length > 0 ? (
               <p>no data yet</p>
            ) : (
               <div>
                  {words.map((item, idx) => (
                     <h3 key={idx}>{ucFirst(item.word)}</h3>
                  ))}
               </div>
            )}
         </div>
      </>
   );
};

export default Dictionary;
