import { Injectable } from '@angular/core';
import { Counter } from '../counters/counter.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  countersChanged = new Subject<Counter[]>();

  currentId = 4;
  public counters: Counter[] = [
      { id: 1, count: 0, title: "Angular", description: "description 1" },
      { id: 2, count: 0, title: "gaming", description: "description 2" },
      { id: 3, count: 0, title: "blogging", description: "description 3" }
  ]

  getCounters(): Counter[] {
    return this.counters;
  }

  getCurrentId(): number {
    return this.currentId;
  }

  increment(id: number): void {
    for (let i = 0; i < this.counters.length; i++) {
      if (this.counters[i].id === id) {
        this.counters[i].count++;
        break;
      }
    }
  }

  decrement(id: number): void {
    for (let i = 0; i < this.counters.length; i++) {
      if (this.counters[i].id === id) {
        this.counters[i].count--;
        break;
      }
    }
  }

  delete(id: number): void {
    this.counters = this.counters.filter(counter => counter.id !== id);
  }
  
  // generate(): void {
  //   this.counters = [...this.counters, {id: this.currentId, count: 0, title: "", description: ""}]
  //   this.currentId++;
  // }

  generate(form?: {count: number, title: string, description: string}): void {
    if (form) {
      this.counters = [...this.counters, {id: this.currentId, count: form.count || 0, title: form.title, description: form.description}]
    } else {
      this.counters = [...this.counters, {id: this.currentId, count: 0, title: "", description: ""}]
    }
    this.currentId++;
    this.countersChanged.next(this.counters);
  }

  constructor() { }
}
