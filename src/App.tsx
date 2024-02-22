import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-yellow-500">
        Hello world!
      </h1>

      <h2 className='text-primary'>
        My Name Is??  
      </h2>

      <h2 className='text-secondary'>
        Adeleke Adeloye
      </h2>
    </>
  )
}

export default App
