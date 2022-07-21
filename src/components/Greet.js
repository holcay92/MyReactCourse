import React from 'react';
/*
function Greet(){
    return <h1>Welcome to Setur!!</h1>
}*/

const Greet = ()=> <h1>Welcome to Setur!!!</h1>
export default Greet;

//export const Greet = ()=> <h1>Welcome to Setur!!!</h1>
// yukarıdaki gibi de yazabiliyoruz tek satır oluyor ancak import ederken aynı isimde olması gerekiyor
// yani App.js teki: import Greet from './components/Greet'; Greet yerine myGreet yazamayız. 
// bizim kullandığımızda farklı isimlerde verebiliyoruz!