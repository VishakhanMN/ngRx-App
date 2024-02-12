import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent {

  constructor(private store:Store<{counter: CounterModel}>){}
  actionType: string = 'add';
  counterInput!: number;
  onIncrement(){
    this.store.dispatch(customIncrement({value: +this.counterInput,action: this.actionType}));
  }

}
