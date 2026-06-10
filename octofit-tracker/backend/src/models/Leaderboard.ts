import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboard extends Document {
  username: string;
  score: number;
  rank: number;
}

const LeaderboardSchema = new Schema<ILeaderboard>({
  username: { type: String, required: true, unique: true },
  score: { type: Number, required: true, default: 0 },
  rank: { type: Number, required: true, default: 0 },
});

export default mongoose.model<ILeaderboard>('Leaderboard', LeaderboardSchema);
