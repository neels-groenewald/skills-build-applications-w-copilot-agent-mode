import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  username: string;
  activityType: string;
  duration: number; // minutes
  date: Date;
}

const ActivitySchema = new Schema<IActivity>({
  username: { type: String, required: true },
  activityType: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model<IActivity>('Activity', ActivitySchema);
