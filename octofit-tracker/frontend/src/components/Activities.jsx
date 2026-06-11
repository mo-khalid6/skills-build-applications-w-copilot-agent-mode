import { useEffect, useState } from 'react';
import { fetchCollection } from '../api/client';

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchCollection('/api/activities').then((records) => {
      if (isMounted) setActivities(records);
    }).catch((error) => {
      console.error('Unable to load activities', error);
      if (isMounted) setActivities([]);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card shadow-sm p-3 mb-4">
      <h2 className="h4">Activities</h2>
      <p className="text-muted">Recent training sessions and movement logs.</p>
      <ul className="list-group list-group-flush">
        {activities.map((activity) => (
          <li key={activity._id || activity.type} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{activity.type}</strong>
              <br />
              <small className="text-muted">{new Date(activity.date).toLocaleDateString()}</small>
            </span>
            <span className="badge bg-success">{activity.duration} min</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
