import React from "react";

const When = ({ pred, children }) => {
    if (pred()) {
        return children;
    }

    return null;
};

export default When;