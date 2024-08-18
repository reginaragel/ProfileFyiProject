
import './App.css';
import CartPage from './components/CartPage';
import Header from './components/Header';
import MainPage from './components/MainPage';
import {Routes,Route} from 'react-router-dom';

function App() {
  // const [showHeader,setShowHeader]=useState(false);
  return (
    // <div >
    //   {/* {showHeader?<Header/>:<MainPage setShowHeader={setShowHeader}/>} */}
      
    // </div>
    <Routes>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
    // <CartPage/>
  );
}

export default App;
