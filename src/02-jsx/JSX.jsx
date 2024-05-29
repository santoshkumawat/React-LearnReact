import React from "react";
import JsInJsx from "./JsInJsx";
import DynamicAttr from "./DynamicAttr";

const name = "Santosh Kumawat";
const element = <p>Hello, {name}</p>;

const JSX = ()=> {
    return (
        <div className="react-jsx">
            <h1>JSX</h1>
            <p>JSX stands for Javascript XML</p>
            <img src="/02-jsx/jsx.png" alt="" />

            <h3>Embedding expression in JSX:</h3>
            <p>{element}</p>
            <img src="02-jsx/embedding-expression.png" alt="" />

            <h3>JavaScript in JSX:</h3>
            <JsInJsx/>
            <img src="02-jsx/js-in-jsx.png" alt="" srcset="" />

            <h3>Dynamic Attributes:</h3>
            <DynamicAttr/>
        </div>
    );
}

export default JSX;