import Menu from "./Menu"
import { Navigate } from "react-router-dom";
import React, {useEffect, useState } from "react";

function Home() {
    
    return (
        <div>
        <Menu />
        <h1>This is the Home page!</h1>
        </div>
    );
}
export default Home;