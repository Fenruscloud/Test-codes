import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import HomePage from './HomePage';
import Navbar from './Navbar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <div className="container py-5">
    <HomePage />
      </div>
  </StrictMode>,
)
