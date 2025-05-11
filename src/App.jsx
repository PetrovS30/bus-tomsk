import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeader from './components/page/PageHeader';
import MainPage from './components/views/main-page/MainPage';
import TeamPage from './components/views/team-page/TeamPage';
import { ToastContainer, Bounce } from 'react-toastify';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </BrowserRouter>
    
  );
}

export default App;