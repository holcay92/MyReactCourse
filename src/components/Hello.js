import React from "react";

//This is JSX version

const Hello = ()=>{
    // return(
    //     <div>
    //         <h1>Hello Halil!</h1>
    //     </div>
    // )
    return React.createElement('div',
                                null,
                                React.createElement('h1',null,'Hello,,setur.com.tr'))
}

export default Hello;