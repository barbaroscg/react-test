import React, {useEffect, useState } from 'react';

function MyListLoop() {
  const[myArray, setMyArray] = useState([]);
  useEffect
  (async() =>
    {
        let myArray = ['Elma','Armut','Kivi','Muz'];
        setMyArray(myArray); 
    },
    []
  );

  return (
    <>
        <h1>Array Items</h1>
        {
            myArray.map(myArrayItem =>
                (
                    <span>{myArrayItem}<br/></span>
                )    
            )
        }
    </>        
  );
}

export default MyListLoop;