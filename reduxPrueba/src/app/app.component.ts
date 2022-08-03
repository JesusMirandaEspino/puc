import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from './contador/app.reducer';
import { DecrementarActions, IncrementarActions } from './contador/contador.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public contador!: number;


  title = 'reduxPrueba';

  constructor( private store: Store<AppState> ){
    this.store.select('contador').subscribe( state =>
      this.contador = state
      )
  }



  incrementar(){
    const accion = new IncrementarActions();
    this.store.dispatch(accion);
  }


  decrementar(){
    const accion = new DecrementarActions();
    this.store.dispatch(accion);
  }

}
