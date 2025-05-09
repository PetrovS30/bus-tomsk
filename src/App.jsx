import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeader from './components/page/PageHeader';
import MainPage from './components/pages/main-page/MainPage';
import TeamPage from './components/pages/team-page/TeamPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
