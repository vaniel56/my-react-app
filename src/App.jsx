import { useState } from 'react'
import hero from './component/features/home/Hero'
import main from './component/features/home/main'
import header from './component/features/layout/header'
import footer from './component/features/layout/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <hero />
     <main />
     <header />
     <footer />
    </>
  )
}

export default App
