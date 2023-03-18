import React from "react";


function normalize(val) {
    var delta = max - min;
    return function (val) {
        return (val - min) / delta;
    };
}


{/*

*\}