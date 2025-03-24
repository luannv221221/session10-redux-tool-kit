import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateQtyCart from './UpdateQtyCart';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <UpdateQtyCart />

    </>
  )
}

export default App
