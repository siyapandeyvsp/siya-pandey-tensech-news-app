import { useState } from 'react'

import NewsDisplay from './NewsDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-200">
      
        <NewsDisplay/>
        </div>
    </>
  )
}

export default App
