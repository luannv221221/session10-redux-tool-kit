import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateQtyCart from './UpdateQtyCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import Home from './Home';
import CategoryLayout from './layouts/CategoryLayout';
import Category from './Category';
import { Provider } from 'react-redux';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {/* <Header />
      <UpdateQtyCart /> */}
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path='category' element={<CategoryLayout />}>
          <Route index element={<Category />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
