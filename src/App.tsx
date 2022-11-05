
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from './data/FormSource';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/users' element={<List />}/>
          <Route path='/users/:userId' element={<Single />}/>
          <Route path='/users/new' element={<New inputs={userInputs} title="Add New User"/>}/>
          <Route path='/products' element={<List />}/>
          <Route path='/products/:productId' element={<Single />}/>
          <Route path='/products/new' element={<New inputs={productInputs} title="Add New Product"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
