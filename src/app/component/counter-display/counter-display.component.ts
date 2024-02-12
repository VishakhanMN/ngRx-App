import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/shared/store/counter-model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {

  constructor(private store:Store<{counter:CounterModel}>){}

  counterDisplay!: number;
  channelName: string = '';
  counterSubscribe !: Subscription;
  counter$ !:Observable<CounterModel>


  ngOnInit(): void {
    /* We can either use .subscribe or Use Observables */
    /* this.counterSubscribe = this.store.select('counter').subscribe(data=>{
      this.counterDisplay = data.counter;
      this.channelName = data.channelName;
    }) */
    
    this.counter$ = this.store.select('counter')
  }

  ngOnDestroy(){
    /* if(this.counterSubscribe){
      this.counterSubscribe.unsubscribe();
    } */
  }

}
