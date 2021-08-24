import Counter, { CounterDoc } from "models/counter.model";
import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";

export async function createCounter(data: DocumentDefinition<CounterDoc>) {
    try {
        const counter = await Counter.create(data);
        return counter;
    } catch (error) {
        throw new Error(`The title has been taken: ${error}`);
    }
}

export async function updateCounter(query: FilterQuery<CounterDoc>, data: UpdateQuery<CounterDoc>) {
    try {
        return await Counter.findByIdAndUpdate(query, data);
    } catch(error) {
        throw new Error(`Error updating counter: ${error}`);
    }
}

export async function deleteCounter(query: FilterQuery<CounterDoc>) {
    return await Counter.deleteOne(query);
}

export async function listCounter() {
    return await Counter.find({});
}

export async function findCounter(query: FilterQuery<CounterDoc>, options: QueryOptions = { lean: true }) {
    return await Counter.findOne(query, {}, options);
}