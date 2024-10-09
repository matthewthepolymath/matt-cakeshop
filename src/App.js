import './App.css';
import './bootstrap.min.css';
import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import AllCakes from './Components/AllCakes';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><TopBar/> <Header/> <Welcome/> <Footer/> </>}/>
        <Route path='/allcakes' element={<><TopBar/>  <AllCakes/> <Footer/> </>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
