import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { getChannelName } from 'src/app/shared/store/counter.selector';
import { CounterModel } from 'src/app/shared/store/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit{

  constructor(private store:Store<{counter: CounterModel}>){}
  actionType: string = 'add';
  channelName: string = '';
  counterInput!: number;
  counterSubscribe!: Subscription;

  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getChannelName).subscribe(data=>{
      this.channelName = data;
      console.log('custom counter name');
    })
  }

  onIncrement(){
    this.store.dispatch(customIncrement({value: +this.counterInput,action: this.actionType}));
  }

}
