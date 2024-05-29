import React from "react";

function fullName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: "Santosh",
    lastName: "Kumawat"
};

const JsInJsx = () => {
    return (
        <h3>{fullName(user)}</h3>
    );
}

export default JsInJsx;