import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Second from './components/second';
import Footer from './components/Footer';
import Slider from './components/Slider';
import { Admin } from './Pages/Admin';
import { MainRoutes } from './Pages/MainRoutes';


function App() {
  return (
    <div className="App">
    <MainRoutes />
    </div>
  );
}

export default App;
