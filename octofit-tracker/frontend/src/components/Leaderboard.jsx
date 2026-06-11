import { useEffect, useState } from 'react';
import { fetchCollection } from '../api/client';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchCollection('/api/leaderboard').then((records) => {
      if (isMounted) setEntries(records);
    }).catch((error) => {
      console.error('Unable to load leaderboard', error);
      if (isMounted) setEntries([]);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card shadow-sm p-3 mb-4">
      <h2 className="h4">Leaderboard</h2>
      <p className="text-muted">Current standings for the OctoFit community.</p>
      <ol className="list-group list-group-numbered">
        {entries.map((entry) => (
          <li key={entry._id || entry.rank} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{entry.name}</span>
            <span className="badge bg-warning text-dark">{entry.score} pts</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
