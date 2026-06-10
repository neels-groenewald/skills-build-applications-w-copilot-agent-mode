import { useState, useEffect } from 'react'

// API endpoint: https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts
const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const API_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts`
  : 'http://localhost:8000/api/workouts'

export default function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(Array.isArray(data) ? data : data.results ?? [])
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="container mt-4"><p>Loading workouts...</p></div>
  if (error) return <div className="container mt-4"><p className="text-danger">Error: {error}</p></div>

  return (
    <div className="container mt-4">
      <h2>Workouts</h2>
      {workouts.length === 0 ? (
        <p>No workouts found.</p>
      ) : (
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Duration (min)</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((w) => (
              <tr key={w._id}>
                <td>{w.name}</td>
                <td>{w.description}</td>
                <td>{w.duration}</td>
                <td className={`text-capitalize fw-semibold text-${w.difficulty === 'hard' ? 'danger' : w.difficulty === 'medium' ? 'warning' : 'success'}`}>
                  {w.difficulty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
