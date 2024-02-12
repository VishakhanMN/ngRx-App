import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from 'src/app/shared/store/counter-model';
import { changeChannelName, decrement, increment, reset } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

  /* counter is the name used in app.module.ts */
  constructor(private store:Store<{counter:CounterModel}>){}
onIncrement(){
  this.store.dispatch(increment())
}

onDecrement(){
  this.store.dispatch(decrement())
}

onReset(){
  this.store.dispatch(reset())
}

onRename(){
  this.store.dispatch(changeChannelName({channel:'Welcome to Cr7 world'}))
}

}
