import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <main className="container py-4">
      <header className="mb-4">
        <p className="text-uppercase text-primary small fw-semibold">OctoFit Tracker</p>
        <h1 className="display-5">Modern multi-tier fitness dashboard</h1>
        <p className="text-muted">Routes connect the React presentation tier to the Express API and MongoDB-backed data tier.</p>
      </header>

      <nav className="nav nav-pills mb-4 flex-wrap gap-2">
        {['Users', 'Teams', 'Activities', 'Leaderboard', 'Workouts'].map((label) => (
          <NavLink key={label} to={label === 'Users' ? '/' : `/${label.toLowerCase()}`} className={({ isActive }) => `nav-link btn btn-outline-primary ${isActive ? 'active' : ''}`}>
            {label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </main>
  );
}

export default App;
