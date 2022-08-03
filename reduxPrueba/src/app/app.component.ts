import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { DecrementarActions, IncrementarActions } from './contador/contador.actions';


interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public contador!: number;


  title = 'reduxPrueba';

  constructor( private store: Store<AppState> ){
    //this.contador = 10;
    this.store.subscribe( state =>
      this.contador = state.contador
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
