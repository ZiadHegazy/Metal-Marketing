import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import {APIProvider} from '@vis.gl/react-google-maps';
import { About } from './Components/About/About';
function App() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      {/* <Route path="/services" element={<Services />} /> */}
      
    </Routes>
  );
}

export default App;
