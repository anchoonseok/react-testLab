import React  from "react";
import {Children} from "react";

function book(props){
    return(
        <div>
            <h1> {'이 책의 이름은 ${props.name}입니다'}</h1>
            <h2>{'이 책의 이름은 ${props.name}입니다'} </h2>
        </div>
    )
}export default book;