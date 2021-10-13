import React from 'react'
 
function KeyPad() {
  return (  
  <input type="password" onChange={e => console.log("Entering password...")}></input>
  )
}

export default KeyPad
