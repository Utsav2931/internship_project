import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import './Home.css'

function Home() {
   const [data, setData] = useState(null);

   useEffect(() => {
      async function fetchData() {
         const url = "https://api.tvmaze.com/search/shows?q=all"
         const response = await fetch(url);
         const json = await response.json();
         console.log(json);
         setData(json);
      }
      fetchData();
   }, []);


   return (
      data ?
         <div>
            <div className="heading">Select A Movie</div>
            <Card data={data} />
         </div>

         : <h1 className="loading"> Loading...</h1>
   )
}

export default Home;
