import Header from './components/Header/index';
import Footer from './components/Footer/index';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Monde from './pages/Monde.jsx';
import SGlobal from './style';

function App() {
  return (
    <SGlobal>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Monde' element={<Monde />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}

export default App;
