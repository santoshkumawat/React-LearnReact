import React from "react";

const imgLink = "/02-jsx/dynamic-attr.png";
const linkToSite = "https://santoshkumawat.com";

const DynamicAttr = () => {
    return (
        <div>
            <img src={imgLink} alt="" />
            <br />
            <br />
            <a href={linkToSite}>Click me</a>
        </div>
    );
}

export default DynamicAttr;