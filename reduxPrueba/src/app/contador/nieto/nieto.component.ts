import { Component,  OnInit,  } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ResetActions } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  contador!: number;

  constructor( private store: Store<AppState> ) {
    // code
  }

  ngOnInit(): void {
    // code
  }


  reset(){
    const action = new ResetActions()
    this.store.dispatch(action);
  }

}
