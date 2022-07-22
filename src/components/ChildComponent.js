import React from 'react'

function ChildComponent(props) {
  return (
    <div>
       {/*<button onClick={props.greetHandler}>Greet Parent</button>*/} {/*if no parameter is passed use this */}
       <button onClick={() => props.greetHandler('childParameter')}>Greet Parent</button>   {/*if any parameter is passed use this */}
    </div>
  )
}

export default ChildComponent