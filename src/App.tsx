import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import './style/Style.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from './data/FormSource';
import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';

function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? "app dark" : "app"}>

      <BrowserRouter>
        <SideBar dark={setDark} setMode={dark} />
       
        <main >
        <NavBar dark={setDark} setMode={dark}/>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<List />} />
            <Route path='/users/:userId' element={<Single />} />
            <Route path='/users/new' element={<New inputs={userInputs} title="Add New User" />} />
            <Route path='/products' element={<List />} />
            <Route path='/products/:productId' element={<Single />} />
            <Route path='/products/new' element={<New inputs={productInputs} title="Add New Product" />} />
          </Routes>
        </main>

      </BrowserRouter>
    </div>
  )
}

export default App
