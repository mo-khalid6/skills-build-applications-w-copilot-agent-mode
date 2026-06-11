import { useEffect, useState } from 'react';
import { fetchCollection } from '../api/client';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchCollection('/api/teams').then((records) => {
      if (isMounted) setTeams(records);
    }).catch((error) => {
      console.error('Unable to load teams', error);
      if (isMounted) setTeams([]);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card shadow-sm p-3 mb-4">
      <h2 className="h4">Teams</h2>
      <p className="text-muted">Groupings for training and competition.</p>
      <ul className="list-group list-group-flush">
        {teams.map((team) => (
          <li key={team._id || team.name} className="list-group-item">
            <strong>{team.name}</strong>
            <br />
            <small className="text-muted">Sport: {team.sport || 'Mixed'}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
