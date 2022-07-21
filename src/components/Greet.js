import React from 'react';
/*
function Greet(){
    return <h1>Welcome to Setur!!</h1>
}*/

//es6 arrow function
const Greet = props=>{
    console.log(props)
    return (
    <div>
        <h1>
            Greetings from Setur!!! {props.name} a.k.a. {props.heroName}</h1>          
            {props.children}
    </div> //If there is nothing no problem in props.children
    )
}
export default Greet;

//export const Greet = ()=> <h1>Welcome to Setur!!!</h1>
// yukarıdaki gibi de yazabiliyoruz tek satır oluyor ancak import ederken aynı isimde olması gerekiyor
// yani App.js teki: import Greet from './components/Greet'; Greet yerine myGreet yazamayız. 
// bizim kullandığımızda farklı isimlerde verebiliyoruz!