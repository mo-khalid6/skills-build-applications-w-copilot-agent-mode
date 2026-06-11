import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number,
    fitnessLevel: String,
});
const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sport: String,
    members: [{ type: String }],
});
const activitySchema = new mongoose.Schema({
    type: { type: String, required: true },
    duration: Number,
    calories: Number,
    date: { type: Date, default: Date.now },
});
const leaderboardSchema = new mongoose.Schema({
    rank: { type: Number, required: true },
    name: { type: String, required: true },
    score: { type: Number, required: true },
});
const workoutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: Number,
    difficulty: String,
    focus: String,
});
export const User = mongoose.model('User', userSchema);
export const Team = mongoose.model('Team', teamSchema);
export const Activity = mongoose.model('Activity', activitySchema);
export const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardSchema);
export const Workout = mongoose.model('Workout', workoutSchema);
