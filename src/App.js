import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import {APIProvider} from '@vis.gl/react-google-maps';
import { About } from './Components/About/About';
import { Services } from './Components/Services/Services';
import { ItemPage } from './Components/ItemPage/ItemPage';
function App() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services />} />
      <Route path='/item' element={<ItemPage />} />
      
    </Routes>
  );
}

export default App;
