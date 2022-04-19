import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Gallery from './components/Gallery/index';
import SGlobal from './style';

function App() {
  return (
    <SGlobal>
      <Header />  
      <main>
        <Gallery /> 
      </main>  
      <Footer />
    </SGlobal>
  );
}

export default App;
