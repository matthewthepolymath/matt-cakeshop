import './App.css';
import './bootstrap.min.css';
import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><TopBar/> <Header/> <Welcome/> <Footer/> </>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
