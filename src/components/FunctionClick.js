import React from 'react';

function FunctionClick(){

    function clickHandler(){
        console.log('clickHandler');
    }

    return (
        <button onClick={clickHandler}>click me</button>
    )
}

export default FunctionClick;