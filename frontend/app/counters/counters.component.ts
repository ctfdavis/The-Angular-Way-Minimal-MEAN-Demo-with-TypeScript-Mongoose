import { Component, OnInit } from '@angular/core';
import { Counter } from "./counter.model";
import { CounterService } from '../services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})

export class CountersComponent implements OnInit {
  subscription!: Subscription;
  counters: Counter[] = this.counterService.getCounters(); 

  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.subscription = this.counterService.countersChanged.subscribe(
      (counters: Counter[]) => {
        this.counters = counters;
      }
    )
  }

  increment(id: number): void {
    this.counterService.increment(id);
  }

  decrement(id: number): void {
    this.counterService.decrement(id);
  }

  delete(id: number): void {
    this.counterService.delete(id);
    this.counters = this.counters.filter(counter => counter.id !== id);
  }

  generate(): void {
    this.counterService.generate();
    this.counters = this.counterService.getCounters()
  }

}