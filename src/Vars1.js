import React, {useEffect, useState } from "react";

function Vars1() {

    let [degisken1, setDegisken1] = useState("onur");
//    setDegisken1("onur");
    
    let mySurname = "kulabas";
    
    return (
        <div>
        {degisken1}&nbsp;
        {mySurname}
        </div>
    );
}
export default Vars1;