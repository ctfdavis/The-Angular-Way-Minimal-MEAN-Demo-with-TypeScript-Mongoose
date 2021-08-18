import { Component, ViewChild } from '@angular/core';
import { CountersComponent } from './counters/counters.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(CountersComponent, { static: false })
  private countersComponent!: CountersComponent;
  formDisplay = false;
  title = 'the-Angular-Way';

  generate(): void {
    this.countersComponent.generate();
  }

  toggle(): void {
    this.formDisplay = !this.formDisplay;
  }
}
