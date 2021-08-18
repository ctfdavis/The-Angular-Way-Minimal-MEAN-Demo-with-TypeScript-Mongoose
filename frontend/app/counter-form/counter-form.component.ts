import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.scss']
})
export class CounterFormComponent implements OnInit, AfterViewInit {
  @ViewChild("count", {static: true}) count!: ElementRef;
  // counterForm: FormGroup;

  constructor(
    // private fb: FormBuilder, 
    private counterService: CounterService
    ) {
    // this.counterForm = fb.group({
    //   'count': [0],
    //   'title': [""],
    //   'description': [""]
    // })
   }

  ngOnInit(): void {
    console.log(this.count);
  }

  ngAfterViewInit(): void {
    console.log(this.count);
  }

  onSubmit(form: any) {
    console.log(form);
    this.counterService.generate(form);
  }
}
