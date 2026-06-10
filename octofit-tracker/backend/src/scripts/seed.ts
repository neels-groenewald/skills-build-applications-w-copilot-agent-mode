/**
 * Seed the octofit_db database with test data
 *
 * Usage: npx ts-node src/scripts/seed.ts
 */
import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Workout from '../models/Workout';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit_db';

async function seed(): Promise<void> {
  console.log('Seed the octofit_db database with test data');
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB (octofit_db)');

  // Clear existing data
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({}),
  ]);
  console.log('Cleared existing collections');

  // Seed users
  const users = await User.insertMany([
    { username: 'monaoctocat', email: 'mona@octofit.dev', password: 'hashed_pw_1' },
    { username: 'codercat', email: 'coder@octofit.dev', password: 'hashed_pw_2' },
    { username: 'fitnessfan', email: 'fitness@octofit.dev', password: 'hashed_pw_3' },
    { username: 'runnercat', email: 'runner@octofit.dev', password: 'hashed_pw_4' },
    { username: 'cyclistcat', email: 'cyclist@octofit.dev', password: 'hashed_pw_5' },
  ]);
  console.log(`Seeded ${users.length} users`);

  // Seed teams
  const teams = await Team.insertMany([
    { name: 'Octo Sprinters', description: 'Fast runners and cyclists', members: ['monaoctocat', 'runnercat'] },
    { name: 'Code & Climb', description: 'Developers who love hiking', members: ['codercat', 'fitnessfan'] },
    { name: 'Byte Bikers', description: 'Cycling enthusiasts', members: ['cyclistcat', 'monaoctocat'] },
  ]);
  console.log(`Seeded ${teams.length} teams`);

  // Seed activities
  const activities = await Activity.insertMany([
    { username: 'monaoctocat', activityType: 'Running', duration: 30, date: new Date('2024-06-01') },
    { username: 'codercat', activityType: 'Cycling', duration: 45, date: new Date('2024-06-02') },
    { username: 'fitnessfan', activityType: 'Yoga', duration: 60, date: new Date('2024-06-03') },
    { username: 'runnercat', activityType: 'Running', duration: 50, date: new Date('2024-06-04') },
    { username: 'cyclistcat', activityType: 'Cycling', duration: 90, date: new Date('2024-06-05') },
    { username: 'monaoctocat', activityType: 'Swimming', duration: 40, date: new Date('2024-06-06') },
    { username: 'codercat', activityType: 'Weight Training', duration: 35, date: new Date('2024-06-07') },
  ]);
  console.log(`Seeded ${activities.length} activities`);

  // Seed leaderboard
  const leaderboard = await Leaderboard.insertMany([
    { username: 'monaoctocat', score: 320, rank: 1 },
    { username: 'runnercat', score: 280, rank: 2 },
    { username: 'cyclistcat', score: 250, rank: 3 },
    { username: 'fitnessfan', score: 210, rank: 4 },
    { username: 'codercat', score: 180, rank: 5 },
  ]);
  console.log(`Seeded ${leaderboard.length} leaderboard entries`);

  // Seed workouts
  const workouts = await Workout.insertMany([
    { name: 'Morning Run', description: '5km easy morning run', duration: 30, difficulty: 'easy' },
    { name: 'HIIT Blast', description: 'High intensity interval training', duration: 20, difficulty: 'hard' },
    { name: 'Yoga Flow', description: 'Full body yoga session', duration: 45, difficulty: 'easy' },
    { name: 'Cycling Endurance', description: '20km moderate cycling', duration: 60, difficulty: 'medium' },
    { name: 'Strength Circuit', description: 'Full body strength training', duration: 40, difficulty: 'medium' },
    { name: 'Swimming Laps', description: '1km open water swim', duration: 35, difficulty: 'medium' },
  ]);
  console.log(`Seeded ${workouts.length} workouts`);

  await mongoose.disconnect();
  console.log('Seed complete! Database disconnected.');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
