import React from "react";

const When = ({ cond, children }) => {
    if (cond) {
        return children;
    }

    return null;
};

export default When;