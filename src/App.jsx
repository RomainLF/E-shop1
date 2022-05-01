import Header from './components/Header/index';
import Footer from './components/Footer/index';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SGlobal from './style';

function App() {
  return (
    <SGlobal>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}

export default App;
