import React from "react";

const _When = ({ pred, children }) => {
    if (pred()) {
        return children;
    }

    return null;
};

export default _When;