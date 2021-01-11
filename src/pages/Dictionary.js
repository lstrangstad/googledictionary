import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl, languages } from '../utils/utils';
import WordParent from '../components/WordParent';

const Dictionary = () => {
   const [words, setWords] = useState([]);
   const [lang, setLang] = useState('en');
   const [query, setQuery] = useState('Discovery'); // search data
   const [filter, setFilter] = useState('');
   const [errorStatus, setErrorStatus] = useState(0);
   const [errorData, setErrorData] = useState({});

   useEffect(async () => {
      try {
         await axios
            .get(`${apiUrl}/${lang}/${query}`)
            .then((res) => setWords(res.data));
      } catch (err) {
         setErrorData(err.response.data);
         setErrorStatus(err.response.status);
      }
   }, [query, lang]);

   const clearErrorState = () => {
      setErrorData({});
      setErrorStatus();
      setFilter('');
   };
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
      clearErrorState();
   };

   const handleFiltering = (e) => {
      setFilter(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setQuery(filter);
      clearErrorState();
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
            <form onSubmit={handleSubmit}>
               <input
                  className={'search'}
                  type={'text'}
                  placeholder={'Search...'}
                  value={filter}
                  onChange={handleFiltering}
               ></input>
               {errorStatus ? <p>{errorData.title}</p> : <></>}
            </form>
         </div>
         <div>
            {words.length < 1 ? (
               <p>no data yet</p>
            ) : (
               <div>
                  {words.map((item, idx) => (
                     <WordParent
                        key={idx}
                        {...item}
                        setQuery={setQuery}
                        clearErr={clearErrorState}
                     />
                  ))}
               </div>
            )}
         </div>
      </>
   );
};

export default Dictionary;
