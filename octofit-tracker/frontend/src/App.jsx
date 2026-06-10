import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Users from './components/Users'
import Teams from './components/Teams'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Workouts from './components/Workouts'
import octoLogo from './assets/hero.png'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={octoLogo} alt="OctoFit logo" height="32" />
            OctoFit Tracker
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { to: '/users', label: 'Users' },
                { to: '/teams', label: 'Teams' },
                { to: '/activities', label: 'Activities' },
                { to: '/leaderboard', label: 'Leaderboard' },
                { to: '/workouts', label: 'Workouts' },
              ].map(({ to, label }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    className={({ isActive }) =>
                      'nav-link' + (isActive ? ' active fw-bold' : '')
                    }
                    to={to}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mt-5 text-center">
                <img src={octoLogo} alt="OctoFit" width="120" className="mb-3" />
                <h1>Welcome to OctoFit Tracker</h1>
                <p className="lead">Track activities, manage teams, and climb the leaderboard.</p>
              </div>
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

