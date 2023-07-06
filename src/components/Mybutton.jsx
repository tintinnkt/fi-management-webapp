import React from 'react'
import { useState } from 'react'

function Mybutton({name}) {
    const [count, setCount] = useState(0)
    return (
      <>
      <button onClick={() => setCount((count) => count + 1)}>
            {name}'s count is {count}
      </button>
      </>
    )
  }
export default Mybutton