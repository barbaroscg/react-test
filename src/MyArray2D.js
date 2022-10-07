import React, {useEffect, useState } from 'react';
import axios from 'axios';
//const axios = require('axios');

function MyArray2D() {
  const[myArray, setMyArray] = useState([]);
  useEffect
  (async() =>
    {
     
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=TRY&days=30&interval=daily');
        console.log(response);
        setMyArray(response.data.prices);
    },
    []
  );

  return (
    <>
        <h1>Service Call</h1>
        {
            myArray.map(myArrayItem =>
                (
                    <span key="{myArrayItem[0]}">{myArrayItem[0]} - {myArrayItem[1]}<br/></span>
                )    
            )
        }        
    </>        
  );
}

export default MyArray2D;