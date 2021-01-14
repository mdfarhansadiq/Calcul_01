import React, {useState} from 'react';

const Calc = () => {
    var [str,setstr] = useState(" ")
    return (
        <div>
            <p>{str === " " ? "0" : str}</p>
            <button onClick={function (){
                setstr(str+1)
            }}>1</button>
            <button onClick={function (){
                setstr(str+2)
            }}>2</button>
            <button onClick={function (){
                setstr(str+3)
            }}>3</button>

        </div>
    );
};

export default Calc;