import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'

import './App.css';
import Mintsection from './pages/Mintsection';
import Navbar from './layouts/Navbar';
import Main from './pages/Main';
import Toaster from './pages/Toaster';
import Gallery from './pages/Gallery';

function App() {

  return (
    <BrowserRouter>
      <StickyNav length='0'>
        <Navbar />
      </StickyNav>
      <Routes>
        <Route path="/mintsection" element={<Mintsection />} />
        <Route path="/" element={<Main />} />
        <Route path="/toaster" element={<Toaster />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
