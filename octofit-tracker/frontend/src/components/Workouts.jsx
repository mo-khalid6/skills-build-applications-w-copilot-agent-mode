import { useEffect, useState } from 'react';
import { fetchCollection } from '../api/client';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchCollection('/api/workouts').then((records) => {
      if (isMounted) setWorkouts(records);
    }).catch((error) => {
      console.error('Unable to load workouts', error);
      if (isMounted) setWorkouts([]);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card shadow-sm p-3 mb-4">
      <h2 className="h4">Workouts</h2>
      <p className="text-muted">Recommended sessions for the week ahead.</p>
      <ul className="list-group list-group-flush">
        {workouts.map((workout) => (
          <li key={workout._id || workout.name} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{workout.name}</strong>
              <br />
              <small className="text-muted">{workout.focus || 'General fitness'}</small>
            </span>
            <span className="badge bg-info text-dark">{workout.duration} min</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
