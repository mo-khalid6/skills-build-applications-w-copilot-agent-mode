import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';
console.log('Seed the octofit_db database with test data');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
async function seed() {
    await mongoose.connect(MONGODB_URI);
    await Promise.all([
        User.deleteMany({}),
        Team.deleteMany({}),
        Activity.deleteMany({}),
        LeaderboardEntry.deleteMany({}),
        Workout.deleteMany({}),
    ]);
    await User.insertMany([
        { name: 'Avery Chen', email: 'avery.chen@example.com', age: 29, fitnessLevel: 'Intermediate' },
        { name: 'Jordan Miles', email: 'jordan.miles@example.com', age: 34, fitnessLevel: 'Advanced' },
        { name: 'Sam Rivera', email: 'sam.rivera@example.com', age: 27, fitnessLevel: 'Beginner' },
    ]);
    await Team.insertMany([
        { name: 'Trail Blazers', sport: 'Running', members: ['Avery Chen', 'Jordan Miles'] },
        { name: 'Peak Pioneers', sport: 'Cycling', members: ['Sam Rivera'] },
    ]);
    await Activity.insertMany([
        { type: 'Run', duration: 35, calories: 320, date: new Date('2026-06-10') },
        { type: 'Cycling', duration: 45, calories: 410, date: new Date('2026-06-11') },
    ]);
    await LeaderboardEntry.insertMany([
        { rank: 1, name: 'Avery Chen', score: 1420 },
        { rank: 2, name: 'Jordan Miles', score: 1385 },
        { rank: 3, name: 'Sam Rivera', score: 1298 },
    ]);
    await Workout.insertMany([
        { name: 'HIIT Burn', duration: 20, difficulty: 'Hard', focus: 'Cardio' },
        { name: 'Core Reset', duration: 15, difficulty: 'Easy', focus: 'Core' },
        { name: 'Power Cycle', duration: 30, difficulty: 'Medium', focus: 'Legs' },
    ]);
    console.log('Seed data inserted successfully');
    await mongoose.disconnect();
}
void seed();
