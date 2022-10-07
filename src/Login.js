import React, {useEffect, useState } from "react";


function Login() {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [result, setResult] = useState();

    const myButtonClick = async() =>
    {
        if (name==="onur" && password==="1234")
        {
            console.log("OK");
            setResult("Giriş Başarılı");
            }
        else
        {
            console.log("NOT OK");
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
export default Login;