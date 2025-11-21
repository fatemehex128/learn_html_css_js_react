// import {useState} from "react";
import React from "react";

export default function BtnFunc(props) {

    let [count, setCount] = React.useState(0);

    return <div>

        <div onClick={()=>setCount(count + 1)}>
            count : {count}
        </div>

        BtnClass
        : {props.name}
        ---- {props.age}
        ---{props.edu}
        ---{props.brothers.map(x => " and " + x)}
    </div>;

}