import React, {useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login2() {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [result, setResult] = useState();
    let navigate = useNavigate();

    const myButtonClick = async() =>
    {

        let requestBody = {
            service_val_name:name,
            service_val_password:password
        }
        const response = await axios.post ('https://www.mockachino.com/1b9b9eca-13b9-41/login',requestBody);

        if (response.data.result=="success") {
//            setResult("Giriş Başarılı");
                console.log("Success");
                localStorage.setItem("loginID", "onurkulabas");

                navigate("/");


        } else {
            setResult("Hatalı kullanıcı adı veya şifre");
        }

    }

    
    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" onChange={e=>setName(e.target.value)} />
            <br /><br />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" onChange={e=>setPassword(e.target.value)} />
            <br /><br />
            <input type="button" value="Gönder" onClick={()=>myButtonClick()}/>
            <br/>{result}
        </form>

    );
}
export default Login2;