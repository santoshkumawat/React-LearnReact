import React from "react";
import "../00-stylesheet/01-components.css"

const Rule = () => {
    return (
        <div>
            <h3>Rule:</h3>
            <p>1. Components should return JSX.</p>
            <img className="components-rule" src={"/01-components/components-rule-1.png"} alt="" />
            <br/>

            <p>2. Components name must start with upercase letter.</p>
            <img className="components-rule" src={"/01-components/components-rule-2.png"} alt="" />
        </div>
    );
}
export default Rule;