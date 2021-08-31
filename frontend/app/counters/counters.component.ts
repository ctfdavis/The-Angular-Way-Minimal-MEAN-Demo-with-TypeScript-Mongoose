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
    this.getAll();
  }

  getAll(): void {
    this.counterService.getCounters().subscribe((counters: Counter[]) => {
      this.counters = counters;
    });
  }

  increment(counter: Counter): void {
    this.counterService.increment(counter).subscribe(result => {
      if (result.status === 200) {
        this.counters.filter(old => old._id === counter._id)[0].count++;
      }
    })
  }

  decrement(counter: Counter): void {
    this.counterService.decrement(counter).subscribe(result => {
      if (result.status === 200) {
        this.counters.filter(old => old._id === counter._id)[0].count--;
      }
    })
  }

  delete(id: string): void {
    this.counterService.delete(id).subscribe(() => {
        this.counters = this.counters.filter((counter) => counter._id !== id);
    });
  }
}
