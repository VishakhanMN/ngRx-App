import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/shared/store/counter-model';
import { getCounter } from 'src/app/shared/store/counter.selector';

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
    /* this counter inside is the name that we defined in app.module.ts */
    /* this.counterSubscribe = this.store.select('counter').subscribe(data=>{
      this.counterDisplay = data.counter;
      console.log('custom counter display');
      this.channelName = data.channelName;
    }); */
    /* for performance improving use only selected items from the object */
    this.counterSubscribe = this.store.select(getCounter).subscribe(data=>{
      this.counterDisplay = data;
      console.log('custom counter display');
    });
    
    /* this.counter$ = this.store.select('counter') */
  }

  ngOnDestroy(){
    if(this.counterSubscribe){
      this.counterSubscribe.unsubscribe();
    }
  }

}
