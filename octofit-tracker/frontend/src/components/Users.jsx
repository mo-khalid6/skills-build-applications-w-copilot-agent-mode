import { useEffect, useState } from 'react';
import { fetchCollection } from '../api/client';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchCollection('/api/users').then((records) => {
      if (isMounted) setUsers(records);
    }).catch((error) => {
      console.error('Unable to load users', error);
      if (isMounted) setUsers([]);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card shadow-sm p-3 mb-4">
      <h2 className="h4">Users</h2>
      <p className="text-muted">Athletes and members tracked by OctoFit.</p>
      <ul className="list-group list-group-flush">
        {users.map((user) => (
          <li key={user._id || user.email} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{user.name}</strong>
              <br />
              <small className="text-muted">{user.email}</small>
            </span>
            <span className="badge bg-primary">{user.fitnessLevel || 'Member'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
