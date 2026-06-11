import { Router } from 'express';
const router = Router();
const sampleData = {
    users: [
        { id: 1, name: 'Avery', email: 'avery@example.com' },
        { id: 2, name: 'Jordan', email: 'jordan@example.com' },
    ],
    teams: [
        { id: 1, name: 'Trail Blazers' },
        { id: 2, name: 'Sprint Squad' },
    ],
    activities: [
        { id: 1, type: 'Run', duration: 30 },
        { id: 2, type: 'Cycle', duration: 45 },
    ],
    leaderboard: [
        { rank: 1, name: 'Avery', score: 120 },
        { rank: 2, name: 'Jordan', score: 105 },
    ],
    workouts: [
        { id: 1, name: 'Morning HIIT', duration: 20 },
        { id: 2, name: 'Recovery Stretch', duration: 15 },
    ],
};
router.get('/users', (_req, res) => res.json(sampleData.users));
router.get('/teams', (_req, res) => res.json(sampleData.teams));
router.get('/activities', (_req, res) => res.json(sampleData.activities));
router.get('/leaderboard', (_req, res) => res.json(sampleData.leaderboard));
router.get('/workouts', (_req, res) => res.json(sampleData.workouts));
export default router;
