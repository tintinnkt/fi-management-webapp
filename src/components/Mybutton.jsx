import React from 'react'
import { useState } from 'react'

function Mybutton() {
    const [count, setCount] = useState(0)
    return (
      <>
      <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
      </button>
      </>
    )
  }
export default Mybutton