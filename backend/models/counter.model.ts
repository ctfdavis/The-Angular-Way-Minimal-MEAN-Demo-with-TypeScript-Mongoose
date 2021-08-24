import mongoose, { Document } from 'mongoose';

export interface CounterDoc extends Document {
  counter: number;
  title: string;
  description: string;
}

const CounterSchema = new mongoose.Schema(
  {
    counter: { type: Number, default: true },
    title: { type: String, default: true },
    description: { type: String, default: true },
  },
  { timestamps: true }
);

const Counter = mongoose.model<CounterDoc>('Counter', CounterSchema);

export default Counter;