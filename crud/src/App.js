import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Icon from './components/Icon';
import Second from './components/second';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Icon />
      <Second />
      <Footer />
    </div>
  );
}

export default App;
