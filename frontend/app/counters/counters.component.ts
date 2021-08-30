import { Component, OnInit } from '@angular/core';
import { Counter } from './counter.model';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
})
export class CountersComponent implements OnInit {
  counters!: Counter[];

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.getCounters().subscribe((counters: Counter[]) => {
      this.counters = counters;
    });
    // this.subscription = this.counterService.countersChanged.subscribe(
    //   (counters: Counter[]) => {
    //     this.counters = counters;
    //   }
    // );
  }

  increment(counter: Counter): void {
    this.counterService.increment(counter);
  }

  decrement(counter: Counter): void {
    this.counterService.decrement(counter);
  }

  delete(id: string): void {
    this.counterService.delete(id);
    this.counters = this.counters.filter((counter) => counter.id !== id);
  }

  create(form: { count: number; title: string; description: string }): void {
    this.counterService.create(form);
  }
}
