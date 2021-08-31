import mongoose, { Document } from 'mongoose';

export interface CounterDoc extends Document {
  count: number;
  title: string;
  description: string;
}

const CounterSchema = new mongoose.Schema(
  {
    count: { type: Number, default: true },
    title: { type: String, default: true, unique: true, trim: true },
    description: { type: String, default: true },
  },
  { timestamps: true }
);

const Counter = mongoose.model<CounterDoc>('Counter', CounterSchema);

export default Counter;
