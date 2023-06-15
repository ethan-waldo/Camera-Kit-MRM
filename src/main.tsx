import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <Router>
    <App />
  </Router>
);
