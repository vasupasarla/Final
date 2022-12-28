import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddCandidate from './Components/AddCandidate';
import EditCandidate from './Components/EditCandidate';
import ImportCandidate from './Components/ImportCandidate';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';
import CandidateList from './Components/CandidateList';

function App() {
  return (
    <header className='p-2'>
      <BrowserRouter>
      <ToastContainer />
        <Navbar />
        
        <Routes>
          <Route path='/' element={<CandidateList />} />
          <Route path='/add' element={<AddCandidate />} />
          <Route path='/edit/:cid' element={<EditCandidate />} />
          <Route path='/import' element={<ImportCandidate />} />
        </Routes>
        
      </BrowserRouter>

    </header>
  );
}

export default App;
