import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu"

function Welcome(props) {
    return <h1>Hello {props.name}!</h1>;
}

function Props1() {
    const element = <Welcome name="onur"/>;

    ReactDOM.render(
    element,
    document.getElementById('root')
    );

    return (

            <div id="root">
                <Menu/>
            </div>

    );
}
export default Props1;




