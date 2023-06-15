import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CameraKit from './pages/CameraKit';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camerakit" element={<CameraKit />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
